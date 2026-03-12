import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowRight } from 'lucide-react';

const pages = [
  { name: "Home", desc: "Landing page with hero, services overview, portfolio highlights, and contact form" },
  { name: "Services", desc: "Detailed breakdown of web design, landing page, and SEO services" },
  { name: "Portfolio", desc: "Showcase of completed projects with category filtering" },
  { name: "Reviews", desc: "Client testimonials and success stories" },
  { name: "PrivacyPolicy", label: "Privacy Policy", desc: "Our privacy policy and data handling practices" },
  { name: "SEOCrawler", label: "SEO Information", desc: "Comprehensive business and service information" },
];

export default function SitemapPage() {
  return (
    <div className="pt-24 bg-[#0a0a0a]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Sitemap</h1>
          <p className="text-gray-400 mb-12">All pages on the SolidState Studio website.</p>
          <div className="space-y-4">
            {pages.map((page, i) => (
              <motion.div
                key={page.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Link
                  to={createPageUrl(page.name)}
                  className="flex items-center justify-between p-5 bg-[#1a1a1a] border border-white/5 rounded-xl hover:border-white/15 transition-all duration-300 group"
                >
                  <div>
                    <h3 className="font-semibold text-sm group-hover:text-white transition-colors">
                      {page.label || page.name}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">{page.desc}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}