import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import SectionBubble from '../shared/SectionBubble';
import AnimatedHeading from '../shared/AnimatedHeading';
import OutlineButton from '../shared/OutlineButton';

export default function FeaturedWorkSection({ onOpenContact }) {
  return (
    <section id="work" className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <SectionBubble text="Our Work" centered />
          <AnimatedHeading centered className="mt-6">Featured Projects</AnimatedHeading>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto"
        >
          <div className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-12 text-center">
            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6"
            >
              <Clock className="w-7 h-7 text-gray-400" />
            </motion.div>
            <h3 className="text-2xl font-bold mb-3">Currently Building a New Portfolio</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">Fresh projects launching April 2026 — reserve your spot now</p>
            <OutlineButton onClick={onOpenContact}>
              Book a Free Consultation
            </OutlineButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}