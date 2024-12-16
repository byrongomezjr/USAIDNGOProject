import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

// Check environment variables
if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error('STRIPE_SECRET_KEY is not set');
}

if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error('Supabase environment variables are not set');
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2024-11-20.acacia' // Latest version of Stripe API
});

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        console.log('Received request:', body);

        if (!body.amount || !body.name || !body.email) {
            return new NextResponse(
                JSON.stringify({ error: 'Missing required fields' }),
                {
                    status: 400,
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            );
        }

        const amount = parseFloat(body.amount);
        if (isNaN(amount) || amount <= 0) {
            return new NextResponse(
                JSON.stringify({ error: 'Invalid amount' }),
                {
                    status: 400,
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            );
        }

        const paymentIntent = await stripe.paymentIntents.create({
            amount: Math.round(amount * 100),
            currency: 'usd',
            automatic_payment_methods: {
                enabled: true,
            },
            metadata: {
                name: body.name,
                email: body.email,
            },
        });

        const { error: supabaseError } = await supabase
            .from('donation')
            .insert({
                name: body.name,
                email: body.email,
                amount: amount,
                stripe_payment_intent_id: paymentIntent.id,
                status: 'pending'
            });

        if (supabaseError) {
            console.error('Supabase error:', supabaseError);
            return new NextResponse(
                JSON.stringify({ error: 'Database error' }),
                {
                    status: 500,
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            );
        }

        // Log the successful response
        console.log('Sending successful response with client secret');

        return new NextResponse(
            JSON.stringify({
                clientSecret: paymentIntent.client_secret,
                status: 'success'
            }),
            {
                status: 200,
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        );
    } catch (error) {
        console.error('Server error:', error);
        return new NextResponse(
            JSON.stringify({
                error: 'Error processing donation',
                details: error instanceof Error ? error.message : 'Unknown error'
            }),
            {
                status: 500,
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        );
    }
}