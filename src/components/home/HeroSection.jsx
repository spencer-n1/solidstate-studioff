import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Users, TrendingUp } from 'lucide-react';
import OutlineButton from '../shared/OutlineButton';
import { useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const trustItems = [
  { icon: Sparkles, text: "Expert Designer" },
  { icon: TrendingUp, text: "Results Focused" },
  { icon: TrendingUp, text: "3x Higher Conversions" },
];

export default function HeroSection({ onOpenContact }) {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b27d71e3242dc78a08dd23/e9ef41efc_hero1.png"
          alt="Modern dark workspace with curved monitor"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-[#0a0a0a]/40 to-[#0a0a0a]" />
      </div>

      {/* Bottom gradient fade to Our Process */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#1a1a1a] z-10" />

      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-32 pb-24">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="inline-block px-4 py-1.5 text-[10px] font-semibold tracking-[0.2em] uppercase text-gray-300 border border-white/15 rounded-full bg-white/5 mb-8">
            Orange County's Premier Web Design Agency
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
        >
          Building Connections,
          <br />
          One Click at a Time
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          We design high-converting websites & automation systems built to turn visitors into paying customers.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <OutlineButton onClick={onOpenContact} size="lg">
            Start Your Project
          </OutlineButton>
          <OutlineButton
            onClick={() => {
              navigate(createPageUrl("Portfolio"));
              setTimeout(() => window.scrollTo({ top: 0, behavior: 'instant' }), 50);
            }}
            size="lg"
            className="border-white/15 hover:border-white/30"
          >
            View Our Work
          </OutlineButton>
        </motion.div>

        {/* Trust bubbles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.text}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full"
              >
                <Icon className="w-4 h-4 text-gray-400" />
                <span className="text-xs font-medium text-gray-300">{item.text}</span>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-36 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
      >
        <motion.div
          animate={{ height: [0, 40] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
          className="w-px bg-gradient-to-b from-transparent to-white/40"
        />
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-2 h-2 rounded-full bg-white/50 mt-1"
        />
      </motion.div>
    </section>
  );
}