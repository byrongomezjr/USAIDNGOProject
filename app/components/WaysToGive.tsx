import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function WaysToGive() {
  const donationOptions = [
    {
      title: 'One-Time Donation',
      description: 'Make an immediate impact with a gracious single contribution to our cause.',
      buttonText: 'Donate Now'
    },
    {
      title: 'Monthly Giving',
      description: 'Provide ongoing support to our youth through regular monthly donations.',
      buttonText: 'Join Monthly'
    },
    {
      title: 'Corporate Partnerships',
      description: 'Connect your company in meaningful social responsibility initiatives in hopes of a bright future.',
      buttonText: 'Partner With Us'
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Ways to Give</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {donationOptions.map((option, index) => (
            <motion.div
              key={option.title}
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
                  <p>Support our programs and make a lasting impact on children&apos;s lives.</p>
                </CardContent>
                <CardFooter>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="outline">{option.buttonText}</Button>
                  </motion.div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}