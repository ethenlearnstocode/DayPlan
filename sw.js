self.addEventListener('install', (event) => {
self.skipWaiting();
});

self.addEventListener('activate', (event) => {
event.waitUntil(self.clients.claim());
});

self.addEventListener('message', (event) => {
if (event.data && event.data.type === 'SCHEDULE_NOTIFICATION') {
const { title, body, delay } = event.data;

// Fallback timer inside Service Worker
setTimeout(() => {
self.registration.showNotification(title, {
body: body,
icon: 'icon.png',
badge: 'icon.png',
vibrate: [200, 100, 200],
tag: 'dayplan-alert',
renotify: true,
requireInteraction: true
});
}, delay || 1000);
}
});
