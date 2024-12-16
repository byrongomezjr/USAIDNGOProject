'use client';

import { useState } from 'react';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/app/components/dialog';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

function CheckoutForm({ onBack, onClose }: { onBack: () => void; onClose: () => void }) {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);
  const { t } = useTranslation('donation');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setProcessing(true);
    try {
      const { error: submitError } = await elements.submit();
      if (submitError) {
        setError(submitError.message || 'An error occurred');
        setProcessing(false);
        return;
      }

      const { error: confirmError } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/donation/success`,
        },
      });

      if (confirmError) {
        setError(confirmError.message || 'An error occurred');
      }
    } catch (error) {
      setError('An unexpected error occurred');
      console.error('Error:', error);
    }
    setProcessing(false);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <PaymentElement />
        {error && <div className="text-red-500">{error}</div>}
        <div className="flex space-x-4">
          <button
            type="button"
            onClick={onBack}
            className="flex-1 py-3 px-4 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            {t('back')}
          </button>
          <button
            type="submit"
            disabled={!stripe || processing}
            className="flex-1 py-3 px-4 bg-red-700 text-white rounded-md hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {processing ? t('processing') : t('completeDonation')}
          </button>
        </div>
      </form>
    </div>
  );
}

export default function DonationForm({ 
  isOpen, 
  onClose,
  defaultDonationType = 'once'
}: { 
  isOpen: boolean; 
  onClose: () => void;
  defaultDonationType?: 'once' | 'monthly';
}) {
  const { t } = useTranslation('donation');
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [donationType, setDonationType] = useState<'once' | 'monthly'>(defaultDonationType);
  const [amount, setAmount] = useState<string>('');
  const [customAmount, setCustomAmount] = useState<string>('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const predefinedAmounts = ['1000', '500', '300', '100', '80', '50'];

  const handleInitiatePayment = async () => {
    const finalAmount = customAmount || amount;
    if (!finalAmount || !name || !email) {
      setError('Please fill in all required fields');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/donations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: finalAmount,
          name,
          email,
          donationType,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to process donation');
      }
      
      if (data.clientSecret) {
        setClientSecret(data.clientSecret);
      } else {
        throw new Error('No client secret received');
      }
    } catch (error) {
      console.error('Payment error:', error);
      setError(error instanceof Error ? error.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    setClientSecret(null);
  };

  const handleClose = () => {
    setClientSecret(null);
    setAmount('');
    setCustomAmount('');
    setName('');
    setEmail('');
    setError(null);
    setIsLoading(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[800px] bg-white dark:bg-gray-800">
        <div className="grid grid-cols-2 gap-0">
          <div className="relative h-full">
            <Image
              src="/tamilgirls.jpg"
              alt={t('imageAlt')}
              className="object-cover rounded-l-lg"
              fill
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/70 to-transparent text-white">
              <h2 className="text-xl font-bold mb-2">{t('helpTitle')}</h2>
              <p className="text-sm">{t('helpDescription')}</p>
            </div>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 dark:text-gray-100">
            <DialogHeader>
              <DialogTitle className="text-center text-2xl mb-6 text-stone-700 dark:text-gray-100">
                {t('title')}
              </DialogTitle>
            </DialogHeader>

            {!clientSecret ? (
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span className="text-xl font-semibold text-stone-700 dark:text-gray-100">{t('secureHeader')}</span>
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setDonationType('once')}
                    className={`flex-1 py-2 px-4 rounded-md border ${
                      donationType === 'once' 
                        ? 'border-red-500 bg-red-50 text-slate-700' 
                        : 'border-gray-300'
                    }`}
                  >
                    {t('giveOnce')}
                  </button>
                  <button
                    type="button"
                    onClick={() => setDonationType('monthly')}
                    className={`flex-1 py-2 px-4 rounded-md border ${
                      donationType === 'monthly' 
                        ? 'border-red-500 bg-red-50 text-slate-700' 
                        : 'border-gray-300'
                    }`}
                  >
                    {t('giveMonthly')}
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {predefinedAmounts.map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => {
                        setAmount(preset);
                        setCustomAmount('');
                      }}
                      className={`py-2 px-4 rounded-md border transition-colors ${
                        amount === preset 
                          ? 'border-red-500 bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-300' 
                          : 'border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700'
                      }`}
                    >
                      ${preset}
                    </button>
                  ))}
                </div>

                <div className="flex items-center border rounded-md bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600">
                  <span className="px-3 text-gray-500 dark:text-gray-400">$</span>
                  <input
                    type="number"
                    placeholder={t('otherAmount')}
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setAmount('');
                    }}
                    className="flex-1 p-2 bg-transparent text-gray-900 dark:text-gray-100 focus:outline-none"
                    min="1"
                  />
                </div>

                <input
                  type="text"
                  placeholder={t('name')}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 border rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  required
                />
                <input
                  type="email"
                  placeholder={t('email')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  required
                />

                <button
                  onClick={handleInitiatePayment}
                  disabled={isLoading}
                  className="w-full py-3 px-4 bg-red-700 dark:bg-green-600 text-white rounded-md hover:bg-red-900 disabled:opacity-50 transition-colors"
                >
                  {isLoading ? t('processing') : t('continue')}
                </button>
              </div>
            ) : (
              <Elements stripe={stripePromise} options={{ clientSecret }}>
                <CheckoutForm onBack={handleBack} onClose={handleClose} />
              </Elements>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
