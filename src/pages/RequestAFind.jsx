import React, { useState } from 'react';

export const RequestAFind = () => {
  const [budget, setBudget] = useState(2850);
  const [currentStep, setCurrentStep] = useState(1);

  const formatBudget = (val) => {
    const min = Math.max(500, val - 1500);
    const max = val;
    return `$${min.toLocaleString()} — $${max.toLocaleString()}`;
  };

  return (
    <main className="min-h-screen bg-primary text-white pt-24 md:pt-20 pb-20 md:pb-0">
      {/* Main Content Canvas */}
      <section
        className="min-h-[calc(100vh-5rem)] flex items-center justify-center px-4 md:px-6 py-12 md:py-24 relative"
        style={{
          backgroundImage: `linear-gradient(45deg, rgba(187, 0, 30, 0.1) 0%, rgba(166, 123, 91, 0.1) 50%, rgba(93, 123, 147, 0.1) 100%)`,
        }}
      >
        <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Context Header Section */}
          <div className="lg:col-span-12 mb-4 md:mb-8 text-center md:text-left">
            <h1 className="font-black text-3xl md:text-6xl tracking-tighter uppercase mb-4 leading-[1.1] md:leading-none max-w-2xl mx-auto md:mx-0">
              Tell us what you're looking for. We'll handle the rest.
            </h1>
            <p className="text-on-primary-container font-light text-base md:text-lg tracking-tight max-w-lg mx-auto md:mx-0">
              Access our global network of boutiques and private collectors to source the unfindable.
            </p>
          </div>

          {/* Steps Progress Sidebar - Visible only on Desktop */}
          <div className="hidden lg:block lg:col-span-3 space-y-12 py-8">
            <div className="flex items-center gap-4">
              <span className={`text-[10px] font-bold tracking-[0.2em] ${currentStep >= 1 ? 'text-secondary' : 'text-white/40'}`}>01</span>
              <span className={`text-[11px] font-bold tracking-widest uppercase ${currentStep >= 1 ? '' : 'opacity-40'}`}>Identification</span>
            </div>
            <div className={`flex items-center gap-4 ${currentStep >= 2 ? '' : 'opacity-40'}`}>
              <span className={`text-[10px] font-bold tracking-[0.2em] ${currentStep >= 2 ? 'text-secondary' : ''}`}>02</span>
              <span className="text-[11px] font-bold tracking-widest uppercase">Specifications</span>
            </div>
            <div className={`flex items-center gap-4 ${currentStep >= 3 ? '' : 'opacity-40'}`}>
              <span className={`text-[10px] font-bold tracking-[0.2em] ${currentStep >= 3 ? 'text-secondary' : ''}`}>03</span>
              <span className="text-[11px] font-bold tracking-widest uppercase">Investment</span>
            </div>
          </div>

          {/* Interactive Flow Container */}
          <div className="lg:col-span-9 glass-panel p-6 md:p-12 shadow-2xl relative overflow-hidden" 
               style={{ background: 'rgba(28, 27, 27, 0.7)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)' }}>
            <div className="space-y-10 md:space-y-12">
              {/* Step 1: Identification */}
              <section className="space-y-6">
                <label className="block text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">
                  Step 01 / Item Identification
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group relative bg-white/5 p-6 border-b border-white/10 hover:border-white/30 transition-all cursor-pointer">
                    <div className="flex flex-col items-center justify-center h-32 md:h-48 space-y-3 md:space-y-4 text-center">
                      <span className="material-symbols-outlined text-3xl md:text-4xl text-white/50">add_a_photo</span>
                      <span className="text-[9px] md:text-[11px] font-bold tracking-widest uppercase">Upload Image</span>
                    </div>
                    <input
                      className="absolute inset-0 opacity-0 cursor-pointer"
                      type="file"
                      accept="image/*"
                      onFocus={() => setCurrentStep(1)}
                    />
                  </div>
                  <div className="flex flex-col justify-end space-y-4">
                    <p className="text-xs md:text-sm font-light text-white/60 leading-relaxed italic">
                      "Have a link from StockX, Grailed, or an Instagram post? Paste it here."
                    </p>
                    <input
                      className="w-full bg-transparent border-b border-white/20 focus:border-white py-2 md:py-3 px-0 text-sm md:text-base text-white placeholder:text-white/30 transition-all outline-none"
                      placeholder="URL Link"
                      type="text"
                      onFocus={() => setCurrentStep(1)}
                    />
                  </div>
                </div>
              </section>

              {/* Step 2: Specs */}
              <section className="space-y-6">
                <label className="block text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">
                  Step 02 / Specifications
                </label>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <input
                      className="w-full bg-transparent border-b border-white/20 focus:border-white py-2 md:py-3 px-0 text-sm md:text-base text-white placeholder:text-white/30 transition-all outline-none"
                      placeholder="Size (EU/US/UK)"
                      type="text"
                      onFocus={() => setCurrentStep(2)}
                    />
                  </div>
                  <div className="flex-1">
                    <input
                      className="w-full bg-transparent border-b border-white/20 focus:border-white py-2 md:py-3 px-0 text-sm md:text-base text-white placeholder:text-white/30 transition-all outline-none"
                      placeholder="Colorway Preference"
                      type="text"
                      onFocus={() => setCurrentStep(2)}
                    />
                  </div>
                </div>
              </section>

              {/* Step 3: Budget Slider */}
              <section className="space-y-6 md:space-y-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-2">
                  <label className="block text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">
                    Step 03 / Budget Range
                  </label>
                  <span className="text-xl md:text-2xl font-black tracking-tighter">{formatBudget(budget)}</span>
                </div>
                <div className="relative py-4">
                  <input
                    className="w-full appearance-none bg-transparent cursor-pointer sourcing-range"
                    max="10000"
                    min="500"
                    step="100"
                    type="range"
                    value={budget}
                    onChange={(e) => {
                      setBudget(Number(e.target.value));
                      setCurrentStep(3);
                    }}
                  />
                  <div className="flex justify-between mt-4 text-[8px] md:text-[10px] font-bold text-white/40 uppercase tracking-widest">
                    <span>$500</span>
                    <span>$10k+</span>
                  </div>
                </div>
              </section>

              {/* CTA Action */}
              <div className="pt-8 md:pt-10 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <p className="text-[10px] md:text-[11px] font-light text-white/40 max-w-xs uppercase tracking-widest leading-relaxed">
                  Requests are typically fulfilled within 48-72 hours. Verification guaranteed.
                </p>
                <button className="bg-secondary text-white w-full md:w-auto px-10 py-4 md:py-5 font-black tracking-widest uppercase hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-3 text-sm md:text-base">
                  Initiate Search
                  <span className="material-symbols-outlined text-base md:text-lg">north_east</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
