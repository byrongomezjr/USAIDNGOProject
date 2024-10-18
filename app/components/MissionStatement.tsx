import React from 'react';
import { motion } from 'framer-motion';

const OurMission = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-blue-50 dark:bg-slate-800 py-16"
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl font-bold text-emerald-900 dark:text-white mb-8 text-center"
        >
          Our Mission
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          <motion.h3 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-2xl font-semibold text-emerald-900 dark:text-white mb-4 text-center"
          >
            Nourishing Minds, Fueling Futures: Empowering Sri Lankan Children Through Education and Nutrition
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mb-4 text-gray-700 dark:text-white text-center"
          >
            We work tirelessly to ensure every child in Sri Lanka has the chance to survive, thrive, and reach their full potential, regardless of their circumstances.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mb-4 text-gray-700 dark:text-white"
          >
            In the face of economic challenges and educational disruptions, our organization stands firm in its commitment to Sri Lankan children. We believe that every child deserves the opportunity to learn, grow, and thrive.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mb-4 text-gray-700 dark:text-white"
          >
            Our comprehensive efforts include:
          </motion.p>
          <motion.ul 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="list-disc list-inside mb-4 text-gray-700 dark:text-white"
          >
            <li>Improving English language skills from grade 1 to grade 12</li>
            <li>Guiding education and career paths, including options like getting children involved in local and national trade schools</li>
            <li>Connecting students with AI-powered English learning programs</li>
            <li>Offering free seminars and degree programs in fields like Deep Learning, Machine Learning, and Programming, etc.</li>
            <li>Supplying textbooks and essential school materials for children in need</li>
            <li>Supporting teachers and local schools to ensure uninterrupted learning</li>
            <li>Expanding school meal programs to improve nutrition and boost attendance</li>
            <li>Providing transportation assistance to help children reach school safely</li>
          </motion.ul>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.5 }}
            className="mb-8 text-gray-700 dark:text-white font-semibold text-center"
          >
            Together, we can create a Sri Lanka where every child has the opportunity to be educated, healthy, and respected, with the skills and knowledge to shape their own futures.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.5 }}
            className="text-center"
          >
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default OurMission;