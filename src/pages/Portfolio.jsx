import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import SectionBubble from '../components/shared/SectionBubble';
import AnimatedHeading from '../components/shared/AnimatedHeading';
import OutlineButton from '../components/shared/OutlineButton';
import DotGrid from '../components/shared/DotGrid';

export default function Portfolio({ onOpenContact }) {
  return (
    <div className="pt-24 bg-[#0a0a0a] relative overflow-hidden">
      <DotGrid />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <SectionBubble text="Our Portfolio" centered />
        <AnimatedHeading centered className="mt-6 mb-12">
          Building a New Portfolio
        </AnimatedHeading>

        {/* Placeholder Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto mb-16"
        >
          <div className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-12 text-center">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6"
            >
              <Clock className="w-7 h-7 text-gray-400" />
            </motion.div>
            <h3 className="text-2xl font-semibold mb-3">Next Project: Coming Soon</h3>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">Currently booking for April 2026 — reserve your spot</p>
            <OutlineButton onClick={onOpenContact}>
              Book a Free Consultation
            </OutlineButton>
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