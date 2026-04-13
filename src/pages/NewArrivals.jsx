import React from 'react';
import { Link } from 'react-router-dom';
import { SafeImage } from '../components/SafeImage';

export const NewArrivals = () => {
  return (
    <main className="pt-20 bg-background">
      {/* Hero Section: Featured Drop - Split for Mobile */}
      <section className="relative w-full h-[80vh] md:h-[870px] flex items-center md:items-end overflow-hidden">
        <div className="absolute inset-0 bg-neutral-900">
          <img 
            className="w-full h-full object-cover opacity-80 mix-blend-luminosity md:block hidden" 
            alt="High-end streetwear sneakers" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbJb8pCt0C_xV8FwiADnuUpS--EnA5EnbEls7bS26S09t1Q3hsTFBomKCYqntnmm1S2pnW7-Vrhnwwi90NDvgFtmLXqqOrZMY5CqR_O1EZKliZDhr7Sr2gf-QS12Zp6GRoOeR7ZSm7ucgE1poduBwiddgUdVSy4-iX7nAR5v55AhodKK_ACJeo96l_SJgUFwm3_J2lmjC2vn5d5yc2QPt-VcyhI-mrqE0SlEY9uAgs8X1pHIS7C4IPLNhQSEi8z0mqP3jCKaNJ0xdW"
          />
          {/* Mobile Hero Image */}
          <div className="md:hidden flex flex-col h-full">
            <div className="h-1/2 w-full overflow-hidden">
             <img className="w-full h-full object-cover opacity-80 mix-blend-luminosity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbJb8pCt0C_xV8FwiADnuUpS--EnA5EnbEls7bS26S09t1Q3hsTFBomKCYqntnmm1S2pnW7-Vrhnwwi90NDvgFtmLXqqOrZMY5CqR_O1EZKliZDhr7Sr2gf-QS12Zp6GRoOeR7ZSm7ucgE1poduBwiddgUdVSy4-iX7nAR5v55AhodKK_ACJeo96l_SJgUFwm3_J2lmjC2vn5d5yc2QPt-VcyhI-mrqE0SlEY9uAgs8X1pHIS7C4IPLNhQSEi8z0mqP3jCKaNJ0xdW" alt="Hero Mobile Top" />
            </div>
            <div className="h-1/2 w-full bg-neutral-900 border-t border-white/10">
              <img className="w-full h-full object-contain opacity-40 scale-150 -translate-y-12" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYUOUx9onSjE5V4XyJYfIWyuBJQsb-Xaus475pi5m8-3kpVLZu593rjfGeB_x1e4oG2DHwZvyJszKYKCQdMqliya7G_Bx5oRVVqmRw4eF7Y_AH04qx1ZI5QBbM2AMiIOuUZHpKGBNV8PkZeEt2DNOYoaRTiJ-kihVY0NVaUZP3DfwAmnqne29wAYk76LGd4M_xTGAjU62DNn-gFsg5NkiUDJpI9O9o9KyvXq0inoqtjqkfr1KbcLtieD5j94wGpeag5OB11hVI6y5O" alt="Hero Mobile Bottom" />
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 md:via-transparent to-transparent opacity-80 md:opacity-60"></div>
        </div>
        <div className="relative z-10 w-full px-6 md:px-8 pb-12 md:pb-24 max-w-[1920px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="max-w-4xl">
            <span className="bg-secondary text-white px-2 py-0.5 md:px-3 md:py-1 text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] mb-4 inline-block">The Lagos Archive Drop</span>
            <h1 className="text-[clamp(3rem,10vw,8rem)] font-black tracking-tighter text-white uppercase leading-[0.85] break-words">
              The Recent <br/> Intake
            </h1>
          </div>
          <div className="flex flex-col items-start md:items-end text-white max-w-xs md:text-right">
            <p className="text-xs md:text-sm font-light leading-relaxed mb-6 md:text-right text-neutral-300">
              Hand-sourced rarities from the streets of Soho and the boutiques of Manhattan. Verified authentic.
            </p>
            <button className="flex items-center group bg-white/10 md:bg-transparent p-2 md:p-0 backdrop-blur md:backdrop-none">
              <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest mr-4 ml-2 md:ml-0">View The Collection</span>
              <span className="material-symbols-outlined p-3 md:p-4 bg-white text-black transition-transform group-hover:translate-x-2">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

      {/* Asphalt Texture Transition Section */}
      <section className="asphalt-texture bg-surface py-16 md:py-24 px-6 md:px-8 relative section-spacing">
        <div className="max-w-[1920px] mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-10 md:mb-16 gap-6">
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase text-on-surface">Fresh Intake / LAGOS HUB</h2>
            {/* Horizontal Scroll on Mobile */}
            <div className="flex space-x-6 md:space-x-8 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-on-surface-variant overflow-x-auto no-scrollbar w-full md:w-auto pb-4 md:pb-0">
              <button className="text-primary border-b border-primary shrink-0">All Drops</button>
              <button className="hover:text-primary transition-colors shrink-0">Footwear</button>
              <button className="hover:text-primary transition-colors shrink-0">Outerwear</button>
              <button className="hover:text-primary transition-colors shrink-0">Accessories</button>
            </div>
          </div>

          {/* Product Grid: Asymmetric Layout - 2 Column on Mobile */}
          <div className="grid grid-cols-2 md:grid-cols-12 gap-6 md:gap-4 lg:gap-12">
            {/* Product Card 1: Large Featured */}
            <Link to="/product/saint-ghost-shirt" className="col-span-2 md:col-span-7 flex flex-col group">
              <div className="relative overflow-hidden aspect-[4/5] bg-surface-container-low transition-all duration-700 font-bold group-hover:shadow-[0_40px_100px_rgba(0,0,0,0.1)]">
                <SafeImage 
                  className="transition-all duration-1000 group-hover:scale-110" 
                  alt="SAINT Mxxxxxx x Ghost In The Shell" 
                  src="/products/saint-shirt-front.jpg"
                />
                <div className="absolute top-4 left-4 md:top-6 md:left-6 flex flex-col gap-1 md:gap-2">
                  <span className="bg-secondary text-white px-2 py-0.5 md:px-3 md:py-1 text-[8px] md:text-[9px] font-black uppercase tracking-widest">Limited Drop</span>
                  <span className="bg-black text-white px-2 py-0.5 md:px-3 md:py-1 text-[8px] md:text-[9px] font-black uppercase tracking-widest">Sourced: Lagos</span>
                </div>
              </div>
              <div className="mt-4 md:mt-6 flex justify-between items-start">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight uppercase text-on-surface">SAINT Mxxxxxx x Ghost In The Shell</h3>
                  <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant mt-1">Verified Pristine</p>
                </div>
                <span className="text-base md:text-lg font-light text-on-surface">₦30,000</span>
              </div>
            </Link>

            {/* Product Card 2: Medium */}
            <Link to="/product/hellstar-wrestlemania" className="col-span-1 md:col-span-5 md:mt-24 flex flex-col group mt-8 md:mt-24">
              <div className="relative overflow-hidden aspect-square bg-surface-container-high transition-all duration-700">
                <SafeImage 
                  className="transition-transform duration-700 group-hover:scale-105" 
                  alt="Hellstar WrestleMania" 
                  src="/products/hellstar-front.jpg"
                />
                <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6">
                  <span className="bg-black text-white px-2 py-0.5 md:px-3 md:py-1 text-[8px] md:text-[9px] font-black uppercase tracking-widest">Sourced: Lagos</span>
                </div>
              </div>
              <div className="mt-4 md:mt-6 flex justify-between items-start">
                <div>
                  <h3 className="text-sm md:text-2xl font-bold tracking-tight uppercase text-on-surface">Hellstar WrestleMania</h3>
                  <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant mt-1">Limited Release</p>
                </div>
                <span className="text-sm md:text-lg font-light text-on-surface">₦30,000</span>
              </div>
            </Link>

            {/* Product Card 3: Sold Out Small */}
            <div className="col-span-1 md:col-span-4 flex flex-col group">
              <div className="relative overflow-hidden aspect-[3/4] bg-surface-container transition-all duration-700 grayscale hover:grayscale-0">
                <SafeImage 
                  className="transition-transform duration-700 group-hover:scale-105" 
                  alt="Leather handbag" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCt8X7YZqtw1JAFsub_yNBvKXWmH1DklTkj8vlrX9GAIosdcORbhrjW0ObDsl0qzy5a0hPhZUsG2aaEH6ZLUtdMwkHcS_uWZYYRbFOSVR8jAABU9h27jiJD1BE5pTkkXo8UZ7BiSgESB5pvSaVvkhy0cRsKl_9Z-nVDBKrS_90QlwIr5y9QbPPgjNEK3_9AAiqNazhUiI1eXarHDnWOrEw0mkbjjaat10vICuSMTrPua7iNJ27yBCUhhl1ibP94UUZ6FQpliFhr6OxW"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span className="border border-white text-white px-4 py-1 text-[9px] md:text-[12px] font-black uppercase tracking-[0.4em]">Sold Out</span>
                </div>
              </div>
              <div className="mt-4 md:mt-6 flex justify-between items-start opacity-50">
                <div>
                  <h3 className="text-sm md:text-xl font-bold tracking-tight uppercase text-on-surface">Soho Archive Tote</h3>
                  <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant mt-1">Waitlist Only</p>
                </div>
                <span className="text-sm md:text-lg font-light text-on-surface">₦1,200,000</span>
              </div>
            </div>

            {/* Product Card 4: Medium Vertical */}
            <Link to="/product/sp5der-rugby-polo" className="col-span-1 md:col-span-4 md:mt-12 flex flex-col group mt-8 md:mt-12">
              <div className="relative overflow-hidden aspect-[3/4] bg-surface-container-highest transition-all duration-700 font-bold group-hover:shadow-[0_40px_100px_rgba(0,0,0,0.1)]">
                <SafeImage 
                  className="transition-all duration-1000 group-hover:scale-110" 
                  alt="Sp5der Academy" 
                  src="/products/sp5der-rugby.jpg"
                />
                <div className="absolute top-4 left-4 md:top-6 md:left-6">
                  <span className="bg-secondary text-white px-2 py-0.5 md:px-3 md:py-1 text-[8px] md:text-[9px] font-black uppercase tracking-widest">New Arrival</span>
                </div>
              </div>
              <div className="mt-4 md:mt-6 flex justify-between items-start">
                <div>
                  <h3 className="text-sm md:text-xl font-bold tracking-tight uppercase text-on-surface">Sp5der Academy Polo</h3>
                  <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant mt-1">Sourced: Lagos</p>
                </div>
                <span className="text-sm md:text-lg font-light text-on-surface">₦60,000</span>
              </div>
            </Link>

            {/* Product Card 5: Grid Square */}
            <Link to="/product/scimitar-cargo-pants" className="col-span-2 md:col-span-4 flex flex-col group mt-8 md:mt-0">
              <div className="relative overflow-hidden aspect-video md:aspect-square bg-surface-container-low transition-all duration-700">
                <SafeImage 
                  className="transition-transform duration-700 group-hover:scale-105" 
                  alt="Scimitar cargo pants" 
                  src="/products/scimitar-khaki.jpg"
                />
                <div className="absolute top-4 right-4 md:top-6 md:right-6">
                  <span className="bg-secondary text-white px-2 py-0.5 md:px-3 md:py-1 text-[8px] md:text-[9px] font-black uppercase tracking-widest">Last One</span>
                </div>
              </div>
              <div className="mt-4 md:mt-6 flex justify-between items-start">
                <div>
                  <h3 className="text-xl md:text-xl font-bold tracking-tight uppercase text-on-surface">Scimitar Cargo Pants</h3>
                  <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant mt-1">Sourced: Lagos</p>
                </div>
                <span className="text-lg md:text-lg font-light text-on-surface">₦45,000</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Sourcing Credibility Section */}
      <section className="py-20 md:py-32 px-6 md:px-8 bg-black text-white overflow-hidden relative section-spacing">
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-half md:h-full asphalt-texture opacity-20 pointer-events-none"></div>
        <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center relative z-10">
          <div className="relative">
            <img 
              className="w-full aspect-[4/5] md:aspect-[4/5] object-cover grayscale brightness-75" 
              alt="London street crossing" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAfvQLXQhmqTHYA9c6HSHsI-kCe66eTKWJyypbjTCkCmlUPfOrCu_9T_T7oqSdniVDjz8Lb5epI3cZsQ4v3GNTuuFsNWNdjfskQ6UhYNuPj9QrKkChkJcXnRLw7s395tf_hJDSJd-_87T8H1qKNXw9Hw1mJSHZYoJDFWxFCE4XbIBJKoES8yOjnvJ4SAx9849R1g6ybLwj8M3EJnBcpSh6D9wPPIFWQkdhS8PYeUV3DEewglQxdkr1JaTmCgQ6FE3T84ovhU7pyiJ1"
            />
            <div className="absolute -bottom-6 -right-6 bg-secondary p-8 md:p-12">
              <h4 className="text-3xl md:text-4xl font-black tracking-tighter leading-none mb-2 text-white">24H</h4>
              <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-white">Sourcing Turnaround</p>
            </div>
          </div>
          <div>
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6 md:mb-8 leading-none">Global Sourcing,<br/>Personal Touch.</h2>
            <p className="text-neutral-400 text-sm md:text-lg font-light leading-relaxed mb-10 md:mb-12 max-w-lg">
              We don't just buy clothes. We curate culture. Every piece in our 'Recent Intake' is hand-inspected by Otis himself in Lagos before being listed. Quality is non-negotiable.
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-secondary text-3xl md:text-4xl">verified</span>
                <div>
                  <h5 className="font-bold uppercase tracking-widest text-[10px] md:text-[12px]">100% Authenticity Guaranteed</h5>
                  <p className="text-[10px] md:text-xs text-neutral-500 font-light">Every stitch, every label, verified.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-secondary text-3xl md:text-4xl">public</span>
                <div>
                  <h5 className="font-bold uppercase tracking-widest text-[10px] md:text-[12px]">Global Logistics Network</h5>
                  <p className="text-[10px] md:text-xs text-neutral-500 font-light">Fast, tracked shipping worldwide.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
