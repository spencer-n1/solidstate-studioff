import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SlotMachineText({ text }) {
  const [isHovered, setIsHovered] = useState(false);
  const letters = text.split('');

  return (
    <span
      className="relative inline-flex overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ height: '1.2em' }}
    >
      {letters.map((letter, i) => (
        <span key={i} className="relative inline-block" style={{ width: letter === ' ' ? '0.3em' : 'auto' }}>
          <motion.span
            className="inline-block"
            animate={{
              y: isHovered ? -24 : 0,
              opacity: isHovered ? 0 : 1,
            }}
            transition={{
              duration: 0.3,
              delay: isHovered ? i * 0.03 : (letters.length - 1 - i) * 0.02,
              ease: "easeOut",
            }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
          <motion.span
            className="absolute left-0 top-0 inline-block"
            initial={{ y: 24, opacity: 0 }}
            animate={{
              y: isHovered ? 0 : 24,
              opacity: isHovered ? 1 : 0,
            }}
            transition={{
              duration: 0.3,
              delay: isHovered ? i * 0.03 : (letters.length - 1 - i) * 0.02,
              ease: "easeOut",
            }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        </span>
      ))}
    </span>
  );
}