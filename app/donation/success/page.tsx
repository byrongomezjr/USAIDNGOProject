'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { loadStripe } from '@stripe/stripe-js';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function SuccessPage() {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const searchParams = useSearchParams();
  
  useEffect(() => {
    const checkStatus = async () => {
      const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
      const clientSecret = searchParams.get('payment_intent_client_secret');
      const paymentIntentId = searchParams.get('payment_intent');
      
      if (!stripe || !clientSecret || !paymentIntentId) {
        setStatus('error');
        return;
      }

      try {
        const { paymentIntent } = await stripe.retrievePaymentIntent(clientSecret);
        
        if (paymentIntent?.status === 'succeeded') {
          // Update donation status in Supabase
          const { error } = await supabase
            .from('donation')
            .update({ 
              status: 'completed',
              updated_at: new Date().toISOString()
            })
            .eq('stripe_payment_intent_id', paymentIntentId);

          if (error) {
            console.error('Error updating donation status:', error);
            setStatus('error');
            return;
          }

          setStatus('success');
        } else {
          setStatus('error');
        }
      } catch (error) {
        console.error('Error checking payment status:', error);
        setStatus('error');
      }
    };

    checkStatus();
  }, [searchParams]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-xl">Processing your donation...</p>
        </div>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center text-red-600">
          <h1 className="text-2xl font-bold mb-2">Oops!</h1>
          <p>There was an error processing your donation.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">Thank you for your donation!</h1>
        <p className="text-xl">Your payment has been processed successfully.</p>
      </div>
    </div>
  );
}
