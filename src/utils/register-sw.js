const registerSW = async () => {
  if ('serviceWorker' in navigator) {
    try {
      await navigator.serviceWorker.register('./service-worker.js');
    } catch (error) {
      // TODO handle service worker failed registration
    }
    return;
  }
  // TODO handle if service worker not supported
  // eslint-disable-next-line no-console
  console.log('Service Worker not Supported');
};

export default registerSW;
