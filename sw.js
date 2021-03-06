importScripts('workbox-sw.prod.v2.1.2.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "assets/icon/favicon.ico",
    "revision": "d2f619d796fbe8bed6200da2691aa5b6"
  },
  {
    "url": "assets/icon/icon.png",
    "revision": "b96ad6e1e0b755c8cd45e6aec40bca25"
  },
  {
    "url": "build/app.js",
    "revision": "ccb477bed9989a2e6edf03a97cd440ba"
  },
  {
    "url": "build/app/app.0bauncqr.js",
    "revision": "3aa6ebef997a97148cbd54b9a09963e2"
  },
  {
    "url": "build/app/app.annwd7nj.js",
    "revision": "e3bf2fc0f83fbb4142b9a1995e517394"
  },
  {
    "url": "build/app/app.global.js",
    "revision": "48bf709aad33b0f1e2b6f3f55316fa1f"
  },
  {
    "url": "build/app/app.nkkj4nm4.js",
    "revision": "b0377f892e81d9f694671f0290af6160"
  },
  {
    "url": "build/app/app.registry.json",
    "revision": "d5c8411351a7d1fa4f8371c14b30cb19"
  },
  {
    "url": "build/app/cv7cbtbi.js",
    "revision": "b425d7fba0b1c25730cf13a34af6b556"
  },
  {
    "url": "build/app/k6eb34or.js",
    "revision": "a55afe88cf09d0d8173c7379bcd50983"
  },
  {
    "url": "build/app/kv5fckzx.js",
    "revision": "7203ac34c4ea63f205611c3020d00eb3"
  },
  {
    "url": "build/app/n0ws9uff.js",
    "revision": "059d278dbe6568aa26cd7b4564fde5a8"
  },
  {
    "url": "build/app/nlmqjyxt.js",
    "revision": "cb0156a0c38d87f58d8be8a7b1a3e797"
  },
  {
    "url": "build/app/orsdhirh.js",
    "revision": "7438a81d2db06c201be7ba516d9071ca"
  },
  {
    "url": "build/app/pbssls7g.js",
    "revision": "bceea4fa858c798bb6fa201033865b51"
  },
  {
    "url": "build/app/xyfissap.js",
    "revision": "25d03519f99399851b14fdc57d211da6"
  },
  {
    "url": "host.config.json",
    "revision": "a55debf2f702435ca803bbec800f2b9c"
  },
  {
    "url": "index.html",
    "revision": "8dd35e1701417b7a345db6e701bd7b5d"
  },
  {
    "url": "manifest.json",
    "revision": "e33a9f39d3f8b2c46d13156237b4e0ae"
  },
  {
    "url": "profile/stencil/index.html",
    "revision": "471f4f5630c244842a776474cbeef70b"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
