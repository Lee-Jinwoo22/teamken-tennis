const CACHE_NAME = 'teamken-v3';

self.addEventListener('install', e => {
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// 캐시 없이 항상 네트워크에서 직접 불러오기
self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request));
});
