const CACHE_NAME = 'afussi-v2';
const ASSETS = [
  '/',
  '/index.html',
  '/brain.js',
  '/manifest.json',
  '/votre-photo.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
