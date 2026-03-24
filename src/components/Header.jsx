import React from 'react';
import { Link, NavLink } from 'react-router-dom';
export function Header() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl no-border tonal-shift bg-neutral-50 flex justify-between items-center px-6 md:px-8 py-4 max-w-[1920px] mx-auto border-b border-neutral-100/50">
      <div className="flex items-center gap-4">
        <Link to="/" className="text-xl md:text-2xl font-black tracking-tighter text-black uppercase transition-opacity hover:opacity-80">StyledByOtis</Link>
      </div>
      
      <div className="hidden md:flex items-center space-x-8">
        <NavLink to="/ProductDetail" className={({ isActive }) => isActive ? "text-primary font-bold border-b-2 border-primary pb-1 Inter font-light tracking-widest text-[11px] uppercase transition-all duration-300" : "text-neutral-500 hover:text-black transition-colors Inter font-light tracking-widest text-[11px] uppercase"}>Priority</NavLink>
        <NavLink to="/concierge" className={({ isActive }) => isActive ? "text-primary font-bold border-b-2 border-primary pb-1 Inter font-light tracking-widest text-[11px] uppercase transition-all duration-300" : "text-neutral-500 hover:text-black transition-colors Inter font-light tracking-widest text-[11px] uppercase"}>Concierge</NavLink>
        <NavLink to="/shop" className={({ isActive }) => isActive ? "text-primary font-bold border-b-2 border-primary pb-1 Inter font-light tracking-widest text-[11px] uppercase" : "text-neutral-500 hover:text-black transition-colors Inter font-light tracking-widest text-[11px] uppercase"}>Shop</NavLink>
        <NavLink to="/new-arrivals" className={({ isActive }) => isActive ? "text-primary font-bold border-b-2 border-primary pb-1 Inter font-light tracking-widest text-[11px] uppercase" : "text-neutral-500 hover:text-black transition-colors Inter font-light tracking-widest text-[11px] uppercase"}>New Arrivals</NavLink>
        <NavLink to="/track" className={({ isActive }) => isActive ? "text-primary font-bold border-b-2 border-primary pb-1 Inter font-light tracking-widest text-[11px] uppercase" : "text-neutral-500 hover:text-black transition-colors Inter font-light tracking-widest text-[11px] uppercase"}>Track Order</NavLink>
      </div>

      <div className="flex items-center space-x-4 md:space-x-6">
        <Link to="/request-a-find" className="material-symbols-outlined text-black hover:scale-110 transition-transform" title="Request a Find">search</Link>
        <Link to="/cart" className="material-symbols-outlined text-black hover:scale-110 transition-transform" title="Cart">shopping_bag</Link>
        <Link to="/profile" className="material-symbols-outlined text-black hover:scale-110 transition-transform" title="Profile">person</Link>
      </div>
    </nav>
  );
}

