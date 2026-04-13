import React from 'react';
import { Link } from 'react-router-dom';
import { SafeImage } from '../components/SafeImage';

export function ProductListing() {
  return (
    <main className="pt-24 md:pt-32 pb-24 px-6 md:px-8 max-w-[1920px] mx-auto">
      {/* Header Section */}
      <header className="mb-12 md:mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8">
          <div>
            <span className="label-sm text-secondary font-bold tracking-[0.3em] uppercase text-[9px] md:text-[10px] mb-2 md:mb-4 block">Seasonal Selection</span>
            <h1 className="text-4xl md:text-8xl font-black tracking-tighter leading-none uppercase max-w-4xl">
              Global <br className="hidden md:block" />Archive <span className="text-on-surface-variant/20 italic">004</span>
            </h1>
            <p className="mt-4 md:mt-6 text-on-surface-variant font-light text-sm md:text-lg tracking-tight max-w-xl">
              Curated archives from global retail hubs.
            </p>
          </div>
          {/* Minimalist Filters - Horizontal Scroll on Mobile */}
          <div className="glass-panel p-4 md:p-6 border-none flex flex-row md:flex-wrap gap-8 md:gap-10 overflow-x-auto no-scrollbar -mx-6 px-6 md:mx-0 md:px-6">
            <div className="shrink-0">
              <span className="block text-[9px] md:text-[10px] font-bold tracking-widest text-on-tertiary-container uppercase mb-2 md:mb-3">Category</span>
              <div className="flex gap-4 md:gap-6">
                <button className="text-[10px] md:text-xs font-bold border-b-2 border-secondary pb-1">All</button>
                <button className="text-[10px] md:text-xs font-light text-on-surface-variant hover:text-primary transition-colors">Footwear</button>
                <button className="text-[10px] md:text-xs font-light text-on-surface-variant hover:text-primary transition-colors">Outerwear</button>
                <button className="text-[10px] md:text-xs font-light text-on-surface-variant hover:text-primary transition-colors">Denim</button>
              </div>
            </div>
            <div className="hidden sm:block w-px h-10 bg-outline-variant/20"></div>
            <div className="shrink-0">
              <span className="block text-[9px] md:text-[10px] font-bold tracking-widest text-on-tertiary-container uppercase mb-2 md:mb-3">Source Region</span>
              <div className="flex gap-4 md:gap-6">
                <button className="text-[10px] md:text-xs font-light text-on-surface-variant hover:text-primary transition-colors">UK</button>
                <button className="text-[10px] md:text-xs font-light text-on-surface-variant hover:text-primary transition-colors">US</button>
                <button className="text-[10px] md:text-xs font-light text-on-surface-variant hover:text-primary transition-colors">EU</button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Asymmetrical Product Grid - 2 Column on Mobile */}
      <div className="grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-8 lg:gap-12">
        {/* Featured Product (Large) */}
        <Link to="/product/saint-ghost-shirt" className="col-span-2 md:col-span-12 lg:col-span-7 group relative">
          <div className="aspect-[4/5] bg-surface-container-low overflow-hidden transition-all duration-700 group-hover:shadow-[0_40px_100px_rgba(0,0,0,0.2)]">
            <SafeImage className="transition-all duration-1000 group-hover:scale-110" alt="SAINT Mxxxxxx x Ghost In The Shell" src="/products/saint-shirt-front.jpg" />
            <div className="absolute inset-0 bg-black/0 md:group-hover:bg-black/20 transition-all flex items-center justify-center md:opacity-0 md:group-hover:opacity-100">
              <button className="hidden md:block bg-white text-black px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-secondary hover:text-white transition-colors">
                View Archive Piece
              </button>
            </div>
            <div className="absolute top-4 left-4 md:top-6 md:left-6 flex flex-col gap-1 md:gap-2">
              <span className="bg-secondary text-white px-2 py-0.5 md:px-3 md:py-1 text-[8px] md:text-[9px] font-black uppercase tracking-widest">New Arrival</span>
              <span className="bg-black text-white px-2 py-0.5 md:px-3 md:py-1 text-[8px] md:text-[9px] font-black uppercase tracking-widest">Lagos Hub</span>
            </div>
          </div>
          <div className="mt-4 md:mt-8 flex justify-between items-start">
            <div>
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter">SAINT Mxxxxxx x Ghost In The Shell</h3>
              <p className="text-on-tertiary-container text-[8px] md:text-xs font-bold uppercase tracking-widest mt-1 italic">Collaboration Piece</p>
            </div>
            <span className="text-lg md:text-xl font-light tracking-tight text-secondary">₦30,000</span>
          </div>
          <button className="md:hidden w-full mt-4 bg-primary text-white py-3 text-[10px] font-black uppercase tracking-widest">View Piece</button>
        </Link>

        {/* Side Product 1 */}
        <Link to="/product/hellstar-wrestlemania" className="col-span-1 md:col-span-5 flex flex-col justify-center">
          <div className="group relative md:pl-12">
            <div className="aspect-square bg-surface-container-highest overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-black/5">
              <SafeImage className="transition-transform duration-700 group-hover:scale-105" alt="Hellstar WrestleMania" src="/products/hellstar-front.jpg" />
              <div className="absolute inset-0 bg-black/0 md:group-hover:bg-black/20 transition-all flex items-center justify-center md:opacity-0 md:group-hover:opacity-100">
                <button className="hidden md:block bg-white text-black px-6 py-3 text-[10px] font-bold tracking-widest uppercase hover:bg-secondary hover:text-white transition-colors">
                  Source in My Size
                </button>
              </div>
            </div>
            <div className="mt-4 md:mt-6">
              <span className="text-[8px] md:text-[10px] font-bold text-on-tertiary-container uppercase tracking-[0.2em]">Graphic T-shirt</span>
              <h3 className="text-sm md:text-lg font-black uppercase tracking-tighter mt-1">Hellstar WrestleMania</h3>
              <p className="hidden md:block text-on-surface-variant font-light text-sm mt-1">Sourced from Lagos Hub.</p>
              <div className="mt-1 md:mt-3 text-secondary font-bold text-sm md:text-base">₦30,000</div>
            </div>
            <button className="md:hidden w-full mt-3 border border-outline-variant py-2 text-[9px] font-black uppercase tracking-widest">Source</button>
          </div>
        </Link>

        {/* Row 2 - Asymmetric Spacing */}
        <Link to="/product/sp5der-rugby-polo" className="col-span-1 md:col-span-4 mt-6 md:mt-12">
          <div className="group relative">
            <div className="aspect-[3/4] bg-surface-container overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-black/5">
              <SafeImage className="transition-transform duration-700 group-hover:scale-105" alt="Sp5der Academy" src="/products/sp5der-rugby.jpg" />
            </div>
            <div className="mt-4 md:mt-6">
              <h3 className="text-sm md:text-lg font-black uppercase tracking-tighter">Sp5der Academy Rugby Polo</h3>
              <p className="hidden md:block text-on-surface-variant font-light text-sm mt-1">Navy with Contrast Collar.</p>
              <div className="mt-1 md:mt-3 text-on-surface font-bold text-sm md:text-base">₦60,000</div>
            </div>
            <button className="md:hidden w-full mt-3 border border-outline-variant py-2 text-[9px] font-black uppercase tracking-widest">Source</button>
          </div>
        </Link>

        <Link to="/product/washed-light-blue-jeans" className="col-span-1 md:col-span-4 mt-6 md:mt-24">
          <div className="group relative">
            <div className="aspect-[3/4] bg-surface-container-low overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-black/5">
              <SafeImage className="transition-transform duration-700 group-hover:scale-105" alt="Washed light blue jeans" src="/products/washed-jeans.jpg" />
            </div>
            <div className="mt-4 md:mt-6">
              <h3 className="text-sm md:text-lg font-black uppercase tracking-tighter">Classic Washed Denim</h3>
              <p className="hidden md:block text-on-surface-variant font-light text-sm mt-1">Slim Tapered Fit.</p>
              <div className="mt-1 md:mt-3 text-on-surface font-bold text-sm md:text-base">₦45,000</div>
            </div>
            <button className="md:hidden w-full mt-3 border border-outline-variant py-2 text-[9px] font-black uppercase tracking-widest">Source</button>
          </div>
        </Link>

        <Link to="/product/scimitar-cargo-pants" className="col-span-2 md:col-span-4 mt-6 md:mt-12">
          <div className="group relative">
            <div className="aspect-[4/3] md:aspect-[3/4] bg-surface-container-highest overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-black/5">
              <SafeImage className="transition-transform duration-700 group-hover:scale-105" alt="Scimitar cargo pants" src="/products/scimitar-khaki.jpg" />
            </div>
            <div className="mt-4 md:mt-6">
              <h1 className="text-xl md:text-lg font-black uppercase tracking-tighter">Deconstructed Scimitar Pants</h1>
              <p className="hidden md:block text-on-surface-variant font-light text-sm mt-1">Wide Leg Utility.</p>
              <div className="mt-1 md:mt-3 text-secondary font-bold text-sm md:text-base">₦45,000</div>
            </div>
            <button className="md:hidden w-full mt-4 bg-primary text-white py-3 text-[10px] font-black uppercase tracking-widest">Source Piece</button>
          </div>
        </Link>
      </div>

      {/* Pagination/Load More */}
      <div className="mt-20 md:mt-32 flex flex-col items-center">
        <div className="w-16 md:w-24 h-px bg-outline-variant mb-6 md:mb-8"></div>
        <button className="group flex items-center gap-4 hover:gap-8 transition-all">
          <span className="text-xs md:text-sm font-black uppercase tracking-[0.2em] md:tracking-[0.4em]">View Full Archive</span>
          <span className="material-symbols-outlined text-secondary">east</span>
        </button>
      </div>
    </main>
  );
}
