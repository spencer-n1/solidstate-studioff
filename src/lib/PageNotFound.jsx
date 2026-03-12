import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowRight } from 'lucide-react';

export default function PageNotFound() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-white/10 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-white mb-3">Page Not Found</h2>
        <p className="text-gray-400 mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <Link
          to={createPageUrl("Home")}
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium border border-white/30 rounded-full text-white hover:border-white/60 hover:bg-white/5 transition-all duration-300"
        >
          Back to Home <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}