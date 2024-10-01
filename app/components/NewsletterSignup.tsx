import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function NewsletterSignup() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-red-600 dark:bg-slate-800 py-16 text-white"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Stay Informed</h2>
        <p className="text-center mb-8">Sign up for our newsletter to receive updates on our work and how you can help.</p>
        <form className="max-w-md mx-auto flex gap-4">
          <Input type="email" placeholder="Enter your email" className="flex-grow" />
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button type="submit">Subscribe</Button>
          </motion.div>
        </form>
      </div>
    </motion.section>
  )
}