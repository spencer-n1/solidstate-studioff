import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { createPageUrl } from '@/utils';
import SlotMachineText from './SlotMachineText';

const LOGO_URL = "https://media.base44.com/images/public/user_6985431bc010dacd926ecea5/eee992ff5_logocropped-Photoroom.png";

const leftLinks = [
  { label: "HOME", page: "Home", scroll: null },
  { label: "WHY CHOOSE US", page: "Home", scroll: "why-choose-us" },
];

const rightLinks = [
  { label: "SERVICES", page: "Services", scroll: null },
  { label: "PORTFOLIO", page: "Portfolio", scroll: null },
];

export default function Navbar({ onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const processSection = document.getElementById('our-process');
      if (processSection) {
        const rect = processSection.getBoundingClientRect();
        setScrolled(rect.top <= 80);
      } else {
        setScrolled(window.scrollY > 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleNavClick = (page, scrollId) => {
    setMobileOpen(false);
    const targetUrl = createPageUrl(page);
    const isCurrentPage = location.pathname === targetUrl || (page === "Home" && location.pathname === "/");

    if (scrollId && isCurrentPage) {
      const el = document.getElementById(scrollId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (scrollId) {
      navigate(targetUrl);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
        setTimeout(() => {
          const el = document.getElementById(scrollId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }, 50);
    } else {
      navigate(targetUrl);
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'instant' }), 50);
    }
  };

  const scrollToTop = () => {
    const homeUrl = createPageUrl("Home");
    if (location.pathname === homeUrl || location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(homeUrl);
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'instant' }), 50);
    }
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-out ${
          scrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Left links - desktop */}
            <div className="hidden lg:flex items-center gap-8 flex-1">
              {leftLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.page, link.scroll)}
                  className="text-[11px] font-medium tracking-[0.15em] text-white/80 hover:text-white transition-colors bg-transparent border-none cursor-pointer"
                >
                  <SlotMachineText text={link.label} />
                </button>
              ))}
            </div>

            {/* Centered logo */}
            <button onClick={scrollToTop} className="flex-shrink-0 mx-8 lg:mx-16 bg-transparent border-none cursor-pointer">
              <img
                src={LOGO_URL}
                alt="SolidState Studio"
                className="h-10 lg:h-12 w-auto transition-all duration-300"
              />
            </button>

            {/* Right links - desktop */}
            <div className="hidden lg:flex items-center gap-8 flex-1 justify-end">
              {rightLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.page, link.scroll)}
                  className="text-[11px] font-medium tracking-[0.15em] text-white/80 hover:text-white transition-colors bg-transparent border-none cursor-pointer"
                >
                  <SlotMachineText text={link.label} />
                </button>
              ))}
              <div className="w-px h-6 bg-white/20" />
              <button
                onClick={() => { setMobileOpen(false); onOpenContact(); }}
                className="text-[11px] font-medium tracking-[0.1em] px-5 py-2 border border-white/30 rounded-full text-white hover:border-white/60 hover:bg-white/5 transition-all duration-300 bg-transparent cursor-pointer"
              >
                Start Your Project
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden text-white bg-transparent border-none cursor-pointer"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-y-0 right-0 w-80 max-w-full bg-[#0a0a0a] z-50 p-8 pt-24 shadow-2xl lg:hidden"
          >
            <button
              className="absolute top-6 right-6 text-white bg-transparent border-none cursor-pointer"
              onClick={() => setMobileOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
            <div className="flex flex-col gap-6">
              {[...leftLinks, ...rightLinks].map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.page, link.scroll)}
                  className="text-sm font-medium tracking-[0.15em] text-white/80 hover:text-white transition-colors text-left bg-transparent border-none cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
              <div className="h-px bg-white/10 my-2" />
              <button
                onClick={() => { setMobileOpen(false); onOpenContact(); }}
                className="text-sm font-medium tracking-[0.1em] px-5 py-3 border border-white/30 rounded-full text-white text-center hover:border-white/60 hover:bg-white/5 transition-all duration-300 bg-transparent cursor-pointer"
              >
                Start Your Project →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile backdrop */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-40 lg:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}