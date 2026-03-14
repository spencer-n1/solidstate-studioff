import React from 'react';
import { motion } from 'framer-motion';
import AnimatedHeading from '../shared/AnimatedHeading';
import OutlineButton from '../shared/OutlineButton';

export default function FinalCTASection({ onOpenContact }) {
  return (
    <section className="py-24 md:py-32 bg-[#1a1a1a]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <AnimatedHeading centered className="mb-6">
          Let's Build Something Great Together
        </AnimatedHeading>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Join the businesses already transforming their online presence. Your high-converting website is just a conversation away.
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
    </section>
  );
}