import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ProcessSection from '../components/home/ProcessSection';
import FeaturedWorkSection from '../components/home/FeaturedWorkSection';
import StatsSection from '../components/home/StatsSection';
import WhyChooseUsSection from '../components/home/WhyChooseUsSection';
import ServicesSection from '../components/home/ServicesSection';
import ReviewsSection from '../components/home/ReviewsSection';
import ContactSection from '../components/home/ContactSection';
import FinalCTASection from '../components/home/FinalCTASection';

export default function Home({ onOpenContact }) {
  return (
    <div>
      <HeroSection onOpenContact={onOpenContact} />
      <ProcessSection />
      <FeaturedWorkSection onOpenContact={onOpenContact} />
      <StatsSection />
      <WhyChooseUsSection />
      <ServicesSection />
      <ReviewsSection />
      <ContactSection />
      <FinalCTASection onOpenContact={onOpenContact} />
    </div>
  );
}