import React from 'react';
import { Layers, Zap, Shield, Globe, Cpu, Workflow } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, className = '' }) => (
  <div className={`p-6 rounded-2xl bg-surface border border-white/5 hover:border-white/10 transition-colors group ${className}`}>
    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 text-white/80 group-hover:text-white group-hover:bg-white/10 transition-all">
      {icon}
    </div>
    <h3 className="text-lg font-medium text-white mb-2">{title}</h3>
    <p className="text-sm text-white/50 leading-relaxed">{description}</p>
  </div>
);

export const Features: React.FC = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">
          Designed for <span className="text-indigo-400">perfection</span>.
        </h2>
        <p className="text-lg text-white/60 max-w-2xl">
          Most "Hello World" apps stop at the console log. We went further to provide an integrated environment for your greeting needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureCard 
          icon={<Zap size={20} />}
          title="Instant Rendering"
          description="Powered by the latest React concurrent features, your greeting appears on screen before you even blink."
        />
        <FeatureCard 
          icon={<Layers size={20} />}
          title="Component Isolation"
          description="Every hello is perfectly encapsulated in its own shadow DOM boundary for maximum stability."
        />
        <FeatureCard 
          icon={<Shield size={20} />}
          title="Type Safe Greetings"
          description="100% TypeScript coverage ensures you never accidentally say 'Goodbye' when you meant 'Hello'."
        />
        <FeatureCard 
          icon={<Globe size={20} />}
          title="Global Reach"
          description="CDN optimized assets delivered from the edge to say hello to anyone, anywhere, anytime."
        />
        <FeatureCard 
          icon={<Cpu size={20} />}
          title="Optimized Compute"
          description="Minimal footprint ensures your battery stays full while your user experience stays rich."
        />
        <FeatureCard 
          icon={<Workflow size={20} />}
          title="Linear Workflow"
          description="Integrated directly with your favorite tools to streamline the greeting pipeline."
        />
      </div>
    </section>
  );
};