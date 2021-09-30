import { configureServiceWorker } from 'react-storefront/sw'
import { precacheAndRoute } from "workbox-precaching"
import { Prefetcher } from '@layer0/prefetch/sw'


precacheAndRoute(self.__WB_MANIFEST)
const maxAgeSeconds = 60 * 60 // 1 hour


configureServiceWorker({
  api: [
    { path: '/api/p/[productId]', maxAgeSeconds },
    { path: '/api/s/[...categorySlug]', maxAgeSeconds },
    { path: '/api', maxAgeSeconds },
  ],
})
new Prefetcher().route()