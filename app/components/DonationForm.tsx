import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/app/components/dialog';

interface DonationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DonationForm({ isOpen, onClose }: DonationFormProps) {
  const { t } = useTranslation('donation');
  const [donationType, setDonationType] = useState<'once' | 'monthly'>('once');
  const [amount, setAmount] = useState<string>('');
  const [customAmount, setCustomAmount] = useState<string>('');

  const predefinedAmounts = ['1000', '500', '300', '100', '80', '50'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const finalAmount = customAmount || amount;
    console.log('Donation:', {
      type: donationType,
      amount: finalAmount,
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] bg-white dark:bg-gray-800">
        <div className="grid grid-cols-2 gap-0">
          {/* Left side - Image */}
          <div className="relative h-full">
            <Image
              src="/tamilgirls.jpg"
              alt={t('imageTitle')}
              className="object-cover rounded-l-lg"
              fill
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/70 to-transparent text-white-400">
              <h2 className="text-xl font-bold mb-2">{t('imageTitle')}</h2>
              <p className="text-sm">{t('imageDescription')}</p>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="p-6 bg-white dark:bg-gray-800 dark:text-gray-100">
            <DialogHeader>
              <DialogTitle className="text-center text-2xl mb-6 text-stone-700 dark:text-gray-100">
                {t('formTitle')}
              </DialogTitle>
            </DialogHeader>

            {/* Secure donation header */}
            <div className="flex items-center gap-2 mb-6">
              <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="text-xl font-semibold text-stone-700 dark:text-gray-100">{t('secureHeader')}</span>
            </div>

            {/* Donation type selector */}
            <div className="flex gap-4 mb-6">
              <button
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

            {/* Amount buttons */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {predefinedAmounts.map((preset) => (
                <button
                  key={preset}
                  onClick={() => {
                    setAmount(preset);
                    setCustomAmount('');
                  }}
                  className={`py-2 px-4 rounded-md border ${
                    amount === preset 
                      ? 'border-red-500 bg-red-50 text-slate-700' 
                      : 'border-gray-300'
                  }`}
                >
                  ${preset}
                </button>
              ))}
            </div>

            {/* Custom amount input */}
            <div className="mb-6">
              <div className="flex items-center border rounded-md">
                <span className="px-3 text-stone-500">$</span>
                <input
                  type="number"
                  placeholder={t('otherAmount')}
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setAmount('');
                  }}
                  className="flex-1 p-2 focus:outline-none"
                  min="1"
                />
              </div>
            </div>

            {/* Submit button */}
            <button
              onClick={handleSubmit}
              className="w-full py-3 px-4 bg-red-700 dark:bg-green-600 text-white rounded-md hover:bg-red-900 transition-colors"
            >
              {t('donateButton')}
            </button>

            {/* Add toast or notification handling for success/error messages */}
            {/* These messages can be shown using t('successMessage') and t('errorMessage') */}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
