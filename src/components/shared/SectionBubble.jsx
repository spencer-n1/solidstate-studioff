import React from 'react';
import { motion } from 'framer-motion';

export default function SectionBubble({ text, centered = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={centered ? "flex justify-center" : ""}
    >
      <span className="inline-block px-4 py-1.5 text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-300 border border-gray-700 rounded-full bg-white/5">
        {text}
      </span>
    </motion.div>
  );
}