import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function RecentUpdates() {
  const updates = [
    { 
      title: 'Humanitarian Crisis in Sri Lanka', 
      date: 'July 20, 2022',
      videoId: 'e0Hw83tVS2g', // No food for children in Sri Lanka
      description: 'Aid organisations warn of an unfolding humanitarian disaster in Sri Lanka. 2.5 million children are not getting enough food, with Save the Children fearing one-quarter of all Sri Lankans are at the brink of malnutrition. Families are struggling to feed their children properly and put them through school.'
    },
    { 
      title: 'UNICEF: Getting Sri Lankan Kids Into Schools', 
      date: 'November 5, 2014',
      videoId: '5wSXQHW3xDI', // Unicef: Let's get Sri Lankan kids into school
      description: 'While 98% of children complete primary school and the country has a 92% literacy rate, UNICEF and UNESCO\'s Global Initiative on Out-of-School Children aims to reach those left behind. The initiative seeks to benefit individual children and contribute to the long-term health and prosperity of communities and the world.'
    },
    { 
      title: 'Successful Fundraiser for Sri Lankan Children in Need', 
      date: 'February 13, 2024',
      videoId: 'tnf1-qQGujg', // ***
      description: 'A successful fundraiser for the Foundation of Goodness raised 2.28 Million LKR to provide 380 children across Rural Sri Lanka with essential school supplies for the new year. This initiative aims to support education in rural areas by ensuring children have the necessary materials to start their school year.'
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