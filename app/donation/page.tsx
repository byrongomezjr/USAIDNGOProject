'use client';
import { useState } from 'react';
import DonationForm from '@/app/components/DonationForm';

export default function DonationPage() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <h1>Donate to Our Cause</h1>
      <DonationForm 
        isOpen={isOpen}
        onClose={handleClose}
      />
    </div>
  );
};
