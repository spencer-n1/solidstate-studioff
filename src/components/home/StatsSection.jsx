import React from 'react';
import { motion } from 'framer-motion';
import CountUp from '../shared/CountUp';

const stats = [
  { value: 24, suffix: "hr", label: "Response Time" },
  { text: "SEO-Ready", label: "From Day One" },
  { text: "Mobile-First", label: "Approach" },
  { value: 100, suffix: "%", label: "Custom Design" },
];

export default function StatsSection() {
  return (
    <section className="py-20 md:py-24 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`text-center py-10 px-6 flex flex-col items-center justify-center ${
                i < stats.length - 1 ? 'md:border-r md:border-white/10' : ''
              } ${i < 2 ? 'border-b md:border-b-0 border-white/10' : ''} ${
                i % 2 === 0 && i < 2 ? 'border-r border-white/10' : ''
              } ${i === 2 ? 'border-r border-white/10 md:border-r-0 md:border-r md:border-white/10' : ''}`}
            >
              <div className="text-3xl md:text-4xl font-bold mb-1.5 tracking-tight">
                {stat.value != null
                  ? <CountUp end={stat.value} suffix={stat.suffix} />
                  : <span>{stat.text}</span>
                }
              </div>
              <p className="text-xs uppercase tracking-[0.12em] text-gray-500 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}