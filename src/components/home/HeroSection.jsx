import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, TrendingUp } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { sanityClient } from '../../lib/sanityClient';
import OutlineButton from '../shared/OutlineButton';
import DotGrid from '../shared/DotGrid';
import { useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const trustItems = [
  { icon: Sparkles, text: "Expert Designer" },
  { icon: TrendingUp, text: "Results Focused" },
  { icon: TrendingUp, text: "3x Higher Conversions" },
];

export default function HeroSection({ onOpenContact }) {
  const navigate = useNavigate();

  // Fetch the dynamic headline from Sanity CMS
  const { data: sanityData, isLoading } = useQuery({
    queryKey: ['homepageContent'],
    queryFn: async () => {
      const result = await sanityClient.fetch(`*[_type == "homepage"][0]`);
      return result || {};
    }
  });

  const headline = sanityData?.heroHeadline || "Building Connections,\nOne Click at a Time";
  const subheadline = sanityData?.heroSubheadline || "We design high-converting websites & automation systems built to turn visitors into paying customers.";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Dot grid texture */}
      <DotGrid />
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b27d71e3242dc78a08dd23/e9ef41efc_hero1.png"
          alt="Modern dark workspace with curved monitor"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-[#0a0a0a]/40 to-[#0a0a0a]" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#1a1a1a] z-10" />

      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-32 pb-24">
        
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          <span className="inline-block px-4 py-1.5 text-[10px] font-semibold tracking-[0.2em] uppercase text-gray-300 border border-white/15 rounded-full bg-white/5 mb-8">
            Orange County's Premier Web Design Agency
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 whitespace-pre-line"
        >
          {headline}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {subheadline}
        </motion.p>

        {/* Buttons */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <OutlineButton onClick={onOpenContact} size="lg">Start Your Project</OutlineButton>
          <OutlineButton onClick={() => { navigate(createPageUrl("Portfolio")); setTimeout(() => window.scrollTo({ top: 0, behavior: 'instant' }), 50); }} size="lg" className="border-white/15 hover:border-white/30">
            View Our Work
          </OutlineButton>
        </motion.div>
      </div>
    </section>
  );
}
