if ('serviceWorker' in navigator) {
  // Force root scope so assets resolved from the site root even when served from a sub-path like /portfolio
  navigator.serviceWorker
    .register('/serviceworker.js', { scope: '/' })
    .catch((error) => {
      console.error('Service worker registration failed', error);
    });
}
