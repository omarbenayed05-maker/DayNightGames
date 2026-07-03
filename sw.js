// Minimal service worker — required by Chrome/Edge for a PWA to be
// considered "installable" at all, even without offline support.
const CACHE_NAME = 'daynight-v1';

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
