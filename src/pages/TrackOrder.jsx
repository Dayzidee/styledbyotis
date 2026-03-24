import React from 'react';

export const TrackOrder = () => {
  return (
    <main className="min-h-screen pt-24 md:pt-32 pb-20 md:pb-24 relative overflow-hidden bg-background">
      {/* Background Map Visualization (Abstract) */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-grid-texture"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] md:w-[120%] h-[120%] rotate-12">
          {/* Data Visualization Lines */}
          <svg className="w-full h-full stroke-primary fill-none" viewBox="0 0 1000 600">
            <path d="M 100 400 Q 500 100 900 300" strokeDasharray="8 8" strokeWidth="1"></path>
            <circle cx="100" cy="400" fill="currentColor" r="4"></circle>
            <circle cx="900" cy="300" fill="currentColor" r="4"></circle>
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
        {/* Header Section */}
        <div className="mb-10 md:mb-16">
          <p className="font-mono text-[8px] md:text-[10px] tracking-[0.3em] text-secondary font-bold mb-2 uppercase">LOGISTICS MODULE_V4.0</p>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9] text-on-surface">Track<br/>Your Order</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Tracker Input & Details (Bento Style) */}
          <div className="lg:col-span-8 space-y-6 md:space-y-8">
            {/* Search Card */}
            <div className="bg-surface-container-lowest p-6 md:p-8 shadow-sm">
              <label className="font-mono text-[9px] md:text-[10px] text-on-surface-variant uppercase tracking-widest mb-4 block">Enter Reference Number</label>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-grow flex items-center border-b-2 border-primary pb-2">
                  <span className="font-mono text-base md:text-xl text-primary font-medium mr-2 md:mr-4 shrink-0">OTIS-REF:</span>
                  <input 
                    className="bg-transparent border-none p-0 text-base md:text-xl font-mono focus:ring-0 w-full text-on-surface" 
                    placeholder="XXXX-XXX-XXX" 
                    type="text" 
                    defaultValue="SB992-04X-LDN"
                  />
                </div>
                <button className="bg-secondary text-white font-bold tracking-widest uppercase px-8 md:px-12 py-3 md:py-4 hover:scale-95 transition-transform duration-200 text-xs md:text-base">
                  Verify Location
                </button>
              </div>
            </div>

            {/* Progress Visualization "The Bridge" */}
            <div className="bg-surface-container-low p-6 md:p-12 overflow-hidden relative">
              <div className="flex justify-between items-end mb-8 md:mb-12">
                <div>
                  <h3 className="font-mono text-[8px] md:text-[10px] text-on-surface-variant uppercase tracking-widest">Current Leg</h3>
                  <p className="text-lg md:text-2xl font-black tracking-tight text-on-surface">TRANS-ATLANTIC TRANSIT</p>
                </div>
                <div className="text-right">
                  <h3 className="font-mono text-[8px] md:text-[10px] text-on-surface-variant uppercase tracking-widest">Est. Arrival</h3>
                  <p className="text-lg md:text-2xl font-mono font-medium text-on-surface">14:04:2024</p>
                </div>
              </div>
              
              {/* The Bridge Visual */}
              <div className="relative py-10 md:py-12">
                {/* Dotted Line */}
                <div className="absolute top-1/2 left-0 w-full h-px border-t-2 border-dashed border-outline-variant/40 -translate-y-1/2"></div>
                {/* Origin Point */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="w-3 h-3 md:w-4 md:h-4 bg-primary rounded-none mb-2 md:mb-4"></div>
                  <span className="font-mono text-[7px] md:text-[9px] uppercase tracking-tighter text-on-surface-variant">LDN_HUB</span>
                </div>
                {/* Destination Point */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="w-3 h-3 md:w-4 md:h-4 bg-outline-variant rounded-none mb-2 md:mb-4"></div>
                  <span className="font-mono text-[7px] md:text-[9px] uppercase tracking-tighter text-on-surface-variant">LOS_TERM</span>
                </div>
                {/* The Moving Package */}
                <div className="absolute left-[65%] top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center">
                  <div className="bg-secondary p-2 md:p-3 shadow-xl mb-2 md:mb-4">
                    <span className="material-symbols-outlined text-white text-[16px] md:text-[20px]">package_2</span>
                  </div>
                  <span className="bg-secondary text-white font-mono text-[7px] md:text-[8px] px-1.5 md:px-2 py-0.5 tracking-widest uppercase">Moving</span>
                </div>
              </div>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              <div className="bg-surface-container p-6 md:p-8">
                <span className="font-mono text-[9px] md:text-[10px] text-on-surface-variant uppercase mb-4 block">Origin Point</span>
                <p className="text-lg md:text-xl font-black tracking-tight mb-1 text-on-surface">LONDON BOUTIQUE</p>
                <p className="text-xs md:text-sm font-light text-on-surface-variant leading-relaxed">Mayfair District Hub<br/>United Kingdom, SE1</p>
              </div>
              <div className="bg-surface-container p-6 md:p-8">
                <span className="font-mono text-[9px] md:text-[10px] text-on-surface-variant uppercase mb-4 block">Final Destination</span>
                <p className="text-lg md:text-xl font-black tracking-tight mb-1 text-on-surface">LAGOS PORT</p>
                <p className="text-xs md:text-sm font-light text-on-surface-variant leading-relaxed">Victoria Island Annex<br/>Lagos, Nigeria</p>
              </div>
            </div>
          </div>

          {/* Technical Manifest / Shipping Label Sidebar */}
          <div className="lg:col-span-4 space-y-6 md:space-y-8">
            <div className="bg-surface-container-highest border-l-4 border-secondary p-6 md:p-8">
              <div className="flex justify-between items-start mb-6 md:mb-8 text-on-surface">
                <div className="font-mono text-[9px] md:text-[10px] tracking-widest uppercase">Manifest_099</div>
                <span className="material-symbols-outlined text-[24px] md:text-[32px]">qr_code_2</span>
              </div>
              <div className="space-y-4 md:space-y-6">
                <div>
                  <label className="font-mono text-[8px] md:text-[9px] text-on-surface-variant uppercase mb-1 block">Carrier Service</label>
                  <p className="font-mono font-medium text-xs md:text-sm text-on-surface">GLOBAL_EXPEDITED_AIR</p>
                </div>
                <div>
                  <label className="font-mono text-[8px] md:text-[9px] text-on-surface-variant uppercase mb-1 block">Package Weight</label>
                  <p className="font-mono font-medium text-xs md:text-sm text-on-surface">2.45 KG / 5.4 LBS</p>
                </div>
                <div>
                  <label className="font-mono text-[8px] md:text-[9px] text-on-surface-variant uppercase mb-1 block">Authentication</label>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-tertiary text-xs md:text-sm">verified</span>
                    <p className="font-mono font-medium text-xs md:text-sm text-on-surface uppercase">STY_VER_BY_OTIS</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-outline-variant/20">
                <label className="font-mono text-[8px] md:text-[9px] text-on-surface-variant uppercase mb-4 block text-on-surface">History_Log</label>
                <div className="space-y-3 md:space-y-4">
                  <div className="flex gap-4">
                    <span className="font-mono text-[9px] md:text-[10px] text-secondary">09:12</span>
                    <p className="text-[10px] md:text-[11px] uppercase tracking-wide text-on-surface">Departed London Hub</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-mono text-[9px] md:text-[10px] text-on-surface-variant">07:45</span>
                    <p className="text-[10px] md:text-[11px] uppercase tracking-wide text-on-surface-variant">Cleared Security Scan</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-mono text-[9px] md:text-[10px] text-on-surface-variant">04:20</span>
                    <p className="text-[10px] md:text-[11px] uppercase tracking-wide text-on-surface-variant">Manifest Created</p>
                  </div>
                </div>
              </div>
              <button className="w-full mt-8 md:mt-10 border border-primary py-3 md:py-4 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.2em] hover:bg-primary hover:text-white transition-all text-on-surface">
                Download PDF Label
              </button>
            </div>

            {/* Support Card */}
            <div className="p-6 md:p-8 bg-black text-white">
              <h4 className="font-black text-base md:text-lg mb-2 uppercase">Need Assistance?</h4>
              <p className="text-[10px] md:text-[11px] text-neutral-400 font-light mb-6">Our logistics curators are available 24/7 for sourcing and tracking inquiries.</p>
              <a href="#" className="inline-flex items-center gap-2 text-secondary font-mono text-[9px] md:text-[10px] uppercase tracking-widest hover:translate-x-1 transition-transform">
                Open Concierge Chat
                <span className="material-symbols-outlined text-[12px] md:text-[14px]">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
