'use client';
import { motion } from 'framer-motion';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function NewsletterSignup() {
  const { t } = useTranslation('newsletter');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('supporters')
        .insert([
          {
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            signup_date: new Date().toISOString()
          }
        ]);

      if (error) throw error;

      // Clear form after successful submission
      setFormData({ firstName: '', lastName: '', email: '' });
      alert('Thank you for signing up!');
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error submitting your information.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-16 bg-background"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-foreground">
          Be An Active Supporter
        </h2>
        <p className="mb-8 text-muted-foreground">
          Be the first to know about our humanitarian relief efforts in times of emergency.
        </p>
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto flex flex-wrap gap-4">
          <div className="flex w-full gap-4 flex-col sm:flex-row">
            <Input 
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="First Name (Optional)"
              className="flex-1" 
            />
            <Input 
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Last Name (Optional)"
              className="flex-1" 
            />
          </div>
          <div className="w-full flex gap-4">
            <Input 
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="Email address"
              className="flex-grow" 
            />
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="px-8 bg-red-700 dark:bg-slate-800 text-white hover:bg-red-800 dark:hover:bg-slate-700"
                variant="default"
              >
                {isSubmitting ? 'Submitting...' : 'SUBMIT'}
              </Button>
            </motion.div>
          </div>
        </form>
      </div>
    </motion.section>
  );
}