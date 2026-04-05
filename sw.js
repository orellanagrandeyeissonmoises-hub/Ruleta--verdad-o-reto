const CACHE = 'ruleta-v1';
const ARCHIVOS = [
  './index.html',
  './preguntas-suave.js',
  './preguntas-atrevido.js',
  './preguntas-adulto.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ARCHIVOS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
