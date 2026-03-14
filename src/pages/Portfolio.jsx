import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';
import SectionBubble from '../components/shared/SectionBubble';
import AnimatedHeading from '../components/shared/AnimatedHeading';
import OutlineButton from '../components/shared/OutlineButton';

const categories = ["All", "Real Estate", "Fitness", "Restaurant", "Healthcare", "Construction", "E-commerce"];

const projects = [
  { title: "Summit Realty Group", tag: "Real Estate", desc: "Luxury real estate website with virtual tours, IDX integration, and lead capture system that doubled property inquiries.", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80" },
  { title: "Iron Peak Fitness", tag: "Fitness", desc: "Dynamic fitness brand website with class booking, membership portals, and a 200% increase in new sign-ups.", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80" },
  { title: "Bella Cucina", tag: "Restaurant", desc: "Elegant restaurant website with online reservations and menu showcasing that boosted table bookings by 150%.", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80" },
  { title: "Coastal Wellness Clinic", tag: "Healthcare", desc: "Patient-centric healthcare site with appointment scheduling, provider profiles, and HIPAA-compliant contact forms.", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80" },
  { title: "Summit Construction Co.", tag: "Construction", desc: "Robust construction portfolio with project galleries, service breakdowns, and quote request system.", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80" },
  { title: "Luxe Market", tag: "E-commerce", desc: "Premium e-commerce store with advanced filtering, fast checkout, and conversion-optimized product pages.", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80" },
  { title: "TechVault Solutions", tag: "E-commerce", desc: "A sleek SaaS platform with clean UI, pricing tables, and demo booking that increased trial sign-ups by 180%.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" },
  { title: "Apex Auto Group", tag: "E-commerce", desc: "Automotive dealer site with inventory management, financing calculator, and 3x more online inquiries.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" },
  { title: "Glow Beauty Studio", tag: "E-commerce", desc: "Stunning beauty e-commerce with AR try-on features and 250% increase in online sales.", image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&q=80" },
];

export default function Portfolio({ onOpenContact }) {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.tag === active);

  return (
    <div className="pt-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <SectionBubble text="Our Portfolio" centered />
        <AnimatedHeading centered className="mt-6 mb-12">
          Projects That Drive Results
        </AnimatedHeading>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 text-xs font-medium tracking-wider rounded-full border transition-all duration-300 bg-transparent cursor-pointer ${
                active === cat
                  ? 'border-white/40 text-white bg-white/5'
                  : 'border-white/10 text-gray-400 hover:border-white/25 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -8, transition: { duration: 0.45, ease: "easeOut" } }}
                className="group rounded-2xl overflow-hidden border border-white/5 hover:border-white/15 transition-all duration-500 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] bg-[#1a1a1a]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <span className="px-3 py-1 text-[10px] font-semibold tracking-wider uppercase bg-white/10 border border-white/15 rounded-full flex-shrink-0 ml-2">
                      {project.tag}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm text-gray-400 leading-relaxed">{project.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Coming Soon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 max-w-md mx-auto"
        >
          <div className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-8 text-center">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4"
            >
              <Clock className="w-5 h-5 text-gray-400" />
            </motion.div>
            <h3 className="text-lg font-semibold mb-2">Next Project: Coming Soon</h3>
            <p className="text-sm text-gray-500">Currently booking for April 2026 — reserve your spot</p>
          </div>
        </motion.div>

        {/* Final CTA */}
        <div className="mt-24 text-center">
          <SectionBubble text="Let's Work Together" centered />
          <AnimatedHeading centered className="mt-6 mb-4">
            Ready To Be Our Next Success Story?
          </AnimatedHeading>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 max-w-lg mx-auto mb-10"
          >
            Let's create a stunning, high-converting website for your business
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <OutlineButton onClick={onOpenContact} size="lg">
              Start Your Project
            </OutlineButton>
          </motion.div>
        </div>
      </div>
    </div>
  );
}