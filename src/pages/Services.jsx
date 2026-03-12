import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, FileText, BarChart3, Check, ArrowRight } from 'lucide-react';
import SectionBubble from '../components/shared/SectionBubble';
import AnimatedHeading from '../components/shared/AnimatedHeading';

const services = [
  {
    id: "landing-page",
    icon: FileText,
    title: "Single Landing Page",
    desc: "High-impact, single page websites designed for one clear goal: convert visitors into customers with a focused message.",
    features: ["One Page Focus", "Fast Launch", "Clear CTAs", "Perfect for Campaigns", "High Conversion"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    imagePosition: "right",
  },
  {
    id: "multi-page",
    icon: Monitor,
    title: "Multi-Page Website Design",
    desc: "Complete custom websites with multiple pages built to convert. Beautiful design meets strategic conversion optimization across your entire site.",
    features: ["5-15 Pages", "Custom Design", "Mobile Optimized", "Conversion Focused", "SEO Ready"],
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
    imagePosition: "left",
  },
  {
    id: "seo-package",
    icon: BarChart3,
    title: "SEO + Campaign Package",
    desc: "Drive targeted traffic with SEO optimization and strategic ad campaigns. Get found online and convert clicks into customers.",
    features: ["Google Ads", "SEO Optimization", "Campaign Management", "Analytics & Tracking", "ROI Focused"],
    image: null,
    imagePosition: "none",
  },
];

export default function Services({ onOpenContact }) {
  return (
    <div className="pt-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <SectionBubble text="Our Services" centered />
        <AnimatedHeading centered className="mt-6 mb-16">
          Elevate Your Digital Game
        </AnimatedHeading>

        <div className="space-y-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isImageLeft = service.imagePosition === "left";
            const isImageRight = service.imagePosition === "right";
            const hasImage = service.image;

            return (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-[#1a1a1a] border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-500"
              >
                {hasImage ? (
                  <div className={`flex flex-col ${isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`} style={{ minHeight: 340 }}>
                    {/* Image half */}
                    <div className="md:w-1/2 relative overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-${isImageLeft ? 'r' : 'l'} from-transparent to-[#1a1a1a]/30`} />
                    </div>

                    {/* Content half */}
                    <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                      <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center mb-5">
                        <Icon className="w-5 h-5 text-gray-400" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed mb-6">{service.desc}</p>
                      <ul className="space-y-2.5 mb-8">
                        {service.features.map((f) => (
                          <li key={f} className="flex items-center gap-2.5 text-sm text-gray-300">
                            <Check className="w-4 h-4 text-gray-500 flex-shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <button
                        onClick={onOpenContact}
                        className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium border border-white/30 rounded-full text-white hover:border-white/60 hover:bg-white/5 transition-all duration-300 bg-transparent cursor-pointer w-fit"
                      >
                        Explore <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="p-8 md:p-12 text-center flex flex-col items-center" style={{ minHeight: 340 }}>
                    <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-gray-400" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-lg">{service.desc}</p>
                    <ul className="space-y-2.5 mb-8">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2.5 text-sm text-gray-300">
                          <Check className="w-4 h-4 text-gray-500 flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={onOpenContact}
                      className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium border border-white/30 rounded-full text-white hover:border-white/60 hover:bg-white/5 transition-all duration-300 bg-transparent cursor-pointer"
                    >
                      Get Started <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}