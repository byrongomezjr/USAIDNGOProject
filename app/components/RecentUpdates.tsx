import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function RecentUpdates() {
  const updates = [
    { 
      title: 'Education Initiative Launched', 
      date: 'May 15, 2023',
      videoId: 'e0Hw83tVS2g', // 
      description: 'New program aims to improve access to quality education for rural children in Sri Lanka.'
    },
    { 
      title: 'Health Campaign Success', 
      date: 'April 30, 2023',
      videoId: '5wSXQHW3xDI', // Unicef: Let's get Sri Lankan kids into s
      description: 'Recent health campaign shows promising results in improving community well-being in Sri Lanka.'
    },
    { 
      title: 'Child Protection Workshop', 
      date: 'April 22, 2023',
      videoId: 'tnf1-qQGujg', // We raised money for Sri Lankan kids
      description: 'Workshop educates local leaders on child protection strategies in Sri Lankan communities.'
    }
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
                  <div className="relative w-full h-0 pb-[56.25%] mb-4">
                    <iframe
                      src={`https://www.youtube.com/embed/${update.videoId}?autoplay=1&mute=1&loop=1&playlist=${update.videoId}`}
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full rounded-md"
                    />
                  </div>
                  <p>{update.description}</p>
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