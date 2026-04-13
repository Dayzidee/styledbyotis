export function Footer() {
  return (
    <footer className="bg-black text-white w-full py-20 px-8">
      <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 items-start">
        <div>
          <div className="text-2xl font-black text-white mb-6">StyledByOtis</div>
          <p className="text-neutral-500 text-xs uppercase tracking-widest font-light leading-loose">
            © 2026 StyledByOtis. <br />Urban Luxury Sourcing.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <a className="text-neutral-500 hover:text-red-600 transition-colors text-[11px] uppercase tracking-widest font-light" href="#">Privacy Policy</a>
          <a className="text-neutral-500 hover:text-red-600 transition-colors text-[11px] uppercase tracking-widest font-light" href="#">Terms of Service</a>
          <a className="text-neutral-500 hover:text-red-600 transition-colors text-[11px] uppercase tracking-widest font-light" href="#">Returns &amp; Shipping</a>
        </div>
        <div className="md:text-right">
          <p className="text-[11px] uppercase tracking-widest font-light text-neutral-500 mb-6">Direct Inquiries</p>
          <a className="group inline-flex items-center gap-4" href="https://wa.me/2348103957268">
            <span className="text-lg md:text-2xl font-bold group-hover:text-secondary transition-colors transition-opacity opacity-80 hover:opacity-100">Contact (+234) 810 395 7268</span>
            <div className="w-12 h-12 bg-white text-black flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all">
              <span className="material-symbols-outlined">chat</span>
            </div>
          </a>
        </div>
      </div>
      <div className="mt-20 pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center text-[10px] text-neutral-700 tracking-[0.2em] uppercase">
        <p>London • New York • Lagos</p>
        <p>Authentication Guaranteed</p>
      </div>
    </footer>
  );
}
