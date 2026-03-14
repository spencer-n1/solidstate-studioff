import React from 'react';
import { motion } from 'framer-motion';
import SectionBubble from '../shared/SectionBubble';
import AnimatedHeading from '../shared/AnimatedHeading';
import OutlineButton from '../shared/OutlineButton';
import { useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const projects = [
  {
    title: "TechVault Solutions",
    tag: "Technology",
    desc: "A sleek, modern website for a tech startup that boosted lead generation by 180% within the first month.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    title: "Apex Auto Group",
    tag: "Automotive",
    desc: "Complete digital overhaul for an automotive dealership, driving 3x more online inquiries and showroom visits.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    title: "Glow Beauty Studio",
    tag: "Beauty",
    desc: "Stunning e-commerce experience for a beauty brand that increased online sales by 250% post-launch.",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&q=80",
  },
];

export default function FeaturedWorkSection() {
  const navigate = useNavigate();

  return (
    <section id="featured-work" className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <SectionBubble text="Featured Work" />
            <AnimatedHeading className="mt-6 mb-3">Projects That Drive Results</AnimatedHeading>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-400 max-w-lg"
            >
              Real websites, real results — see how we transform businesses online
            </motion.p>
          </div>
          <OutlineButton
            onClick={() => {
              navigate(createPageUrl("Portfolio"));
              setTimeout(() => window.scrollTo({ top: 0, behavior: 'instant' }), 50);
            }}
          >
            View All Projects
          </OutlineButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.45, ease: "easeOut" } }}
              className="group rounded-2xl overflow-hidden border border-white/5 hover:border-white/15 transition-all duration-500 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] bg-[#1a1a1a]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <span className="px-3 py-1 text-[10px] font-semibold tracking-wider uppercase bg-white/10 border border-white/15 rounded-full">
                    {project.tag}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm text-gray-400 leading-relaxed">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}