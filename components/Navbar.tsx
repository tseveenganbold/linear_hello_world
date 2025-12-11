import React, { useState, useEffect } from 'react';
import { Menu, X, Command } from 'lucide-react';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-background/70 backdrop-blur-xl border-border'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 font-semibold text-lg tracking-tight text-white">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 border border-white/10 text-white shadow-inner">
             <Command size={14} />
          </div>
          <span>Linear<span className="text-white/40">World</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
          <a href="#" className="hover:text-white transition-colors">Features</a>
          <a href="#" className="hover:text-white transition-colors">Method</a>
          <a href="#" className="hover:text-white transition-colors">Customers</a>
          <a href="#" className="hover:text-white transition-colors">Changelog</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="text-sm font-medium text-white/60 hover:text-white transition-colors">Log in</a>
          <Button variant="primary" size="sm">Sign up</Button>
        </div>

        <button
          className="md:hidden text-white/70 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border p-6 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-2">
          <a href="#" className="text-white/70 hover:text-white py-2 block">Features</a>
          <a href="#" className="text-white/70 hover:text-white py-2 block">Method</a>
          <a href="#" className="text-white/70 hover:text-white py-2 block">Customers</a>
          <hr className="border-border" />
          <div className="flex flex-col gap-3 pt-2">
            <Button variant="secondary" className="w-full justify-center">Log in</Button>
            <Button variant="primary" className="w-full justify-center">Sign up</Button>
          </div>
        </div>
      )}
    </nav>
  );
};