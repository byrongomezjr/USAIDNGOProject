import { motion } from 'framer-motion'

export default function MissionStatement() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-16"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Mission</h2>
        <p className="text-xl text-center max-w-3xl mx-auto">
          We work tirelessly to ensure every child in Sri Lanka has the chance to survive, thrive, and reach their full potential, regardless of their circumstances.
        </p>
      </div>
    </motion.section>
  )
}