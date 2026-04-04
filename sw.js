const CACHE = 'juegos-v1';
const ARCHIVOS = [
  '/index_ruleta.html',
  '/index_botella.html',
  '/index_impostor.html',
  '/preguntas-suave.js',
  '/preguntas-atrevido.js',
  '/preguntas-adulto.js',
  '/sugerencias_botella.js',
  '/logica_sugerencias.js',
  '/categorias.js',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ARCHIVOS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
