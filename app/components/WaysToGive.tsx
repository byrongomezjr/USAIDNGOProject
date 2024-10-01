import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function WaysToGive() {
  return (
    <section className="bg-white dark:bg-gray-800 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Ways to Give</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['One-Time Donation', 'Monthly Giving', 'Corporate Partnerships'].map((title, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Support our programs and make a lasting impact on children's lives.</p>
                </CardContent>
                <CardFooter>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button>Learn More</Button>
                  </motion.div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}