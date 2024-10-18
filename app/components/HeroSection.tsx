import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative bg-red-900 dark:bg-slate-800 text-white py-20 overflow-hidden h-[600px]">
      <div className="absolute inset-0 bg-gradient-to-r from-red-900 dark:from-slate-800 via-red-900/70 dark:via-slate-800/70 to-transparent z-10"></div>
      <Image
        src="/heartsforsrilanka.jpg"
        alt="Children in Sri Lanka"
        fill
        style={{ objectFit: 'cover' }}
        className="z-0"
      />
      <div className="container mx-auto px-4 relative z-20 h-full flex items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sri Lanka&apos;s Children in Crisis: 5.5 Million Young Lives at Risk</h1>
          <p className="text-xl mb-6">UNICEF reports that over 5.5 million children under 18 in Sri Lanka—28 percent of the population—face unprecedented challenges amidst a severe economic crisis. With 70 percent of households struggling to feed their families and education disrupted, these children urgently need support to secure their future & education.</p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-white text-blue-600 hover:bg-blue-100">Donate Now</Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}