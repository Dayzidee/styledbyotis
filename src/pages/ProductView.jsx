import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { SafeImage } from '../components/SafeImage';

export function ProductView() {
  const { id } = useParams();

  // Find the product based on ID, fallback to the first one or a mock if not found
  const product = products.find(p => p.id === id) || products[0];
  const [added, setAdded] = React.useState(false);

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 3000);
  };

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h2 className="text-2xl font-black uppercase">Product Not Found</h2>
        <Link to="/shop" className="text-secondary underline mt-4 inline-block">Back to Shop</Link>
      </div>
    );
  }

  return (
    <main className="relative pt-24 md:pt-32 min-h-screen bg-background text-on-surface scroll-smooth pb-20 md:pb-0">
      {/* Success Toast */}
      {added && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] bg-black text-white px-8 py-4 rounded-full font-black text-[10px] uppercase tracking-[0.3em] shadow-2xl animate-bounce">
          Added to your archive. <Link to="/cart" className="text-secondary underline ml-2">View Cart</Link>
        </div>
      )}
      
      {/* Subtle Asphalt Texture Overlay */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-0 bg-[url('https://www.transparenttextures.com/patterns/asphalt-dark.png')]"></div>
      
      <div className="max-w-[1920px] mx-auto px-4 md:px-8 py-6 md:py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Product Gallery (Asymmetric Layout) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="relative aspect-[4/5] overflow-hidden bg-surface-container-low group">
              <SafeImage 
                alt={product.title} 
                className="transition-transform duration-1000 group-hover:scale-110"
                src={product.images[0]}
              />
              <div className="absolute top-6 left-6 bg-black text-white px-4 py-1 text-[10px] font-bold tracking-[0.2em] uppercase">
                Authenticated
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 md:gap-8">
              <div className="aspect-square bg-surface-container-low overflow-hidden group">
                <SafeImage 
                  alt="Detail 1" 
                  className="hover:scale-105 transition-transform duration-700"
                  src={product.images[1]}
                />
              </div>
              <div className="aspect-square bg-surface-container-low overflow-hidden group relative lg:top-12">
                <SafeImage 
                  alt="Detail 2" 
                  className="hover:scale-105 transition-transform duration-700"
                  src={product.images[2]}
                />
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:col-span-5 flex flex-col pt-4 lg:sticky lg:top-32 h-fit">
            <div className="mb-2">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-secondary">{product.category}</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] uppercase mb-6 drop-shadow-sm">
              {product.title.split(' ').map((word, i) => (
                <React.Fragment key={i}>
                  {word} {i === 1 && <br className="hidden md:block" />}
                </React.Fragment>
              ))}
            </h1>
            
            <div className="flex items-baseline gap-4 mb-10">
              <span className="text-2xl md:text-3xl font-bold">₦{product.price.toLocaleString()}</span>
              <span className="text-on-surface-variant/40 text-sm line-through font-light">₦{product.originalPrice.toLocaleString()}</span>
            </div>

            {/* CTA Section */}
            <div className="space-y-4 mb-12">
              <button 
                onClick={handleAddToCart}
                className="w-full bg-secondary text-white py-5 font-bold text-base md:text-lg tracking-widest hover:bg-black transition-all flex justify-center items-center gap-3 active:scale-[0.98] group"
              >
                ADD TO CART
                <span className="material-symbols-outlined text-sm md:text-base group-hover:translate-x-1 transition-transform">shopping_cart</span>
              </button>
              <button 
                onClick={handleAddToCart}
                className="w-full border-2 border-black text-black py-5 font-bold text-base md:text-lg tracking-widest hover:bg-black hover:text-white transition-all active:scale-[0.98]"
              >
                SOURCE IN MY SIZE
              </button>
            </div>

            {/* Glassmorphism Details Card */}
            <div className="glass-panel p-6 md:p-8 mb-8 space-y-6 border-none">
              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-3 text-secondary">The Provenance</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed font-light">
                  {product.description} Condition: <span className="text-on-surface font-bold">{product.condition}</span>.
                </p>
              </div>
              <div className="border-t border-black/5 pt-6">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-3 text-secondary">Authenticity Guaranteed</h3>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  <p className="text-[11px] font-medium tracking-wide">Multi-point physical inspection completed by Otis curators.</p>
                </div>
              </div>
            </div>

            {/* Global Bridge Module */}
            <div className="bg-surface-container-highest/30 p-6 md:p-8 space-y-6 border border-black/5">
              <div className="flex justify-between items-center">
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em]">Global Bridge Delivery</h3>
                <span className="material-symbols-outlined text-sm">public</span>
              </div>
              <div className="flex justify-between items-end">
                <div className="space-y-1">
                  <p className="text-[10px] uppercase font-bold text-on-surface-variant/60">Origin</p>
                  <p className="text-base md:text-lg font-bold">{product.source}</p>
                </div>
                <div className="flex-grow mx-4 h-px bg-black/10 relative bottom-3">
                  <div className="absolute right-0 -top-1 w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                </div>
                <div className="space-y-1 text-right">
                  <p className="text-[10px] uppercase font-bold text-on-surface-variant/60">Destination</p>
                  <p className="text-base md:text-lg font-bold">{product.destination}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Curation Philosophy Section */}
        <section className="mt-32 md:mt-48 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center border-t border-black/5 pt-24">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none">The Otis <br/> Curation Philosophy</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed max-w-md font-light mb-10">
              We don't just find clothes; we rescue artifacts of style. Every piece in our 'Elite Court' selection is vetted for cultural significance, material integrity, and timeless relevance.
            </p>
            <Link to="/shop" className="inline-block border-b-2 border-secondary pb-1 text-secondary font-bold uppercase text-[10px] tracking-widest hover:text-black hover:border-black transition-all">Explore the Archive</Link>
          </div>
          <div className="order-1 md:order-2 aspect-video bg-surface-container-low overflow-hidden group">
            <SafeImage 
              alt="Curation Process" 
              className="grayscale contrast-125 transition-transform duration-1000 group-hover:scale-105"
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200"
            />
          </div>
        </section>
      </div>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 w-full p-4 bg-white/80 backdrop-blur-xl border-t border-black/5 z-50">
        <button className="w-full bg-secondary text-white py-4 font-black uppercase tracking-[0.2em] text-xs active:scale-[0.98] transition-transform shadow-lg shadow-secondary/20">
          Source In My Size
        </button>
      </div>
    </main>
  );
}
