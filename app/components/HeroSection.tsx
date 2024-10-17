import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative bg-red-700 dark:bg-slate-800 text-white py-20 overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:w-1/2 mb-8 lg:mb-0"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Help Children in Sri Lanka</h1>
          <p className="text-xl mb-8">UNICEF estimates there are over 5.5 million children under 18 in Sri Lanka, representing 28 percent of the population.</p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-white text-blue-600 hover:bg-blue-100">Donate Now</Button>
          </motion.div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:w-1/2"
        >
          <Image
            src="/heartsforsrilanka.jpg"
            alt="Children in Sri Lanka"
            width={600}
            height={400}
            className="rounded-full shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  )
}