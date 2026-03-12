import React, { useState } from 'react';
import Navbar from './components/nav/Navbar';
import Footer from './components/nav/Footer';
import ContactPopup from './components/contact/ContactPopup';

export default function Layout({ children }) {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar onOpenContact={() => setContactOpen(true)} />
      <main>
        {React.Children.map(children, child =>
          React.isValidElement(child)
            ? React.cloneElement(child, { onOpenContact: () => setContactOpen(true) })
            : child
        )}
      </main>
      <Footer />
      <ContactPopup isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}