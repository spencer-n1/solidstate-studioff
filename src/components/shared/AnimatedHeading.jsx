import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedHeading({ children, className = "", centered = false, delay = 0.1 }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight ${centered ? "text-center" : ""} ${className}`}
    >
      {children}
    </motion.h2>
  );
}