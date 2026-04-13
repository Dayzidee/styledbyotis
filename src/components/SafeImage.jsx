import React, { useState } from 'react';

/**
 * SafeImage Component
 * A robust image wrapper that displays a stylized icon placeholder if the image fails to load.
 * Now with explicit loading state and consistent fallback dimensions.
 */
export function SafeImage({ src, alt, className, ...props }) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const Fallback = () => (
    <div className={`w-full h-full bg-surface-container-low flex flex-col items-center justify-center p-4 border border-black/5 ${className || ''}`}>
      <svg className="w-10 h-10 text-black/10 mb-2 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black/20">Archive Asset</span>
    </div>
  );

  return (
    <div className={`relative w-full h-full overflow-hidden bg-surface-container-low ${className || ''}`}>
      {isLoading && !hasError && (
        <div className="absolute inset-0 bg-surface-container-low animate-pulse z-10" />
      )}
      {hasError || !src ? (
        <Fallback />
      ) : (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          onLoad={() => setIsLoading(false)}
          onError={() => setHasError(true)}
          {...props}
        />
      )}
    </div>
  );
}
