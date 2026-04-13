
import React from 'react';
import { Link } from 'react-router-dom';

export function ProductDetail() {
  const upcomingDrops = [
    {
      id: 'drop-1',
      title: "Sp5der Academy Rugby Polo",
      category: "Apparel / Elite Drop",
      date: "Expected Arriving: April 25",
      price: 60000,
      image: "/products/sp5der-rugby.jpg",
      status: "In Contention"
    },
    {
      id: 'drop-2',
      title: "Scimitar Cargo Pants",
      category: "Utilitarian / Studio",
      date: "Expected Arriving: April 28",
      price: 45000,
      image: "/products/scimitar-khaki.jpg",
      status: "Securing Stock"
    }
  ];

  return (
    <main className="pt-24 md:pt-32 pb-24 px-4 md:px-8 max-w-[1920px] mx-auto space-y-16 md:space-y-32">
      {/* Header / Hero */}
      <header className="max-w-4xl">
        <div className="flex items-center gap-4 mb-6 md:mb-8">
          <span className="w-12 h-px bg-secondary"></span>
          <span className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-secondary">Elite Bridge Access</span>
        </div>
        <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-6 leading-[0.85]">
          Front Row <br /><span className="text-secondary italic">Seats</span>
        </h1>
        <p className="text-on-surface-variant text-base md:text-xl font-light tracking-tight max-w-2xl leading-relaxed">
          The Otis 'Priority' list grants you first-refusal on upcoming global acquisitions. Secure your position before these pieces hit the public archive.
        </p>
      </header>

      {/* Grid of Upcoming Drops */}
      <section className="space-y-12">
        <div className="flex items-end justify-between border-b border-black/5 pb-6">
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight">Active contentions</h2>
          <span className="font-mono text-secondary text-xs">STATUS: LIVE BRIDGE</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {upcomingDrops.map((drop) => (
            <div key={drop.id} className="group cursor-pointer">
              <div className="relative aspect-[16/9] md:aspect-[4/5] bg-surface-container-low overflow-hidden transition-all duration-700 group-hover:shadow-2xl">
                <img 
                  src={drop.image} 
                  alt={drop.title} 
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                
                <div className="absolute top-6 right-6">
                  <span className="bg-white/90 backdrop-blur-md text-black px-4 py-1.5 text-[9px] font-black uppercase tracking-widest border border-black/5">
                    {drop.status}
                  </span>
                </div>
                
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-secondary mb-2">{drop.category}</p>
                  <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter mb-4">{drop.title}</h3>
                  <div className="flex justify-between items-center text-white/60 font-mono text-xs">
                    <span>{drop.date}</span>
                    <span className="text-white font-bold">₦{drop.price.toLocaleString()}</span>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex gap-4">
                <button className="flex-grow bg-black text-white py-4 text-xs font-bold tracking-widest uppercase hover:bg-secondary transition-all active:scale-[0.98]">
                  PRE-ORDER RESERVATION
                </button>
                <button className="w-14 items-center justify-center border border-black flex hover:bg-black hover:text-white transition-all">
                  <span className="material-symbols-outlined text-sm">notifications</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The Protocol */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center bg-neutral-50 px-6 py-16 md:p-24 border border-black/5">
        <div className="lg:col-span-5">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none">The Priority <br/> Protocol</h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <span className="text-2xl font-black text-secondary/20 font-mono">01</span>
              <div>
                <h4 className="font-bold uppercase text-[11px] tracking-widest mb-2">Intent to Purchase</h4>
                <p className="text-on-surface-variant text-sm font-light">We post upcoming finds currently being negotiated with global stockists.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <span className="text-2xl font-black text-secondary/20 font-mono">02</span>
              <div>
                <h4 className="font-bold uppercase text-[11px] tracking-widest mb-2">Reserve Your Seat</h4>
                <p className="text-on-surface-variant text-sm font-light">Place a 20% commitment deposit to secure the item in your specific size.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <span className="text-2xl font-black text-secondary/20 font-mono">03</span>
              <div>
                <h4 className="font-bold uppercase text-[11px] tracking-widest mb-2">Bridge Delivery</h4>
                <p className="text-on-surface-variant text-sm font-light">Once stock is secured, your order is prioritized for express global shipping.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7 relative h-[400px] md:h-[600px] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1579338559194-a162d19bf842?auto=format&fit=crop&q=80&w=1200" 
            alt="Global Sourcing" 
            className="w-full h-full object-cover grayscale brightness-50"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-8">
              <span className="material-symbols-outlined text-5xl mb-6 animate-pulse">public</span>
              <p className="text-lg md:text-2xl font-black uppercase tracking-tighter">Global Hub Synchronization</p>
              <p className="text-xs uppercase tracking-[0.4em] mt-2 opacity-60">London / Tokyo / New York / Paris</p>
            </div>
          </div>
        </div>
      </section>

      {/* Concierge Custom Request */}
      <section className="text-center py-20 px-4">
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6">Need something specific?</h2>
        <p className="text-on-surface-variant text-sm md:text-lg font-light max-w-xl mx-auto mb-10">
          Our agents are ready to hunt. If it exists in the global archive, we will find it.
        </p>
        <Link to="/request-a-find" className="inline-block bg-secondary text-white px-12 py-5 font-bold tracking-widest uppercase hover:bg-black transition-all shadow-xl shadow-secondary/10">
          Initiate Personal Hunt
        </Link>
      </section>
    </main>
  );
}

