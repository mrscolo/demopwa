const version = "v1.0.0";
const STATIC_CACHE_NAME = "static-v1";
const STATIC_RESOURCES = []; //TODO: add assets

self.addEventListener("install", e => {
  console.log("SW Install");
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  clearCache(STATIC_CACHE_NAME);
  console.log("SW activate");
});

const clearCache = cacheName => {
  const respuesta = caches.keys().then(keys => {
    keys.forEach(key => {
      if (key == cacheName) {
        return caches.delete(key);
      }
    });
  });
};

self.addEventListener("fetch", e => {
  if (
    e.request.url.includes("/api/key") ||
    e.request.url.includes("/api/subscribe") ||
    e.request.url.includes("/api/push")
  )
    return fetch(e.request);
  const res = caches.match(e.request).then(res => {
    if (res) return res;
    return fetch(e.request).then(resp => {
      if (
        !e.request.url.includes("chrome-extension") &&
        !e.request.url.includes("sockjs-node") &&
        !e.request.url.includes("manifest")
      )
        caches.open(STATIC_CACHE_NAME).then(cache => {
          cache.put(e.request, resp);
        });
      return resp.clone();
    });
  });
  e.respondWith(res);
});

self.addEventListener("push", e => {
  //   console.log("Notification!", e.data.text, e);
  const title = e.data.text();
  const options = {};

  e.waitUntil(self.registration.showNotification(title, options));
});
