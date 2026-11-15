// Alte Web-Version unter /app/: räumt sich selbst auf, die App liegt jetzt unter /.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',async()=>{const ks=await caches.keys();await Promise.all(ks.map(k=>caches.delete(k)));await self.registration.unregister();const cs=await self.clients.matchAll();cs.forEach(c=>c.navigate('/'));});
