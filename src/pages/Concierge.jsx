import React from 'react';
import { Link } from 'react-router-dom';

export function Concierge() {
  const benefits = [
    { title: "24/7 Global Sourcing", description: "Direct access to our network of stockists in Tokyo, Paris, London, and New York.", icon: "public" },
    { title: "Authentication Shield", description: "Every piece undergoes a multi-layer verification process at our regional hubs.", icon: "verified" },
    { title: "Priority Logistics", description: "Expedited shipping with real-time tracking through the Global Bridge infrastructure.", icon: "speed" },
    { title: "Archive Access", description: "Members-only access to our curated vintage and rare collection drops.", icon: "inventory_2" }
  ];

  return (
    <main className="pt-24 md:pt-32 min-h-screen bg-background pb-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8">
        {/* Hero Section */}
        <header className="mb-20 md:mb-32 relative">
          <div className="absolute top-0 right-0 w-1/3 aspect-square bg-secondary/5 blur-[120px] rounded-full -z-10" />
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary mb-6 block animate-fade-in">Service Infrastructure</span>
          <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.8] mb-12">
            The <br/> Concierge.
          </h1>
          <p className="max-w-xl text-lg md:text-xl font-light text-on-surface-variant leading-relaxed">
            Your bridge to the world's most elusive archives. A personalized ecosystem designed for the modern collector.
          </p>
        </header>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {benefits.map((benefit, index) => (
            <div key={index} className="glass-panel p-8 md:p-10 border-none group hover:bg-black hover:text-white transition-all duration-500">
              <span className="material-symbols-outlined text-4xl mb-8 group-hover:text-secondary transition-colors">{benefit.icon}</span>
              <h3 className="text-xl font-black uppercase tracking-tight mb-4">{benefit.title}</h3>
              <p className="text-sm font-light opacity-60 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Action Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 aspect-[16/9] md:aspect-video bg-surface-container-low overflow-hidden relative group">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9_H3fV9f1P3Y8_X4V0f-4W8u7-v0u_K9y4f_Y8u7_v0u_K9y4f_Y8u7_v0u_K9y4f_Y8u7_v0u_K9y4f" 
              className="w-full h-full object-cover grayscale brightness-50 group-hover:scale-105 transition-transform duration-1000" 
              alt="Otis Sourcing Network"
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60 mb-2">Network Status</p>
                    <div className="flex items-center gap-2 justify-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-white font-black uppercase tracking-widest text-sm">Global Hubs Online</span>
                    </div>
                </div>
            </div>
          </div>
          <div className="lg:col-span-5 space-y-10 lg:pl-12">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-tight">
              Ready to <br/> Find your <br/> Grail?
            </h2>
            <div className="space-y-6">
                <Link to="/request-a-find" className="flex items-center justify-between group py-6 border-b border-black/5">
                    <span className="text-sm font-black uppercase tracking-widest">Submit Private Request</span>
                    <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
                </Link>
                <Link to="/track" className="flex items-center justify-between group py-6 border-b border-black/5">
                    <span className="text-sm font-black uppercase tracking-widest">Global Bridge Tracking</span>
                    <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">monitoring</span>
                </Link>
                <div className="flex items-center justify-between group py-6">
                    <span className="text-sm font-black uppercase tracking-widest">Direct Concierge Chat</span>
                    <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Member Exclusive</span>
                </div>
            </div>
          </div>
        </div>

        {/* Membership Tier CTA */}
        <section className="mt-32 bg-black text-white p-12 md:p-24 text-center overflow-hidden relative">
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-secondary)_0%,_transparent_70%)] blur-[100px]" />
            </div>
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-8 relative z-10">Elevate Your Archive.</h2>
            <p className="text-white/60 font-light text-lg mb-12 tracking-wide max-w-2xl mx-auto relative z-10">
                Join our Elite Membership tier for zero commission sourcing, personal stylist consultations, and global hub pickups.
            </p>
            <button className="bg-white text-black px-12 py-5 font-black text-xs uppercase tracking-[0.4em] hover:bg-secondary hover:text-white transition-all relative z-10">
                Apply for Entry
            </button>
        </section>
      </div>
    </main>
  );
}
