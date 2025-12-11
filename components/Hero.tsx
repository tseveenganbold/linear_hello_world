import React from 'react';
import { ArrowRight, ChevronRight, Zap } from 'lucide-react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
      
      {/* Announcement Pill */}
      <div className="animate-fade-in-up [animation-duration:800ms] [animation-fill-mode:backwards]">
        <a href="#" className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 hover:border-white/20 transition-colors text-xs font-medium text-white/80 mb-8 group">
          <span className="px-1.5 py-0.5 rounded-md bg-indigo-500/20 text-indigo-300 text-[10px] font-bold tracking-wide uppercase">New</span>
          <span>Linear World 2.0 is out</span>
          <ChevronRight size={12} className="text-white/40 group-hover:text-white/80 transition-colors" />
        </a>
      </div>

      {/* Main Heading */}
      <h1 className="animate-fade-in-up [animation-delay:200ms] [animation-duration:1000ms] [animation-fill-mode:backwards] text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/50 mb-6 max-w-4xl mx-auto">
        Hello World,<br />
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-300 to-indigo-600/50">Reimagined.</span>
      </h1>

      {/* Subheading */}
      <p className="animate-fade-in-up [animation-delay:400ms] [animation-duration:1000ms] [animation-fill-mode:backwards] text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
        Experience the next generation of "Hello World" applications. 
        Designed for speed, crafted for performance, and built for you.
      </p>

      {/* CTA Buttons */}
      <div className="animate-fade-in-up [animation-delay:600ms] [animation-duration:1000ms] [animation-fill-mode:backwards] flex flex-col sm:flex-row items-center gap-4">
        <Button variant="primary" size="lg" className="h-12 px-8">
          Start Building <ArrowRight size={16} className="ml-2" />
        </Button>
        <Button variant="secondary" size="lg" className="h-12 px-8">
          <Zap size={16} className="mr-2 text-yellow-400" />
          View Documentation
        </Button>
      </div>

      {/* Visual Abstract Representation */}
      <div className="mt-24 w-full max-w-5xl relative animate-fade-in-up [animation-delay:800ms] [animation-duration:1000ms] [animation-fill-mode:backwards]">
        {/* Glow behind image */}
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 rounded-xl blur-2xl opacity-20" />
        
        {/* "Screen" container */}
        <div className="relative rounded-xl border border-white/10 bg-[#0C0E12]/80 backdrop-blur-sm overflow-hidden shadow-2xl ring-1 ring-white/5">
          {/* Header of fake window */}
          <div className="h-10 border-b border-white/5 bg-white/[0.02] flex items-center px-4 gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
            </div>
            <div className="ml-4 px-3 py-1 rounded bg-black/40 border border-white/5 text-[10px] font-mono text-white/40 flex-1 max-w-[200px] text-center">
              hello-world.tsx
            </div>
          </div>
          
          {/* Content of fake window */}
          <div className="p-8 font-mono text-sm md:text-base leading-relaxed overflow-x-auto">
             <div className="flex">
                <div className="text-white/20 select-none pr-4 text-right">
                  1<br/>2<br/>3<br/>4<br/>5<br/>6
                </div>
                <div>
                  <span className="text-pink-400">import</span> <span className="text-white">React</span> <span className="text-pink-400">from</span> <span className="text-green-400">'react'</span>;<br/><br/>
                  <span className="text-pink-400">export default function</span> <span className="text-yellow-200">HelloWorld</span>() {'{'}<br/>
                  &nbsp;&nbsp;<span className="text-pink-400">return</span> (<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-blue-300">h1</span> <span className="text-purple-300">className</span>=<span className="text-green-400">"text-linear"</span>&gt;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hello, Universe!<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-blue-300">h1</span>&gt;<br/>
                  &nbsp;&nbsp;);<br/>
                  {'}'}
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};