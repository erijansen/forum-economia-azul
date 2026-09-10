const CACHE = "forum-v12-responsive-20260909";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./app-icon.png",
  "./assets/programacao_forum_15SET.webp",
  "./assets/palestrantes/alfredo.webp",
  "./assets/palestrantes/armando.webp",
  "./assets/palestrantes/cardoso.webp",
  "./assets/palestrantes/diogo.webp",
  "./assets/palestrantes/haenell.webp",
  "./assets/palestrantes/oberg.webp",
  "./assets/palestrantes/rhaldney.webp",
  "./assets/palestrantes/silva_gomes.webp",
  "./assets/autoridades/Alte_Esq_Andre.png",
  "./assets/autoridades/Alte_Esq_RM1_Borges.png",
  "./assets/autoridades/Alte_Esq_RM1_Oberg.png",
  "./assets/autoridades/CAlte_Bessa.png",
  "./assets/autoridades/CAlte_Renato_Melo.png",
  "./assets/autoridades/CAlte_Robledo.png",
  "./assets/autoridades/CMG_IM_Marcelo_Bezerra.png",
  "./assets/autoridades/VAlte_Silva_Gomes.png"
];
self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});
self.addEventListener("fetch", event => {
  if(event.request.method !== "GET") return;
  event.respondWith(
    fetch(event.request, {cache:"no-store"}).then(response => {
      const copy=response.clone();
      caches.open(CACHE).then(cache => cache.put(event.request, copy));
      return response;
    }).catch(() => caches.match(event.request).then(r => r || caches.match("./index.html")))
  );
});
