'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { useTranslation } from 'react-i18next';
import DonationForm from './DonationForm';
import { Plus } from 'lucide-react';

export default function WaysToGive() {
  const { t } = useTranslation('waystogive');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [donationType, setDonationType] = useState<'once' | 'monthly'>('once');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleDonateClick = (type: 'once' | 'monthly') => {
    console.log('Button clicked with type:', type);
    setDonationType(type);
    setIsDialogOpen(true);
  };

  const donationOptions = [
    {
      key: 'oneTime',
      title: t('options.oneTime.title'),
      description: t('options.oneTime.description'),
      buttonText: t('options.oneTime.buttonText')
    },
    {
      key: 'monthly',
      title: t('options.monthly.title'),
      description: t('options.monthly.description'),
      buttonText: t('options.monthly.buttonText')
    }
  ];

  const faqItems = t('faqItems', { returnObjects: true });

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">{t('title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {donationOptions.map((option, index) => (
            <motion.div
              key={option.key}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{option.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{option.description}</p>
                  <p>{t('impactText')}</p>
                </CardContent>
                <CardFooter>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      variant="outline" 
                      onClick={() => handleDonateClick(option.key === 'oneTime' ? 'once' : 'monthly')}
                    >
                      {option.buttonText}
                    </Button>
                  </motion.div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16" id="faq">
          <h2 className="text-3xl font-bold mb-8">{t('faqTitle')}</h2>
          <div className="space-y-4">
            {(faqItems as Array<{question: string; answer: string}>).map((item, index) => (
              <div 
                key={index}
                className="border-b border-gray-200"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full py-4 flex justify-between items-center text-left"
                >
                  <span className="text-xl font-medium">{item.question}</span>
                  <Plus 
                    className={`transform transition-transform ${
                      openFaq === index ? 'rotate-45' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="pb-4">
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <DonationForm 
        isOpen={isDialogOpen} 
        onClose={() => setIsDialogOpen(false)} 
        defaultDonationType={donationType}
      />
    </section>
  );
}