import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

export function Cart() {
  // Mock cart items for UI demonstration
  const cartItems = [
    { ...products[0], quantity: 1 },
    { ...products[2], quantity: 1 },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 5000; // Flat sourcing/shipping fee

  return (
    <main className="pt-24 md:pt-32 min-h-screen bg-background pb-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8">
        <header className="mb-12 md:mb-20">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary mb-4 block">Secured Archive</span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none">Your <br/> Selection.</h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Cart Items */}
          <div className="lg:col-span-8 space-y-12">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div key={item.id} className="flex flex-col md:flex-row gap-8 pb-12 border-b border-black/5 group">
                  <div className="w-full md:w-48 aspect-square bg-surface-container-low overflow-hidden">
                    <img 
                      src={item.images[0]} 
                      alt={item.title} 
                      className="w-full h-full object-cover grayscale md:group-hover:grayscale-0 transition-all duration-700" 
                    />
                  </div>
                  <div className="flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight">{item.title}</h3>
                        <button className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant hover:text-secondary transition-colors underline">Remove</button>
                      </div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant/60">{item.category} • {item.source}</p>
                    </div>
                    
                    <div className="mt-8 flex justify-between items-end">
                      <div className="flex items-center border border-black/10">
                        <button className="px-4 py-2 hover:bg-black hover:text-white transition-colors">-</button>
                        <span className="px-4 py-2 font-bold text-sm">{item.quantity}</span>
                        <button className="px-4 py-2 hover:bg-black hover:text-white transition-colors">+</button>
                      </div>
                      <span className="text-xl font-bold">₦{item.price.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="py-20 text-center">
                <p className="text-xl font-light text-on-surface-variant mb-8 uppercase tracking-widest">Your archive is empty.</p>
                <Link to="/shop" className="bg-primary text-white px-10 py-4 font-black text-xs uppercase tracking-[0.3em] hover:bg-secondary transition-colors">Start Sourcing</Link>
              </div>
            )}
          </div>

          {/* Summary */}
          <div className="lg:col-span-4 mt-12 lg:mt-0">
            <div className="glass-panel p-8 md:p-10 sticky top-32 border-none">
              <h2 className="text-2xl font-black uppercase tracking-tighter mb-8">Order Summary</h2>
              
              <div className="space-y-6 mb-10">
                <div className="flex justify-between items-center text-sm font-light">
                  <span className="uppercase tracking-widest text-[10px] font-bold">Subtotal</span>
                  <span className="font-bold">₦{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-sm font-light">
                  <span className="uppercase tracking-widest text-[10px] font-bold">Global Sourcing Fee</span>
                  <span className="font-bold">₦{shipping.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-sm font-light">
                  <span className="uppercase tracking-widest text-[10px] font-bold">Estimated Import Duties</span>
                  <span className="font-bold uppercase text-[10px]">Calculated at Checkout</span>
                </div>
                <div className="pt-6 border-t border-black/5 flex justify-between items-center">
                  <span className="text-lg font-black uppercase tracking-tighter">Total</span>
                  <span className="text-2xl font-black text-secondary">₦{(subtotal + shipping).toLocaleString()}</span>
                </div>
              </div>

              <button className="w-full bg-secondary text-white py-5 font-black text-sm tracking-[0.3em] uppercase hover:bg-black transition-all active:scale-[0.98] mb-6">
                Proceed to Checkout
              </button>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-on-surface-variant/60 text-[10px] uppercase font-bold tracking-widest">
                  <span className="material-symbols-outlined text-sm">verified_user</span>
                  Otis Authenticity Guaranteed
                </div>
                <div className="flex items-center gap-3 text-on-surface-variant/60 text-[10px] uppercase font-bold tracking-widest">
                  <span className="material-symbols-outlined text-sm">public</span>
                  Global Bridge Logistics Enabled
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
