import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const isFirefox = typeof navigator !== 'undefined' && navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (isFirefox) {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 50); // Delay to ensure Firefox renders the page before scrolling
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
