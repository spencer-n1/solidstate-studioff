import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import SectionBubble from '../components/shared/SectionBubble';
import AnimatedHeading from '../components/shared/AnimatedHeading';
import OutlineButton from '../components/shared/OutlineButton';

export default function Portfolio({ onOpenContact }) {
  return (
    <div className="pt-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <SectionBubble text="Our Portfolio" centered />
        <AnimatedHeading centered className="mt-6 mb-16">
          Projects That Drive Results
        </AnimatedHeading>

        {/* Placeholder Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto mb-24"
        >
          <div className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-16 text-center">
            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-8"
            >
              <Clock className="w-9 h-9 text-gray-400" />
            </motion.div>
            <h3 className="text-3xl font-bold mb-4">Next Project: Coming Soon</h3>
            <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-md mx-auto">
              Currently booking for April 2026 — reserve your spot
            </p>
            <OutlineButton onClick={onOpenContact} size="lg">
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