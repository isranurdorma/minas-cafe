/* ===========================
   SERVICE WORKER - MINAS KAFE
   =========================== */

const CACHE_NAME = 'minas-kafe-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/assets/css/style.css',
    '/assets/css/responsive.css',
    '/assets/js/main.js',
    '/assets/js/i18n.js',
    '/assets/js/theme.js',
    '/assets/favicon.svg',
    '/manifest.json'
];

// Install event
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(urlsToCache);
        })
    );
});

// Activate event
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Fetch event - Network first, fallback to cache
self.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request)
            .then(response => {
                // Clone the response
                const responseToCache = response.clone();

                caches.open(CACHE_NAME).then(cache => {
                    cache.put(event.request, responseToCache);
                });

                return response;
            })
            .catch(() => {
                return caches.match(event.request).then(response => {
                    return response || new Response('Offline - sayfa kullanılamıyor', {
                        status: 503,
                        statusText: 'Service Unavailable',
                        headers: new Headers({
                            'Content-Type': 'text/plain'
                        })
                    });
                });
            })
    );
});
