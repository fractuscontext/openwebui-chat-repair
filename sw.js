const CACHE_NAME = 'chat-repair-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './assets/icon-192.png',
];

// Cache the files on install
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

// Serve files from the cache when offline
self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((response) => response || fetch(e.request)));
});