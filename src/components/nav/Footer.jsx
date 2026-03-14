import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Instagram } from 'lucide-react';

const LOGO_URL = "https://media.base44.com/images/public/user_6985431bc010dacd926ecea5/eee992ff5_logocropped-Photoroom.png";

export default function Footer() {
  const navigate = useNavigate();

  const handleNav = (page) => {
    navigate(createPageUrl(page));
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'instant' }), 50);
  };

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold tracking-[0.1em] uppercase text-white mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => handleNav("Services")} className="text-sm text-gray-400 hover:text-white transition-colors bg-transparent border-none cursor-pointer">
                  Multi-Page Websites
                </button>
              </li>
              <li>
                <button onClick={() => handleNav("Services")} className="text-sm text-gray-400 hover:text-white transition-colors bg-transparent border-none cursor-pointer">
                  Landing Pages
                </button>
              </li>
              <li>
                <button onClick={() => handleNav("Services")} className="text-sm text-gray-400 hover:text-white transition-colors bg-transparent border-none cursor-pointer">
                  SEO + Campaigns
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold tracking-[0.1em] uppercase text-white mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => handleNav("Portfolio")} className="text-sm text-gray-400 hover:text-white transition-colors bg-transparent border-none cursor-pointer">
                  Portfolio
                </button>
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold tracking-[0.1em] uppercase text-white mb-6">Contact</h4>
            <ul className="space-y-3">
              <li className="text-sm text-gray-400">solidstatestudio.business@gmail.com</li>
              <li className="text-sm text-gray-400">+1 (949) 903-8889</li>
              <li className="text-sm text-gray-400">Orange County, CA</li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2 text-sm">
                  <Instagram className="w-4 h-4" /> Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5">
          <img
            src={LOGO_URL}
            alt="SolidState Studio"
            className="h-14 w-auto mb-6 md:mb-0"
          />
          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
            <span>© 2026 SolidState Studio LLC</span>
            <span className="hidden sm:inline">|</span>
            <button onClick={() => handleNav("PrivacyPolicy")} className="hover:text-white transition-colors bg-transparent border-none cursor-pointer text-xs text-gray-500">
              Privacy Policy
            </button>
            <span className="hidden sm:inline">|</span>
            <button onClick={() => handleNav("SitemapPage")} className="hover:text-white transition-colors bg-transparent border-none cursor-pointer text-xs text-gray-500">
              Sitemap
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}