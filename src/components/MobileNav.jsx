import React from 'react';
import { NavLink } from 'react-router-dom';

export function MobileNav() {
  const tabs = [
    { name: 'Priority', path: '/priority', icon: 'stars' },
    { name: 'Concierge', path: '/concierge', icon: 'support_agent' },
    { name: 'Shop', path: '/shop', icon: 'shopping_bag' },
    { name: 'Arrivals', path: '/new-arrivals', icon: 'new_releases' },
    { name: 'Track', path: '/track', icon: 'local_shipping' },
  ];

  return (
    <nav className="fixed md:hidden bottom-0 left-0 right-0 w-full flex justify-around items-center h-20 px-4 pb-safe bg-white shadow-[0_-4px_20px_0_rgba(0,0,0,0.05)] z-[100] border-t border-neutral-100">
      {tabs.map((tab) => (
        <NavLink
          key={tab.name}
          to={tab.path}
          className={({ isActive }) => 
            `flex flex-col items-center justify-center transition-all duration-300 ${
              isActive 
                ? 'text-[#bb001e] scale-110' 
                : 'text-zinc-400 hover:text-black'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <span 
                className="material-symbols-outlined mb-1"
                style={{ fontVariationSettings: `'FILL' ${isActive ? 1 : 0}` }}
              >
                {tab.icon}
              </span>
              <span className="Inter font-bold text-[10px] uppercase tracking-widest leading-none">
                {tab.name}
              </span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
}
