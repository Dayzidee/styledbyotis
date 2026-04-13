import React from 'react';
import { Link } from 'react-router-dom';
import { SafeImage } from '../components/SafeImage';
import { products } from '../data/products';

export function Home() {
  return (
    <main className="pt-16 md:pt-20 pb-24 md:pb-0">
      {/* Hero Section: Responsive Split Design */}
      <section className="relative h-auto md:h-[921px] flex flex-col md:flex-row overflow-hidden">
        {/* Mobile-only background splits (hidden on MD+) */}
        <div className="md:hidden flex h-[50dvh] w-full relative">
          <div className="w-1/2 relative">
            <img alt="Urban Basketball Culture" className="absolute inset-0 w-full h-full object-cover grayscale contrast-125" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAajjilHa1sjX7fi24NsmodcCOI4GcAnAMR_eU2UumSA_onuhpas93A6848hnfJz2z6IC6PKLTUs0C_IzV8jzl1MwaPpDYqx1S3SGJBy_YnrO8Csf7dnEAQWOCQWI70Ep8DcLv4PBU5MFB5LmFtP_pMZ7ZdWIxU6y4ZZVD1Yoinpk6XIASqr1LenG-JTu7Jir6RbFfAnLNmC6y90sJm_7qUBp8eoxzLRS8LULfzQInAw41FCauhTy6inFFLN2aEkSy2126sqxlUcVOW" />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
          <div className="w-1/2 relative border-l border-white/10">
            <img alt="Air Jordan Sneakers" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmJ7ZUSvMQxXXuavidqbSprL56xJF4dpfU2zAsd5JCYH7bVqvk18sGZIskmHGmpin6avFpTWo4SgRiUFiYEqCIJwldETklX-OTE6xUW0SYos_hSlVt6UgySyxzdulL7ctJNEnPvfp1binTr0qaA0n10f0FSuR_fjk4LCDooK58nRuYqGVXKp87kiPgltlA4nJ6v9ilIK15Q6zhPVDpoZ3FM4HHH365stM1Eplean6uZCiFGEhhZT3hMiSVBV_YjmE_HMHYtzWN740Q" />
            <div className="absolute inset-0 bg-red-600/10"></div>
          </div>
        </div>

        {/* Desktop Left / Mobile Overlay Split */}
        <div className="w-full md:w-1/2 h-full relative bg-surface-container flex items-end md:items-center px-6 md:px-20 py-12 md:py-0 z-10 md:bg-surface-container">
          <div className="md:hidden absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none"></div>
          <div className="asphalt-texture absolute inset-0 hidden md:block"></div>
          
          <div className="max-w-xl relative z-20">
            <span className="inline-block bg-secondary text-white text-[9px] md:text-[10px] font-black tracking-[0.2em] px-3 py-1 mb-4 md:mb-6 uppercase">Lagos Sourcing Engine</span>
            <h1 className="text-[clamp(3rem,9vw,8.5rem)] font-black tracking-tighter text-white md:text-black leading-[0.9] mb-6 md:mb-8 uppercase break-words">Your Official<br/>Global Bridge<br/>To Retail.</h1>
            <p className="text-neutral-300 md:text-on-surface-variant text-sm md:text-lg font-light leading-relaxed mb-8 md:mb-10 max-w-md">No borders. No markups. Otis sources the world's most coveted drops directly from UK, US, and EU boutiques to Lagos.</p>
            <div className="flex flex-col sm:flex-row gap-4 sm:space-x-4">
              <Link to="/shop" className="bg-secondary md:bg-primary text-white px-8 py-4 font-bold text-xs md:text-sm tracking-widest uppercase hover:scale-105 transition-transform active:scale-95 duration-200 text-center">Start Sourcing</Link>
              <Link to="/new-arrivals" className="hidden md:flex border-b-2 border-tertiary text-black font-bold px-4 py-4 text-sm items-center space-x-2">
                <span>The New Collection</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop Right (Hidden on mobile Hero Top) */}
        <div className="hidden md:block w-1/2 h-full relative">
          <img alt="Lifestyle basketball and sneakers" className="w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2L-Tnq950BAddwltSXH_fLUvTyHQwcKd9ZLhsbQz7GqkC5DETmU_iLpOGXoXplJQHtxRifSGmwXpaJqUGN8v-w5Fc5nDakryli09VOMhagGzLuBtibf1fL7KKqNQYdprP7erafq9UbGMtUhfp6Qko44CmyErgIchejCK5eP5YO5JzSPUCbrugfzgSgO6LDKRln0cikaiSj4-uOZEy_gKec_4XYlxdLA9CanhpBfPP1LzgSHEcf3zkuKQtEY068CitAZWWeLug9YAp" />
          <div className="absolute bottom-12 right-12 bg-white/10 backdrop-blur-md p-6 max-w-xs">
            <p className="text-white text-xs font-light uppercase tracking-widest mb-2">Verified Sourcing</p>
            <p className="text-white font-bold text-lg leading-tight tracking-tight uppercase">Access 500+ Luxury Retailers globally via one concierge service.</p>
          </div>
        </div>
      </section>

      {/* The Bridge - Feature Section */}
      <section className="px-6 md:px-8 py-16 md:py-24 bg-surface-container-low relative section-spacing">
        <div className="wood-grain absolute inset-0 opacity-20 hidden md:block"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center md:text-center">
          <span className="text-on-tertiary-container font-black text-[10px] uppercase tracking-widest block mb-2 md:hidden">Feature: The Bridge</span>
          <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-black tracking-tighter text-black leading-none mb-4 uppercase break-words">Found something<br className="md:hidden"/> overseas?</h2>
          <p className="text-on-surface-variant font-light text-sm md:text-base mb-10 md:mb-12 max-w-md mx-auto">Paste any retail store link below. We navigate the logistics, customs, and authentication.</p>
          
          <div className="relative group flex flex-col md:flex-row items-stretch md:items-center bg-white md:bg-transparent shadow-sm md:shadow-none p-1 md:p-0">
            <div className="hidden md:flex absolute inset-y-0 left-6 items-center pointer-events-none">
              <span className="material-symbols-outlined text-outline">link</span>
            </div>
            <input 
              className="w-full md:pl-16 md:pr-40 py-4 md:py-6 bg-surface-container md:bg-white border-none focus:ring-0 md:focus:ring-2 md:focus:ring-secondary text-on-surface text-xs md:text-lg tracking-widest md:tracking-normal placeholder:text-outline-variant" 
              placeholder="PASTE GLOBAL RETAIL URL..." 
              type="text" 
            />
            <button className="w-full md:w-auto md:absolute md:right-4 md:top-1/2 md:-translate-y-1/2 bg-primary md:bg-secondary text-white py-4 md:px-8 md:py-3 font-black md:font-bold text-xs md:text-sm tracking-widest md:tracking-tight hover:brightness-110 transition-all flex items-center justify-center gap-2">
              <span>Bridge the Gap</span>
              <span className="md:hidden material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
          
          <div className="flex justify-center mt-8 space-x-6 md:space-x-12 opacity-30 grayscale overflow-x-auto no-scrollbar pb-2">
            <img alt="Nike" className="h-4 md:h-6 shrink-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKnOmTXDfYa13VpDBDz-WcReFVwlTrrWC3OhGM2f0yggAmRfz9s9g1mFKnqorNzf6RxYQ8gFpV553IbAeG1srCBzhchW0gZlQi7M1YQLhVVIMemyW0wvPsxAufLKZY71O2PbW0Xlw2dlh4Ezt5xFsygblzUUEt9pDkyOf1TRJM4MYYQdLuCDP2j_Vhq7jba0oNvYV2xdUURGmeGB6-9XRoDbAH3bN-wv9LMDPEo_lLWWtp3NjlEgo1sSlXaK1y3jZCBf2GawnaACz8" />
            <img alt="Farfetch" className="h-4 md:h-6 shrink-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA18xqUhzJNmhLAu5B8ZsqXDj2odiWsxfDytleq4SJRjZHJVnv0WJTgM3hIjbXd_CAafvjwaYbHUXVMNOKF9x42ToZ2Oahab1SNzamW36nQhoGppRKrt9wMQb7rMHuuqdNO5KNsAB-W93YOL3JBd7hVXS5IpqC_1vBsBRrh5YjNTab_5xzY_AKUJbPurofDRM2mrSv2CP1cGho0yp2u6pHQSBWdMUJK-4rbCjJdWb3aD_L_Moz94vQS8K2Bmvzssixc8a8gYK0xo6fq" />
            <img alt="Adidas" className="h-4 md:h-6 shrink-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2AO9SnrGdCzNf53iSAiJ_fgZiyrKEMKtBWZxd_qhJkCKJGs3bUj_Nns27ZcfCcCtqcCHaOrLbEbDH8ESaI3CFCaLwcCirvl4hPzvA2O7q0_cvsqa-sjWIJeDPXUW9E8kB5qj22uKm_FQk4qBP7A1Q_A69pOaqswdx80M4p-hexB4559FRDXd6RRvRm_Sm5AwuqGqpUMBsuLUkNuHmTJEyChJ15-bfgwc-GAP0BS_E8DctfVhNNDQ4hsMCGvALF-8kG13NH5h65BZW" />
            <img alt="StockX" className="h-4 md:h-6 shrink-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtkQDuAni8L_bDh7lLPBiKU8_Q03bRac8y_0aFkMBcquBniD1dVUPiAUX_ASVkkMhdwdtTW0qhUt94Gxjo9434nVNmdlfPo-SGfNwCKZ5kasP3MUxTe5tyCzzBtnn7EFsG27h8sfWJnCEOrQVKwmmZFbNoLG3o4ScwZJvGSKDxzp1n_N7vb5mHiubo4iBK2FO_aEGOF797F86J85zURt3E3eRvQvhcBb74OWChiCRXBFr-JP0hzwzEgOMt8zhOjUVz3iSjtQQbf7CY" />
          </div>
        </div>
      </section>

      {/* The Recent Drops - Responsive Grid */}
      <section className="py-16 md:py-24 px-6 md:px-8 max-w-[1600px] mx-auto section-spacing">
        <div className="flex justify-between items-end mb-10 md:mb-16">
          <div>
            <h2 className="text-[clamp(2.5rem,7vw,5rem)] font-black tracking-tighter text-black leading-none uppercase break-words">The Arrivals</h2>
            <p className="hidden md:block text-on-surface-variant font-light mt-4">Curated selections from our Lagos hub.</p>
          </div>
          <Link className="text-secondary font-black text-[10px] md:text-xs tracking-widest uppercase flex items-center gap-2 pb-1 border-b-2 border-secondary" to="/new-arrivals">View All Drops <span className="hidden md:inline material-symbols-outlined text-sm">north_east</span></Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-12">
          {/* Main Feature Drop */}
          <Link to="/product/saint-ghost-shirt" className="col-span-2 md:col-span-7 group cursor-pointer relative aspect-[4/5] overflow-hidden bg-surface-container shadow-sm hover:shadow-2xl transition-all duration-700">
            <SafeImage alt="SAINT Mxxxxxx x Ghost In The Shell" className="transition-transform duration-1000 group-hover:scale-110" src="/products/saint-shirt-front.jpg" />
            <div className="absolute top-4 left-4 bg-white px-2 py-1 border border-black/5">
              <span className="text-[8px] md:text-[10px] font-black uppercase tracking-tighter">Verified Sourcing</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end">
              <p className="text-white text-[clamp(1.25rem,4vw,3.5rem)] font-black uppercase tracking-tighter mb-1 md:mb-4 break-words">SAINT Mxxxxxx x Ghost In The Shell</p>
              <p className="text-white/70 text-[8px] md:text-xs font-light tracking-widest uppercase">Limited quantity available</p>
              <button className="hidden md:block mt-6 self-start bg-white text-black px-6 py-3 font-black text-[10px] lg:text-xs uppercase tracking-widest hover:bg-secondary hover:text-white transition-colors">Explore Piece</button>
            </div>
          </Link>

          {/* Secondary Drops */}
          <div className="col-span-1 md:col-span-5 flex flex-col gap-8 md:gap-12">
            <Link to="/product/hellstar-wrestlemania" className="aspect-[3/4] relative overflow-hidden bg-surface-container group cursor-pointer border border-black/5">
              <SafeImage alt="Hellstar WrestleMania" className="transition-all duration-1000 group-hover:scale-110" src="/products/hellstar-front.jpg" />
              <div className="p-3 md:p-6 absolute bottom-0 bg-white/90 backdrop-blur w-full flex justify-between items-end translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div>
                  <span className="text-[9px] md:text-[10px] font-black block uppercase tracking-tighter">Hellstar</span>
                  <span className="text-xs md:text-lg font-black">₦30,000</span>
                </div>
                <span className="material-symbols-outlined text-lg">arrow_outward</span>
              </div>
              <div className="md:hidden p-3 absolute bottom-0 bg-white/95 backdrop-blur w-full">
                <span className="text-[9px] font-black block uppercase tracking-tighter">Hellstar</span>
                <span className="text-[11px] font-light text-on-surface-variant">₦30,000</span>
              </div>
            </Link>

            <Link to="/product/sp5der-rugby-polo" className="aspect-[3/4] relative overflow-hidden bg-surface-container group cursor-pointer">
              <SafeImage alt="Sp5der Academy" className="transition-transform duration-700 group-hover:scale-110" src="/products/sp5der-rugby.jpg" />
              <div className="p-3 md:p-6 absolute bottom-0 bg-white/90 backdrop-blur w-full flex justify-between items-end translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                <div>
                  <span className="text-[9px] md:text-[10px] font-black block uppercase tracking-tighter">Sp5der Academy</span>
                  <span className="text-xs md:text-lg font-black">₦60,000</span>
                </div>
                <span className="material-symbols-outlined text-lg">arrow_outward</span>
              </div>
              <div className="md:hidden p-3 absolute bottom-0 bg-white/95 backdrop-blur w-full">
                <span className="text-[9px] font-black block uppercase tracking-tighter">Sp5der Academy</span>
                <span className="text-[11px] font-light text-on-surface-variant">₦60,000</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Signals / Testimonials */}
      <section className="py-20 md:py-32 bg-primary text-on-primary section-spacing">
        <div className="px-6 md:px-8 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-secondary text-[10px] font-black uppercase tracking-[0.3em]">The Registry</span>
            <h2 className="text-[clamp(2.5rem,7vw,5rem)] font-black tracking-tighter uppercase leading-none mt-2 break-words">What Clients<br className="md:hidden"/> Are Saying</h2>
          </div>
          <div className="hidden md:flex gap-4">
            <button className="w-12 h-12 flex items-center justify-center border border-white/20 hover:bg-white hover:text-black transition-colors"><span className="material-symbols-outlined">west</span></button>
            <button className="w-12 h-12 flex items-center justify-center border border-white/20 hover:bg-white hover:text-black transition-colors"><span className="material-symbols-outlined">east</span></button>
          </div>
        </div>
        <div className="flex overflow-x-auto hide-scrollbar gap-6 px-6 md:px-8 pb-4">
          <div className="min-w-[280px] md:min-w-[450px] bg-white/5 p-8 border border-white/10 flex flex-col justify-between aspect-square md:aspect-auto">
            <div>
              <div className="flex gap-1 mb-6 text-secondary">
                {[1,2,3,4,5].map(i => <span key={i} className="material-symbols-outlined text-sm md:text-base" style={{fontVariationSettings: "'FILL' 1"}}>star</span>)}
              </div>
              <p className="text-white text-lg md:text-2xl font-light italic leading-tight mb-8">"Finally a way to get my hands on the Paris drops without the resale markup. Otis is the real deal."</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-secondary"></div>
              <div>
                <p className="text-[10px] md:text-xs font-black uppercase tracking-widest">Marcus J.</p>
                <p className="text-[8px] md:text-[10px] text-white/50 uppercase tracking-widest">London, UK</p>
              </div>
            </div>
          </div>
          
          <div className="min-w-[280px] md:min-w-[450px] bg-white/5 p-8 border border-white/10 flex flex-col justify-between aspect-square md:aspect-auto">
            <div>
              <div className="flex gap-1 mb-6 text-secondary">
                {[1,2,3,4,5].map(i => <span key={i} className="material-symbols-outlined text-sm md:text-base" style={{fontVariationSettings: "'FILL' 1"}}>star</span>)}
              </div>
              <p className="text-white text-lg md:text-2xl font-light italic leading-tight mb-8">"Seamless bridge between US and Asian retail markets. The logistics are flawless."</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-tertiary-fixed-dim"></div>
              <div>
                <p className="text-[10px] md:text-xs font-black uppercase tracking-widest">Sarah L.</p>
                <p className="text-[8px] md:text-[10px] text-white/50 uppercase tracking-widest">New York, NY</p>
              </div>
            </div>
          </div>

          <div className="min-w-[280px] md:min-w-[450px] bg-white/5 p-8 border border-white/10 flex flex-col justify-between aspect-square md:aspect-auto">
            <div>
              <div className="flex gap-1 mb-6 text-secondary">
                {[1,2,3,4,5].map(i => <span key={i} className="material-symbols-outlined text-sm md:text-base" style={{fontVariationSettings: "'FILL' 1"}}>star</span>)}
              </div>
              <p className="text-white text-lg md:text-2xl font-light italic leading-tight mb-8">"The only service I trust for high-value sourcing. The verification process gives total peace of mind."</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-500"></div>
              <div>
                <p className="text-[10px] md:text-xs font-black uppercase tracking-widest">Daniel O.</p>
                <p className="text-[8px] md:text-[10px] text-white/50 uppercase tracking-widest">Tokyo, JP</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial CTA */}
      <section className="relative h-[480px] md:h-[600px] flex items-center justify-center text-center px-6 overflow-hidden">
        <img alt="Texture Background" className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.3]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDt5C37NP6ED4mIgqYXd2jDoF0ao_Zbsxxi0X3LR6ozSK-__WVMN6bRdoRQSmzYpxrd-KLOTeWdyeKj8I0cOLfxLXBPVjjLjIk3a_GjJomcDTMB-soDMfairNBHdrzuxhrqbGhpJOObZYUT-rN0pm7aHMiLo1hNrzWKWYcR0gR35W67SrKTQFDTqBqhiy7SDD_0NrpGtW3rk9qt2V_VsHfHitUMTdXUlfUAQRy5ZOxOtlfqd5CsTGAbrUCIomc2t7-tl9rlYmG1TBVq" />
        <div className="relative z-10 max-w-lg">
          <h3 className="text-[clamp(2.5rem,7vw,5rem)] font-black text-white uppercase tracking-tighter leading-none mb-6 break-words">Own the Court,<br/>Anywhere.</h3>
          <p className="text-white/70 font-light text-xs md:text-sm tracking-[0.2em] uppercase mb-10">Access restricted retail ecosystems today.</p>
          <Link to="/request-a-find" className="inline-block border-2 border-white text-white px-10 py-4 font-black text-xs uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all active:scale-95">Request Invite</Link>
        </div>
      </section>
    </main>
  );
}
