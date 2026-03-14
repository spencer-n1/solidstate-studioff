import React from 'react';
import { motion } from 'framer-motion';
import { Search, Palette, Rocket } from 'lucide-react';
import SectionBubble from '../shared/SectionBubble';
import AnimatedHeading from '../shared/AnimatedHeading';

const steps = [
  { num: "01", icon: Search, title: "Discovery & Planning", desc: "We dive deep into your business, audience, and goals to create a tailored strategy." },
  { num: "02", icon: Palette, title: "Design & Build", desc: "Custom designs brought to life with clean code, optimized for conversions." },
  { num: "03", icon: Rocket, title: "Launch & Deliver", desc: "Thorough testing, seamless launch, and continued support for your success." },
];

export default function ProcessSection() {
  return (
    <section id="our-process" className="py-24 md:py-32 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionBubble text="Our Process" centered />
        <AnimatedHeading centered className="mt-6 mb-4">
          From Concept To Launch
        </AnimatedHeading>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-gray-400 max-w-xl mx-auto mb-16"
        >
          Our proven process for creating stunning, conversion-focused websites
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ y: -6, transition: { duration: 0.45, ease: "easeOut" } }}
                className="bg-[#0a0a0a]/60 border border-white/5 rounded-2xl p-8 group hover:border-white/15 transition-all duration-500 hover:shadow-[0_8px_40px_rgba(0,0,0,0.3)]"
              >
                <span className="text-xs font-bold tracking-wider text-gray-500 mb-4 block">{step.num}</span>
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-5 group-hover:bg-white/10 transition-colors duration-400">
                  <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-400" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}