import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, FileText, BarChart3, Check } from 'lucide-react';
import SectionBubble from '../shared/SectionBubble';
import AnimatedHeading from '../shared/AnimatedHeading';
import OutlineButton from '../shared/OutlineButton';
import { useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const services = [
  {
    icon: Monitor,
    title: "Multi-Page Website Design",
    desc: "Complete custom websites with multiple pages built to convert. Beautiful design meets strategic conversion optimization across your entire site.",
    features: ["5-15 Pages", "Custom Design", "Mobile Optimized", "Conversion Focused", "SEO Ready"],
  },
  {
    icon: FileText,
    title: "Single Landing Page",
    desc: "High-impact, single page websites designed for one clear goal: convert visitors into customers with a focused message.",
    features: ["One Page Focus", "Fast Launch", "Clear CTAs", "Perfect for Campaigns", "High Conversion"],
  },
  {
    icon: BarChart3,
    title: "SEO + Campaign Package",
    desc: "Drive targeted traffic with SEO optimization and strategic ad campaigns. Get found online and convert clicks into customers.",
    features: ["Google Ads", "SEO Optimization", "Campaign Management", "Analytics & Tracking", "ROI Focused"],
  },
];

export default function ServicesSection() {
  const navigate = useNavigate();

  return (
    <section id="services" className="py-24 md:py-32 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionBubble text="Our Services" />
        <AnimatedHeading className="mt-6 mb-4">Elevate Your Digital Game</AnimatedHeading>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-400 max-w-lg mb-14"
        >
          We combine strategic thinking with stunning design
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ y: -6, transition: { duration: 0.45, ease: "easeOut" } }}
                className="bg-[#0a0a0a]/60 border border-white/5 rounded-2xl p-8 flex flex-col hover:border-white/15 transition-all duration-500 hover:shadow-[0_8px_40px_rgba(0,0,0,0.3)]"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">{service.desc}</p>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-gray-300">
                      <Check className="w-4 h-4 text-gray-500 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <OutlineButton
                  onClick={() => {
                    navigate(createPageUrl("Services"));
                    setTimeout(() => window.scrollTo({ top: 0, behavior: 'instant' }), 50);
                  }}
                  size="sm"
                >
                  Learn More
                </OutlineButton>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}