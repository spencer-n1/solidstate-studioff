import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';
import SectionBubble from '../components/shared/SectionBubble';
import AnimatedHeading from '../components/shared/AnimatedHeading';

const reviews = [
  { text: "SolidState Studio completely transformed our online presence. Our leads tripled within the first two months. The design is stunning and the strategy behind it is even better.", name: "Marcus Chen", business: "TechVault Solutions", stars: 5 },
  { text: "Working with SolidState was the best investment we made this year. Professional, responsive, and they truly understood our vision. Our new website converts like nothing we've had before.", name: "Sarah Williams", business: "Apex Auto Group", stars: 5 },
  { text: "From the initial consultation to the final launch, the experience was seamless. Our e-commerce sales jumped 250% and our brand finally looks as premium as our products.", name: "Diana Martinez", business: "Glow Beauty Studio", stars: 5 },
  { text: "SolidState didn't just build us a website — they built us a revenue machine. The attention to detail, the conversion strategy, everything exceeded our expectations.", name: "James O'Brien", business: "Summit Construction Co.", stars: 5 },
  { text: "We had been struggling with our online presence for years. SolidState came in, listened to our needs, and delivered a site that truly represents our brand. Patients now find us easily online.", name: "Dr. Emily Park", business: "Coastal Wellness Clinic", stars: 5 },
  { text: "The team at SolidState understands both design and business strategy. They didn't just make our site look good — they made it work harder for our bottom line. Truly exceptional.", name: "Robert Kim", business: "Summit Realty Group", stars: 5 },
  { text: "I was skeptical about investing in a premium website, but the ROI has been incredible. Within 3 months, we've generated more leads than the entire previous year. Highly recommend.", name: "Lisa Thompson", business: "Iron Peak Fitness", stars: 5 },
  { text: "Responsive, creative, and highly professional. SolidState Studio delivered a website that perfectly captures our restaurant's atmosphere and has significantly increased our online reservations.", name: "Chef Marco Rossi", business: "Bella Cucina", stars: 5 },
  { text: "What impressed me most was their process — methodical, transparent, and focused on results. The website they built for our e-commerce store has been a game-changer for our business.", name: "Amanda Stewart", business: "Luxe Market", stars: 5 },
];

export default function Reviews() {
  return (
    <div className="pt-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <SectionBubble text="Client Love" centered />
        <AnimatedHeading centered className="mt-6 mb-16">
          What Clients Say
        </AnimatedHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.45, ease: "easeOut" } }}
              className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-8 hover:border-white/15 transition-all duration-500"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.stars }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-gray-300 leading-relaxed mb-6 italic">"{review.text}"</p>
              <div className="border-t border-white/5 pt-4">
                <p className="font-semibold text-sm">{review.name}</p>
                <p className="text-xs text-gray-500 mt-0.5">{review.business}</p>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-white transition-colors mt-3"
              >
                Check Out Their Website <ArrowRight className="w-3 h-3" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}