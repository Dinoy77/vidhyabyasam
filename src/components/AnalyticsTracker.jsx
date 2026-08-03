import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * AnalyticsTracker
 *
 * Fires a Google Analytics (GA4) page_view event every time the route
 * changes. Necessary because Vidyabhyasam is a single-page app — the
 * base gtag.js snippet in index.html only fires once on initial load,
 * so without this, GA would only ever see the very first page a visitor
 * lands on, never their navigation to /keam-predictor, articles, etc.
 *
 * Renders nothing — just watches the route and reports it.
 * Mount this once, near the top of App.js, inside <BrowserRouter>.
 */
export default function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag !== 'function') return; // gtag not loaded yet / blocked

    window.gtag('event', 'page_view', {
      page_path: location.pathname + location.search,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [location]);

  return null;
}