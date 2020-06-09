'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "50940c6ad540bbbb8825bb3aa3348728",
"assets/assets/note1.wav": "a2f02d4e6e9d225ebf4e554c0fc9b36b",
"assets/assets/note2.wav": "1760f9313cae8fa1564e9091c58cdcf4",
"assets/FontManifest.json": "43c3152e4897f03d166f7d403e04dd94",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/fonts/ShadowsIntoLight-Regular.ttf": "47c22e0adf5e3659bb254daabc61392f",
"assets/images/harshit1.jpg": "f476ea06f42602fb1786900568c88816",
"assets/images/harshit2.jpg": "36848c563dab80de4905249bbcc6815e",
"assets/LICENSE": "a27da88fe8a29ba4131107062e2c983f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "1f203dd2b0fbcef8d6329b5ed9ec3f5e",
"/": "1f203dd2b0fbcef8d6329b5ed9ec3f5e",
"main.dart.js": "8c435fa4fe5b4d3dc4cff18708543f7a",
"manifest.json": "c5fa32650300d9b8ab8f51aeeca7c7d4"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
