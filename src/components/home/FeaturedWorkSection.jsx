import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import SectionBubble from '../shared/SectionBubble';
import AnimatedHeading from '../shared/AnimatedHeading';
import OutlineButton from '../shared/OutlineButton';

export default function FeaturedWorkSection({ onOpenContact }) {
  return (
    <section id="featured-work" className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <SectionBubble text="Featured Work" centered />
          <AnimatedHeading className="mt-6 mb-3" centered>Building Tomorrow's Portfolio</AnimatedHeading>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 max-w-lg mx-auto"
          >
            We're crafting exceptional digital experiences — be part of our first wave
          </motion.p>
        </div>

        {/* Single centered placeholder card */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-[600px] bg-[#1a1a1a] border border-white/5 rounded-2xl p-12 text-center"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6"
            >
              <Clock className="w-7 h-7 text-gray-400" />
            </motion.div>
            <h3 className="text-2xl font-bold mb-3">Currently Building a New Portfolio</h3>
            <p className="text-gray-400 mb-8">Fresh projects launching April 2026 — reserve your spot now</p>
            <OutlineButton onClick={onOpenContact} size="lg">
              Book a Free Consultation
            </OutlineButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}