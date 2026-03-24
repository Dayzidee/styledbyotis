import React from 'react';
import { Link } from 'react-router-dom';

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
        <Link to="/product/suede-jacket" className="col-span-2 md:col-span-7 group relative">
          <div className="aspect-[4/5] bg-surface-container-low overflow-hidden transition-all duration-700 group-hover:shadow-[0_40px_100px_rgba(0,0,0,0.2)]">
            <img className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110" alt="Luxury brown suede jacket" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2qPaoHCnqbd76xIjA63cWPWz5oqMojRCMEGyh-N7qfX2PhW7RnlFgr7Ewd3eU7x2LyeUxoCFeFGJfwR4jRVtLHrR7CerYLPtvktLlr1009SHvplN3ODHMykZXyiglilHFEWEXQEMiu2BA95-ZLH4P6baVBXjDE3aRwlmTNY32F9CuSh1afrnk0WsF0ms3878gir9eD7hDmZ5AlrW7U7wUJLCPnhhk2-FnNlEy4OHHFdXAi662fKk9Fbw6KSiMR7kxBrZ88EYVaZk-" />
            <div className="absolute inset-0 bg-black/0 md:group-hover:bg-black/20 transition-all flex items-center justify-center md:opacity-0 md:group-hover:opacity-100">
              <button className="hidden md:block bg-white text-black px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-secondary hover:text-white transition-colors">
                View Archive Piece
              </button>
            </div>
            <div className="absolute top-4 left-4 md:top-6 md:left-6 flex flex-col gap-1 md:gap-2">
              <span className="bg-secondary text-white px-2 py-0.5 md:px-3 md:py-1 text-[8px] md:text-[9px] font-black uppercase tracking-widest">Limited</span>
              <span className="bg-black text-white px-2 py-0.5 md:px-3 md:py-1 text-[8px] md:text-[9px] font-black uppercase tracking-widest">London Hub</span>
            </div>
          </div>
          <div className="mt-4 md:mt-8 flex justify-between items-start">
            <div>
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter">Vintage Suede Artisan Jacket</h3>
              <p className="text-on-tertiary-container text-[8px] md:text-xs font-bold uppercase tracking-widest mt-1 italic">Hand-Selected Italian Leather</p>
            </div>
            <span className="text-lg md:text-xl font-light tracking-tight text-secondary">$1,450</span>
          </div>
          <button className="md:hidden w-full mt-4 bg-primary text-white py-3 text-[10px] font-black uppercase tracking-widest">View Piece</button>
        </Link>

        {/* Side Product 1 */}
        <div className="col-span-1 md:col-span-5 flex flex-col justify-center">
          <div className="group relative md:pl-12">
            <div className="aspect-square bg-surface-container-highest overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-black/5">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Limited edition sneakers" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCp4_OovWuMvz59jnsH4aErL9yDzwUx8S33GDHnfvMV7a075m17XAMw8EV6v1i2ffg1kXQQzQwRiGrIzMM-7AWfwqQWYXJPfkmoBySskRpCG7Y0AaXvAqYYOLXGPP6rA2GfoC5ZTTGw24QjpFs3CFtalNzHkXtUluMeUVBlFAxYBI1dNboKs4pDPjK0Gwt4_bcKMHpSdyOOdZvn5_wEHZTeCsx8d4feU07KWT3O2I92ZQs07a-uBriP1UKDNQ-kANlPkGhQibIAip_9" />
              <div className="absolute inset-0 bg-black/0 md:group-hover:bg-black/20 transition-all flex items-center justify-center md:opacity-0 md:group-hover:opacity-100">
                <button className="hidden md:block bg-white text-black px-6 py-3 text-[10px] font-bold tracking-widest uppercase hover:bg-secondary hover:text-white transition-colors">
                  Source in My Size
                </button>
              </div>
            </div>
            <div className="mt-4 md:mt-6">
              <span className="text-[8px] md:text-[10px] font-bold text-on-tertiary-container uppercase tracking-[0.2em]">Footwear</span>
              <h3 className="text-sm md:text-lg font-black uppercase tracking-tighter mt-1">Fragment '85 High Retro</h3>
              <p className="hidden md:block text-on-surface-variant font-light text-sm mt-1">Sourced from Tokyo Stockists.</p>
              <div className="mt-1 md:mt-3 text-secondary font-bold text-sm md:text-base">$890</div>
            </div>
            <button className="md:hidden w-full mt-3 border border-outline-variant py-2 text-[9px] font-black uppercase tracking-widest">Source</button>
          </div>
        </div>

        {/* Row 2 - Asymmetric Spacing */}
        <div className="col-span-1 md:col-span-4 mt-6 md:mt-12">
          <div className="group relative">
            <div className="aspect-[3/4] bg-surface-container overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-black/5">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Raw indigo denim set" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPjHyXRlZIp3XiT_9HW30uPYh6xCMpFOOa9tIGVEUKS2iK1TvZMKiJvf4BTd-nTB8cyVfqwSmGZdcGFjsIIWGpV1A7d8Ca-GFWYLzHXC9sSkZI4jQM7fc4GGJvACnWUe3-_jsAvnArZoWD4f2Pd2jHlJX7Jyr_wH0ZHYUTWu61OErw61jmXx1HnwIR1lJFWEiRb6TC9ZBgxffTGrcAS8nhhYenOGT6Q6QD5UA4YV3MAUPbGRp3S1jTJi9S6QE78ZKgucYTkgFkCDm5" />
            </div>
            <div className="mt-4 md:mt-6">
              <h3 className="text-sm md:text-lg font-black uppercase tracking-tighter">Selvage Denim Set 01</h3>
              <p className="hidden md:block text-on-surface-variant font-light text-sm mt-1">21oz Japanese Indigo.</p>
              <div className="mt-1 md:mt-3 text-on-surface font-bold text-sm md:text-base">$550</div>
            </div>
            <button className="md:hidden w-full mt-3 border border-outline-variant py-2 text-[9px] font-black uppercase tracking-widest">Source</button>
          </div>
        </div>

        <div className="col-span-1 md:col-span-4 mt-6 md:mt-24">
          <div className="group relative">
            <div className="aspect-[3/4] bg-surface-container-low overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-black/5">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="White premium sneakers" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgwa_d8ZMmlvU467xp1i8eJqg_6dV7qRQKGtgEgAb5BLNAwiNSsRh71wNZDxCtdZ7BGGD3kND5QZXfSHxHYfW91UdwM9EE9Si7EUcpMGkOa7SmMooS5cvUur-x7ErjOrg5Go9bE7PP_aWz1kzPbV79YhsqTWQypZT9qJO140k_ZSh8FTyVx57XeCQNs3oLYO1MypkaU0KPHBEWKHMmpV6tuRGL5uPd8Xd_IvGZyURgMN8UOa4Ht9wn6n7c2UM85vd3JJc8tiIxOM0k" />
            </div>
            <div className="mt-4 md:mt-6">
              <h3 className="text-sm md:text-lg font-black uppercase tracking-tighter">Bone Canvas High-Top</h3>
              <p className="hidden md:block text-on-surface-variant font-light text-sm mt-1">Available in Paris Hub.</p>
              <div className="mt-1 md:mt-3 text-on-surface font-bold text-sm md:text-base">$320</div>
            </div>
            <button className="md:hidden w-full mt-3 border border-outline-variant py-2 text-[9px] font-black uppercase tracking-widest">Source</button>
          </div>
        </div>

        <div className="col-span-2 md:col-span-4 mt-6 md:mt-12">
          <div className="group relative">
            <div className="aspect-[4/3] md:aspect-[3/4] bg-surface-container-highest overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-black/5">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Black luxury leather biker jacket" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTG0sfZSFq_bS3b80Z6e7fjIm1SsIcIB5fb0DJ82FxsEL9Fuy-8oXcuolCT2e65REhTf9DPEvTZUWOWeB-RjLi302jTb4ouUUQpeOkBI-n8LWy0RPzfk9oVSdEnE3UK9uzZp9G6oUos4_TFONzyUPT9jXhNFp-NozCCvxiQdFgwoHbi5ZTrZlBSrXH2Y5V4D6Papea7xR9A89eCSEEBhkBmYENzfOkYOTft88Cm78eM8-MRmd0OeqH0KzA0XphEDYamAr5Q27ORE4t" />
            </div>
            <div className="mt-4 md:mt-6">
              <h1 className="text-xl md:text-lg font-black uppercase tracking-tighter">Midnight Biker Archive</h1>
              <p className="hidden md:block text-on-surface-variant font-light text-sm mt-1">Calfskin Heritage Edition.</p>
              <div className="mt-1 md:mt-3 text-secondary font-bold text-sm md:text-base">$2,100</div>
            </div>
            <button className="md:hidden w-full mt-4 bg-primary text-white py-3 text-[10px] font-black uppercase tracking-widest">Source Piece</button>
          </div>
        </div>
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
