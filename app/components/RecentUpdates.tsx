import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function RecentUpdates() {
  const updates = [
    { title: 'Education Initiative Launched', date: 'May 15, 2023' },
    { title: 'Health Campaign Success', date: 'April 30, 2023' },
    { title: 'Child Protection Workshop', date: 'April 22, 2023' }
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Recent Updates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {updates.map((update, index) => (
            <motion.div
              key={update.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{update.title}</CardTitle>
                  <CardDescription>{update.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>New program aims to improve access to quality education for rural children in Sri Lanka.</p>
                </CardContent>
                <CardFooter>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="outline">Read More</Button>
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