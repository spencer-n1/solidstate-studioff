import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Globe, RefreshCw, BarChart3, HelpCircle, ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';

const projectTypes = [
  { label: "Website Design", icon: Globe },
  { label: "Website Redesign", icon: RefreshCw },
  { label: "SEO & Content", icon: BarChart3 },
  { label: "Other", icon: HelpCircle },
];

export default function ContactPopup({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    projectType: "",
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setStep(1);
      setForm({ projectType: "", name: "", phone: "", email: "", message: "" });
      onClose();
    }, 2500);
  };

  const reset = () => {
    setStep(1);
    setForm({ projectType: "", name: "", phone: "", email: "", message: "" });
    setSubmitted(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={() => { onClose(); reset(); }}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative bg-[#1a1a1a] rounded-2xl p-8 max-w-lg w-full border border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => { onClose(); reset(); }}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors bg-transparent border-none cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-2xl font-bold mb-2">Start Your Project</h3>
            <p className="text-gray-400 text-sm mb-6">Let's create something amazing together.</p>

            {/* Progress */}
            <div className="flex items-center gap-2 mb-8">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center gap-2 flex-1">
                  <div className={`h-1 flex-1 rounded-full transition-all duration-300 ${step >= s ? 'bg-white' : 'bg-white/10'}`} />
                </div>
              ))}
            </div>
            <div className="flex justify-between text-xs text-gray-500 mb-6 -mt-6">
              <span className={step >= 1 ? 'text-white' : ''}>Project Details</span>
              <span className={step >= 2 ? 'text-white' : ''}>Your Info</span>
              <span className={step >= 3 ? 'text-white' : ''}>Send Message</span>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-8"
              >
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">Message Sent!</h4>
                <p className="text-gray-400 text-sm">We'll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <>
                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-3"
                  >
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
                            <span className="text-sm font-medium">{type.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                  >
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors"
                    />
                    <div className="flex gap-3 pt-2">
                      <button
                        onClick={() => setStep(1)}
                        className="flex items-center gap-2 px-5 py-2.5 text-sm border border-white/10 rounded-full text-gray-400 hover:text-white hover:border-white/30 transition-all bg-transparent cursor-pointer"
                      >
                        <ArrowLeft className="w-4 h-4" /> Back
                      </button>
                      <button
                        onClick={() => setStep(3)}
                        className="flex-1 flex items-center justify-center gap-2 px-5 py-2.5 text-sm border border-white/30 rounded-full text-white hover:border-white/60 hover:bg-white/5 transition-all bg-transparent cursor-pointer"
                      >
                        Continue <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                  >
                    <textarea
                      placeholder="Tell us about your project..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors resize-none"
                    />
                    <div className="flex gap-3 pt-2">
                      <button
                        onClick={() => setStep(2)}
                        className="flex items-center gap-2 px-5 py-2.5 text-sm border border-white/10 rounded-full text-gray-400 hover:text-white hover:border-white/30 transition-all bg-transparent cursor-pointer"
                      >
                        <ArrowLeft className="w-4 h-4" /> Back
                      </button>
                      <button
                        onClick={handleSubmit}
                        className="flex-1 flex items-center justify-center gap-2 px-5 py-2.5 text-sm border border-white/30 rounded-full text-white hover:border-white/60 hover:bg-white/5 transition-all bg-transparent cursor-pointer"
                      >
                        Send Message <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}