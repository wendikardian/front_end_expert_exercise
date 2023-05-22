import CacheHelper from './utils/cache-helper';

const assetsToCache = [
  './',
  './icons/maskable_icon.png',
  './icons/maskable_icon_x48.png',
  './icons/maskable_icon_x72.png',
  './icons/maskable_icon_x96.png',
  './icons/maskable_icon_x128.png',
  './icons/maskable_icon_x192.png',
  './icons/maskable_icon_x384.png',
  './icons/maskable_icon_x512.png',
  './index.html',
  './favicon.png',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',
];

/* eslint-disable no-unused-vars */
self.addEventListener('install', (event) => {
  console.log('Installing Service Worker...');
  event.waitUntill(CacheHelper.cachingAppShell([...assetsToCache]));
  // TODO : Caching App Shell Resource
});

self.addEventListener('activate', (event) => {
  console.log('Activating Service Worker...');
  event.waitUntil(CacheHelper.deleteOldCache());
  // TODO : Delete Old Cache
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
