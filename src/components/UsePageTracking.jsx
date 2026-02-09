// src/usePageTracking.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    // Google Analytics
    if (window.gtag) {
      window.gtag('config', 'G-JMPMJPV0CW', {
        page_path: location.pathname,
      });
    }
    // Meta Pixel
    if (window.fbq) {
      window.fbq('track', 'PageView');
    }
  }, [location]);
}
