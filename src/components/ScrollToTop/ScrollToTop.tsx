import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Resets the scroll position to the top on every route change, so navigating
// to a new page always starts at the top instead of keeping the previous
// page's scroll position (which left visitors partway down the new page).
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
