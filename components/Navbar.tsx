
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">R</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">RePhone</span>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            <a href="#phones" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">精選手機</a>
            <a href="#why-us" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">為什麼選擇我們</a>
            <a href="#reviews" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">客戶好評</a>
            <a href="#faq" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">常見問題</a>
            <button className="bg-indigo-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg active:scale-95">
              立即選購
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 p-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 py-4 px-4 space-y-4 shadow-xl">
          <a href="#phones" onClick={() => setIsMenuOpen(false)} className="block text-slate-600 font-medium">精選手機</a>
          <a href="#why-us" onClick={() => setIsMenuOpen(false)} className="block text-slate-600 font-medium">為什麼選擇我們</a>
          <a href="#reviews" onClick={() => setIsMenuOpen(false)} className="block text-slate-600 font-medium">客戶好評</a>
          <button className="w-full bg-indigo-600 text-white px-5 py-3 rounded-xl font-semibold">
            立即選購
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
