import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop Component
 * Ensures that the application starts its rendering from the top of the viewport
 * whenever a new route is navigated to.
 */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Force manual scroll restoration to prevent browser from "remembering" 
    // scroll position on SPA navigation.
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Immediate scroll to top
    window.scrollTo(0, 0);
    
    // Safety fallback for some mobile browsers or containers
    document.documentElement.scrollTo(0, 0);
    document.body.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
