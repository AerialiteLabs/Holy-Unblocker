// This file overwrites the stock UV config.js

self['{{__uv$config}}'] = {
  prefix: '{{route}}{{/uv/service/}}',
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: 'https://cdn.jsdelivr.net/gh/AerialiteLabs/Holy-Unblocker@6.9.3/views/dist/uv/uv.handler.js',
  client: 'https://cdn.jsdelivr.net/gh/AerialiteLabs/Holy-Unblocker@6.9.3/views/dist/uv/uv.client.js',
  bundle: 'https://cdn.jsdelivr.net/gh/AerialiteLabs/Holy-Unblocker@6.9.3/views/dist/uv/uv.bundle.js',
  config: 'https://cdn.jsdelivr.net/gh/AerialiteLabs/Holy-Unblocker@6.9.3/views/dist/uv/uv.config.js',
  sw: 'https://cdn.jsdelivr.net/gh/AerialiteLabs/Holy-Unblocker@6.9.3/views/dist/uv/uv.sw.js',
};
