import React from 'react';
import { motion } from 'framer-motion';
import { X, Check, Zap } from 'lucide-react';
import SectionBubble from '../shared/SectionBubble';
import AnimatedHeading from '../shared/AnimatedHeading';
import DotGrid from '../shared/DotGrid';

const comparisons = [
  { label: "Conversions Per Month", standard: "~20", ours: "60+" },
  { label: "Design", standard: "Generic Template", ours: "Custom & Unique" },
  { label: "Load Time", standard: "5-7s", ours: "<3s" },
  { label: "Mobile Optimized", standard: "Partial", ours: "100%" },
  { label: "Conversion Focus", standard: "None", ours: "Built-In" },
];

export default function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="py-24 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
      <DotGrid />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionBubble text="Why Choose Us" centered />
        <AnimatedHeading centered className="mt-6 mb-4">
          Real Numbers, Real Results
        </AnimatedHeading>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-gray-400 max-w-xl mx-auto mb-16"
        >
          See how high-converting web design transforms traffic into revenue
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto bg-[#1a1a1a] rounded-2xl border border-white/5 overflow-hidden"
        >
          {/* Header */}
          <div className="text-center py-6 px-6 border-b border-white/5">
            <h3 className="text-lg font-semibold">
              Standard Website <span className="text-gray-500 mx-2">vs</span> High-Converting Design
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Standard */}
            <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-white/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                  <X className="w-4 h-4 text-gray-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-300">Standard Website</h4>
                  <p className="text-xs text-gray-500">~20 Conversions Per Month</p>
                </div>
              </div>
              <div className="space-y-0">
                {comparisons.map((item) => (
                  <div key={item.label} className="flex items-center justify-between py-4 border-b border-white/5 last:border-0">
                    <span className="text-sm text-gray-400">{item.label}</span>
                    <span className="text-sm text-gray-500">{item.standard}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ours - green accent */}
            <div className="p-6 md:p-8 relative bg-gradient-to-br from-green-950/30 to-[#1a1a1a]">
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-green-500 text-black rounded-full">
                  3X MORE CONVERSIONS
                </span>
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Our High-Converting Design</h4>
                  <p className="text-xs text-green-400/70">60+ Conversions Per Month</p>
                </div>
              </div>
              <div className="space-y-0">
                {comparisons.map((item) => (
                  <div key={item.label} className="flex items-center justify-between py-4 border-b border-white/5 last:border-0">
                    <span className="text-sm text-gray-400">{item.label}</span>
                    <span className="text-sm text-green-400 flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5" /> {item.ours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom text */}
          <div className="text-center py-5 border-t border-white/5">
            <p className="text-sm text-gray-500">
              Same traffic, triple the conversions — <span className="underline decoration-gray-600 underline-offset-4">that's the power of a high-converting design</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}