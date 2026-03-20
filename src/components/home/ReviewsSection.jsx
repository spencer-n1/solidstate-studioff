import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionBubble from '../shared/SectionBubble';
import AnimatedHeading from '../shared/AnimatedHeading';
import OutlineButton from '../shared/OutlineButton';
import { useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const reviews = [
  {
    text: "SolidState Studio completely transformed our online presence. Our leads tripled within the first two months. The design is stunning and the strategy behind it is even better.",
    name: "Marcus Chen",
    business: "TechVault Solutions",
    stars: 5,
  },
  {
    text: "Working with SolidState was the best investment we made this year. Professional, responsive, and they truly understood our vision. Our new website converts like nothing we've had before.",
    name: "Sarah Williams",
    business: "Apex Auto Group",
    stars: 5,
  },
  {
    text: "From the initial consultation to the final launch, the experience was seamless. Our e-commerce sales jumped 250% and our brand finally looks as premium as our products.",
    name: "Diana Martinez",
    business: "Glow Beauty Studio",
    stars: 5,
  },
  {
    text: "SolidState didn't just build us a website — they built us a revenue machine. The attention to detail, the conversion strategy, everything exceeded our expectations.",
    name: "James O'Brien",
    business: "Summit Construction Co.",
    stars: 5,
  },
  {
    text: "We had been struggling with our online presence for years. SolidState came in, listened to our needs, and delivered a site that truly represents our brand. Patients now find us easily online.",
    name: "Dr. Emily Park",
    business: "Coastal Wellness Clinic",
    stars: 5,
  },
];

export default function ReviewsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const navigate = useNavigate();

  const goTo = useCallback((index) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  }, [current]);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % reviews.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 12000);
    return () => clearInterval(timer);
  }, [next]);

  const getIndex = (offset) => (current + offset + reviews.length) % reviews.length;

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <section id="reviews" className="py-24 md:py-32 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <SectionBubble text="Client Love" />
            <AnimatedHeading className="mt-6 mb-3">What Clients Say</AnimatedHeading>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-400 max-w-lg"
            >
              Real feedback from real clients who transformed their business with high-converting design
            </motion.p>
          </div>
          <OutlineButton
            onClick={() => {
              navigate(createPageUrl("Reviews"));
              setTimeout(() => window.scrollTo({ top: 0, behavior: 'instant' }), 50);
            }}
          >
            Hear More
          </OutlineButton>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="flex items-center justify-center gap-4 md:gap-6">
            {/* Prev card (blurred) */}
            <div className="hidden md:block w-72 flex-shrink-0 opacity-30 blur-[2px] scale-90 transition-all duration-500">
              <ReviewCard review={reviews[getIndex(-1)]} />
            </div>

            {/* Current card */}
            <div className="w-full max-w-lg flex-shrink-0 relative" style={{ minHeight: 280 }}>
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={current}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.45, ease: "easeOut" }}
                >
                  <ReviewCard review={reviews[current]} />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Next card (blurred) */}
            <div className="hidden md:block w-72 flex-shrink-0 opacity-30 blur-[2px] scale-90 transition-all duration-500">
              <ReviewCard review={reviews[getIndex(1)]} />
            </div>
          </div>

          {/* Nav arrows */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-white/30 transition-colors bg-transparent cursor-pointer text-white"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 bg-transparent border-none cursor-pointer ${
                    i === current ? 'bg-white w-6' : 'bg-white/20'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-white/30 transition-colors bg-transparent cursor-pointer text-white"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review }) {
  return (
    <div className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-8 shadow-[0_8px_40px_rgba(0,0,0,0.4)]">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: review.stars }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-sm text-gray-300 leading-relaxed mb-6 italic">"{review.text}"</p>
      <div>
        <p className="font-semibold text-sm">{review.name}</p>
        <p className="text-xs text-gray-500">{review.business}</p>
      </div>
    </div>
  );
}