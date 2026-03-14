import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, ArrowLeft, Globe, RefreshCw, BarChart3, HelpCircle, CheckCircle } from 'lucide-react';
import SectionBubble from '../shared/SectionBubble';
import AnimatedHeading from '../shared/AnimatedHeading';
import OutlineButton from '../shared/OutlineButton';
import { useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const projectTypes = [
  { label: "Website Design", icon: Globe },
  { label: "Website Redesign", icon: RefreshCw },
  { label: "SEO & Content", icon: BarChart3 },
  { label: "Other", icon: HelpCircle },
];

export default function ContactSection() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    projectType: "",
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setStep(1);
      setForm({ projectType: "", name: "", phone: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <div className="lg:col-span-2">
            <SectionBubble text="Let's Talk" />
            <AnimatedHeading className="mt-6 mb-4">Ready to Get Started?</AnimatedHeading>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-400 mb-8 leading-relaxed"
            >
              Let's create something stunning together. Get a free consultation and discover how a high-converting website can transform your business.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-3 mb-8"
            >
              {["Free design consultation", "See conversion-focused mockups", "Response within 24 hours"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-gray-300">
                  <Check className="w-4 h-4 text-gray-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </motion.ul>

            <OutlineButton
              onClick={() => {
                navigate(createPageUrl("Portfolio"));
                setTimeout(() => window.scrollTo({ top: 0, behavior: 'instant' }), 50);
              }}
            >
              See Our Work
            </OutlineButton>
          </div>

          {/* Right column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3 bg-[#1a1a1a] border border-white/5 rounded-2xl p-8"
          >
            {/* Progress bar */}
            <div className="flex items-center gap-2 mb-6">
              {[1, 2, 3].map((s) => (
                <div key={s} className={`h-1 flex-1 rounded-full transition-all duration-300 ${step >= s ? 'bg-white' : 'bg-white/10'}`} />
              ))}
            </div>
            <div className="flex justify-between text-xs text-gray-500 mb-8">
              <span className={step >= 1 ? 'text-white' : ''}>Project Details</span>
              <span className={step >= 2 ? 'text-white' : ''}>Your Info</span>
              <span className={step >= 3 ? 'text-white' : ''}>Send Message</span>
            </div>

            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">Message Sent!</h4>
                <p className="text-gray-400 text-sm">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <>
                {step === 1 && (
                  <div className="space-y-3">
                    <p className="text-sm text-gray-300 mb-4">What type of project?</p>
                    <div className="grid grid-cols-2 gap-3">
                      {projectTypes.map((type) => {
                        const Icon = type.icon;
                        return (
                          <button
                            key={type.label}
                            onClick={() => { setForm({ ...form, projectType: type.label }); setStep(2); }}
                            className={`flex items-center gap-3 p-4 rounded-xl border transition-all duration-200 cursor-pointer bg-transparent text-left ${
                              form.projectType === type.label
                                ? 'border-white/40 bg-white/5'
                                : 'border-white/10 hover:border-white/25 hover:bg-white/5'
                            }`}
                          >
                            <Icon className="w-5 h-5 text-gray-400" />
                            <span className="text-sm font-medium text-white">{type.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4">
                    <input
                      type="text" placeholder="Full Name" value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors"
                    />
                    <input
                      type="tel" placeholder="Phone Number" value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors"
                    />
                    <input
                      type="email" placeholder="Email Address" value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors"
                    />
                    <div className="flex gap-3 pt-2">
                      <button onClick={() => setStep(1)} className="flex items-center gap-2 px-5 py-2.5 text-sm border border-white/10 rounded-full text-gray-400 hover:text-white hover:border-white/30 transition-all bg-transparent cursor-pointer">
                        <ArrowLeft className="w-4 h-4" /> Back
                      </button>
                      <button onClick={() => setStep(3)} className="flex-1 flex items-center justify-center gap-2 px-5 py-2.5 text-sm border border-white/30 rounded-full text-white hover:border-white/60 hover:bg-white/5 transition-all bg-transparent cursor-pointer">
                        Continue <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-4">
                    <textarea
                      placeholder="Tell us about your project..." value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors resize-none"
                    />
                    <div className="flex gap-3 pt-2">
                      <button onClick={() => setStep(2)} className="flex items-center gap-2 px-5 py-2.5 text-sm border border-white/10 rounded-full text-gray-400 hover:text-white hover:border-white/30 transition-all bg-transparent cursor-pointer">
                        <ArrowLeft className="w-4 h-4" /> Back
                      </button>
                      <button onClick={handleSubmit} className="flex-1 flex items-center justify-center gap-2 px-5 py-2.5 text-sm border border-white/30 rounded-full text-white hover:border-white/60 hover:bg-white/5 transition-all bg-transparent cursor-pointer">
                        Send Message <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}