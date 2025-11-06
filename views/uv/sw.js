importScripts('https://cdn.jsdelivr.net/gh/AerialiteLabs/Holy-Unblocker@6.9.3/views/uv/uv.bundle.js');
importScripts('https://cdn.jsdelivr.net/gh/AerialiteLabs/Holy-Unblocker@6.9.3/views/uv/uv.config.js');
importScripts(self['{{__uv$config}}'].sw || 'https://cdn.jsdelivr.net/gh/AerialiteLabs/Holy-Unblocker@6.9.3/views/uv/uv.sw.js');

const uv = new UVServiceWorker();

self.addEventListener('fetch', (event) => {
  event.respondWith(
    (async () => {
      if (uv.route(event)) return await uv.fetch(event);

      return await fetch(event.request);
    })()
  );
});
