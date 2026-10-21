"use strict";
/* ===== Service Worker — JAKINA (PWA sin conexión) =====
   Copia de la estrategia de lab_iesmdb (editables_lab_iesmdb/web/sw.js):
   · el código propio (html, js, css, json, manifest) va RED PRIMERO, revalidando, y sin conexión sale de la caché;
   · imágenes (las figuras SVG) van stale-while-revalidate.
   ⚠ Sube VERSION en cada publicación para invalidar la caché antigua. */
const VERSION = "v014-2026-10-21";
const SITE = (new URL(self.registration.scope).pathname).replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "") || "root";
const PREFIX = "jakina-" + SITE + "-";
const CACHE = PREFIX + VERSION;
const CORE = ["./", "./index.html", "./manifest.webmanifest"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(ks => Promise.all(
      ks.filter(k => k.startsWith(PREFIX) && k !== CACHE).map(k => caches.delete(k))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  if (req.mode === "navigate") {
    e.respondWith(fetch(req).catch(() => caches.match("./index.html")));
    return;
  }
  const url = new URL(req.url);
  if (url.origin === self.location.origin && /\.(?:js|css|html?|json|webmanifest)$/i.test(url.pathname)) {
    e.respondWith(
      fetch(req, { cache: "no-cache" }).then(res => {
        if (res && res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
        return res;
      }).catch(() => caches.match(req))
    );
    return;
  }
  e.respondWith(
    caches.open(CACHE).then(cache => cache.match(req).then(hit => {
      const net = fetch(req).then(res => {
        if (res && res.ok) cache.put(req, res.clone());
        return res;
      }).catch(() => hit);
      return hit || net;
    }))
  );
});
