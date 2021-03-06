let CACHE_NAME = 'death-square-1';
let urlsToCache = [
  'index.html',
  'assets/images/tie-fighter.png',
  'assets/images/turret.png',
  'service-worker.js'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(function(cache) {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
    .then(function(response) {
      if (response) return response;
      return fetch(event.request);
    })
  );
});
