import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const donation = await prisma.donation.create({
            data: {
                name: body.name,
                email: body.email,
                amount: parseFloat(body.amount),
            },
        });

        return NextResponse.json(donation);
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json(
            { error: 'Error processing donation' },
            { status: 500 }
        );
    }
}