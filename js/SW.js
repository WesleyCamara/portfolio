if ('serviceWorker' in navigator) {
  console.log('ServiceWorker é suportado, vamos usar!');
} else {
  console.log('ServiceWorker não é suportado.');
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('sw.js')
    .then((reg) => console.info('registered sw', reg))
    .catch((err) => console.error('error registering sw', err));
}

// Cache on install
this.addEventListener('install', (event) => {
  this.skipWaiting();

  event.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      return cache.addAll(filesToCache);
    }),
  );
});

// Clear cache on activate
this.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => cacheName.startsWith('willian-justen-'))
          .filter((cacheName) => cacheName !== staticCacheName)
          .map((cacheName) => caches.delete(cacheName)),
      );
    }),
  );
});

// Serve from Cache
this.addEventListener('fetch', (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
      .catch(() => {
        return caches.match('/offline/index.html');
      }),
  );
});

console.log('ok');
