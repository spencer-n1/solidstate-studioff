import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function OutlineButton({ children, onClick, href, className = "", showArrow = true, size = "md" }) {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-3.5 text-base",
  };

  const content = (
    <motion.span
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center gap-2 font-medium border border-white/30 rounded-full text-white hover:border-white/60 hover:bg-white/5 hover:shadow-[0_0_20px_rgba(255,255,255,0.08)] transition-all duration-400 cursor-pointer ${sizeClasses[size]} ${className}`}
      onClick={onClick}
    >
      {children}
      {showArrow && <ArrowRight className="w-4 h-4" />}
    </motion.span>
  );

  if (href) {
    return <a href={href} className="inline-block">{content}</a>;
  }

  return content;
}