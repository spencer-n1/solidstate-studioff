import React from 'react';
import { motion } from 'framer-motion';

const sections = [
  {
    title: "Information We Collect",
    content: "We collect information you provide directly when filling out contact forms on our website, including your name, email address, phone number, and project details. We also automatically collect certain technical information when you visit our site, such as browser type, device type, and pages visited."
  },
  {
    title: "How We Use Your Information",
    content: "We use the information collected to respond to your inquiries, provide web design and development services, communicate project updates, improve our website experience, and send relevant marketing communications with your consent."
  },
  {
    title: "Data Storage and Security",
    content: "Your data is stored securely using industry-standard encryption and security measures. We do not sell, trade, or otherwise transfer your personal information to third parties without your explicit consent, except as required by law."
  },
  {
    title: "Cookies and Tracking",
    content: "Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand visitor preferences. You may disable cookies through your browser settings, though this may affect website functionality."
  },
  {
    title: "Third-Party Services",
    content: "We may use third-party services such as Google Analytics to analyze website traffic. These services may collect information sent by your browser, including cookies and your IP address. Their use is governed by their respective privacy policies."
  },
  {
    title: "Your Rights",
    content: "You have the right to request access to your personal data, correct inaccurate data, request deletion of your data, opt out of marketing communications, and lodge a complaint with the appropriate data protection authority."
  },
  {
    title: "Contact Information",
    content: "For questions or concerns regarding this privacy policy or your personal data, please contact us at solidstatestudio.business@gmail.com or call +1 (949) 903-8889. SolidState Studio LLC, Orange County, CA."
  },
  {
    title: "Changes to This Policy",
    content: "We reserve the right to update this privacy policy at any time. Changes will be posted on this page with an updated revision date. Continued use of our website after changes constitutes acceptance of the revised policy."
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="pt-24 bg-[#0a0a0a]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-400 mb-12">
            Last updated: March 2026 — SolidState Studio LLC
          </p>

          <div className="space-y-10">
            {sections.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <h2 className="text-lg font-semibold mb-3">{section.title}</h2>
                <p className="text-sm text-gray-400 leading-relaxed">{section.content}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}