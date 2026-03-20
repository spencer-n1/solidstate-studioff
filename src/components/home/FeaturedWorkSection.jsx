import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import SectionBubble from '../shared/SectionBubble';
import AnimatedHeading from '../shared/AnimatedHeading';
import OutlineButton from '../shared/OutlineButton';
import DotGrid from '../shared/DotGrid';



export default function FeaturedWorkSection({ onOpenContact }) {
  return (
    <section id="featured-work" className="py-24 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
      <DotGrid />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <SectionBubble text="Featured Work" centered />
          <AnimatedHeading centered className="mt-6 mb-3">Building a New Portfolio</AnimatedHeading>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 max-w-lg mx-auto"
          >
            Fresh projects launching soon — be part of the first wave
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto"
        >
          <div className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-10 text-center shadow-[0_8px_40px_rgba(0,0,0,0.4)] hover:shadow-[0_16px_56px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-white/10">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6"
            >
              <Clock className="w-6 h-6 text-gray-400" />
            </motion.div>
            <h3 className="text-xl font-semibold mb-3">Currently Building a New Portfolio</h3>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">Fresh projects launching April 2026 — reserve your spot now</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <OutlineButton onClick={onOpenContact}>
                Book a Free Consultation
              </OutlineButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}