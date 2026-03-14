import React from 'react';
import { motion } from 'framer-motion';
import CountUp from '../shared/CountUp';

const stats = [
  { value: 24, suffix: "hr", label: "Response Time" },
  { value: 0, suffix: "", label: "SEO-Ready From Day One" },
  { value: 0, suffix: "", label: "Mobile-First Approach" },
  { value: 100, suffix: "%", label: "Custom Design" },
];

export default function StatsSection() {
  return (
    <section className="py-20 md:py-24 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`text-center py-8 px-4 ${
                i < stats.length - 1 ? 'md:border-r md:border-white/10' : ''
              } ${i < 2 ? 'border-b md:border-b-0 border-white/10' : ''} ${
                i === 0 ? 'border-r border-white/10 md:border-r-white/10' : ''
              } ${i === 2 ? 'border-r border-white/10 md:border-r-white/10' : ''}`}
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                {stat.value > 0 ? <CountUp end={stat.value} suffix={stat.suffix} /> : <span className="text-2xl md:text-3xl">{stat.suffix}</span>}
              </div>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}