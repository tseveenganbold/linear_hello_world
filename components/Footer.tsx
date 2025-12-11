import React from 'react';
import { Github, Twitter, Disc } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center gap-2">
           <div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center">
             <div className="w-3 h-3 bg-white/40 rounded-full" />
           </div>
           <span className="text-sm text-white/40 font-medium">© 2024 Linear World Inc.</span>
        </div>

        <div className="flex items-center gap-6">
          <a href="#" className="text-white/40 hover:text-white transition-colors">
            <Twitter size={18} />
          </a>
          <a href="#" className="text-white/40 hover:text-white transition-colors">
            <Github size={18} />
          </a>
          <a href="#" className="text-white/40 hover:text-white transition-colors">
            <Disc size={18} />
          </a>
        </div>
        
      </div>
    </footer>
  );
};