import React from 'react';
import { Link } from 'react-router-dom';

export function Profile() {
  const user = {
    name: "Dayzidee",
    email: "dayzidee@otis.global",
    tier: "Elite Archive Member",
    memberSince: "March 2024",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDt5C37NP6ED4mIgqYXd2jDoF0ao_Zbsxxi0X3LR6ozSK-__WVMN6bRdoRQSmzYpxrd-KLOTeWdyeKj8I0cOLfxLXBPVjjLjIk3a_GjJomcDTMB-soDMfairNBHdrzuxhrqbGhpJOObZYUT-rN0pm7aHMiLo1hNrzWKWYcR0gR35W67SrKTQFDTqBqhiy7SDD_0NrpGtW3rk9qt2V_VsHfHitUMTdXUlfUAQRy5ZOxOtlfqd5CsTGAbrUCIomc2t7-tl9rlYmG1TBVq"
  };

  const orders = [
    { id: "OT-99421", date: "24.03.2024", status: "In Transit (Paris Hub)", item: "Vintage Suede Artisan Jacket", price: "$3,450" },
    { id: "OT-99405", date: "12.03.2024", status: "Delivered", item: "Air Max 'Volts' Retro", price: "$420" }
  ];

  return (
    <main className="pt-24 md:pt-32 min-h-screen bg-background pb-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8">
        <header className="mb-12 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary mb-4 block">Archive Member</span>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85]">
              Elite <br/> Profile.
            </h1>
          </div>
          <div className="flex items-center gap-6 glass-panel p-6 border-none">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-secondary grayscale overflow-hidden">
                <img src={user.avatar} alt="Avatar" className="w-full h-full object-cover grayscale mix-blend-overlay brightness-75" />
            </div>
            <div>
              <p className="text-xl font-black uppercase tracking-tighter">{user.name}</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/60">{user.tier}</p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Info */}
          <div className="lg:col-span-8">
            <h2 className="text-2xl font-black uppercase tracking-tighter mb-10 border-b border-black/5 pb-6">Sourcing History</h2>
            <div className="space-y-6">
              {orders.map((order) => (
                <div key={order.id} className="glass-panel p-6 md:p-8 border-none hover:bg-surface-container-high transition-colors group cursor-pointer">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex gap-6 items-center">
                      <span className="text-[10px] font-black uppercase tracking-widest text-secondary">{order.id}</span>
                      <div>
                        <h3 className="text-lg font-bold uppercase tracking-tight">{order.item}</h3>
                        <p className="text-[10px] font-bold uppercase text-on-surface-variant/40">{order.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between md:justify-end gap-12">
                      <div className="text-right">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">Status</p>
                        <p className="text-xs font-black uppercase text-secondary">{order.status}</p>
                      </div>
                      <Link to="/track" className="material-symbols-outlined text-on-surface-variant/40 group-hover:text-black transition-colors">monitoring</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20">
              <h2 className="text-2xl font-black uppercase tracking-tighter mb-10 border-b border-black/5 pb-6">Active Finds</h2>
              <div className="bg-surface-container-low p-10 text-center border border-black/5">
                <p className="text-sm font-light text-on-surface-variant uppercase tracking-widest mb-6 italic">No active sourcing requests at the moment.</p>
                <Link to="/request-a-find" className="border-b-2 border-black pb-1 text-black font-black uppercase text-[10px] tracking-widest hover:text-secondary hover:border-secondary transition-all">Submit A New Find</Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 mt-12 lg:mt-0 space-y-8">
            <div className="bg-primary text-white p-10">
              <h3 className="text-lg font-black uppercase tracking-widest mb-6">Concierge Details</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/40 mb-1">Member ID</p>
                  <p className="text-sm font-bold tracking-widest">OT-G-88120</p>
                </div>
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/40 mb-1">Hub Preference</p>
                  <p className="text-sm font-bold tracking-widest">London, UK (LDN)</p>
                </div>
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/40 mb-1">Membership</p>
                  <p className="text-sm font-bold tracking-widest">Yearly Archive Pass</p>
                </div>
              </div>
              <button className="w-full mt-10 border border-white/20 py-4 text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                Access Perks
              </button>
            </div>

            <div className="glass-panel p-10 border-none">
              <h3 className="text-lg font-black uppercase tracking-widest mb-6">Security</h3>
              <button className="w-full text-left py-3 border-b border-black/5 text-[10px] font-bold uppercase tracking-widest hover:pl-4 transition-all">Manage Addresses</button>
              <button className="w-full text-left py-3 border-b border-black/5 text-[10px] font-bold uppercase tracking-widest hover:pl-4 transition-all">Payment Methods</button>
              <button className="w-full text-left py-3 text-[10px] font-bold uppercase tracking-widest hover:pl-4 transition-all text-secondary">Disconnect Portal</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
