import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://sethmaxson.github.io/fractured-worlds/",
  plugins: [
    vue(),
    vueJsx(),
    VitePWA({
      devOptions: {
        enabled: true
        /* other options */
      },
      manifest: {
        "name": "Fractured Worlds Companion",
        "short_name": "Fractured Worlds",
        "display": "standalone",
        "start_url": ".",
        "icons": [
          {
            "src": "icons/favicon/web-app-manifest-192x192.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "maskable"
          },
          {
            "src": "icons/favicon/web-app-manifest-512x512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "maskable"
          },
          {
            "src": "icons/favicon/web-app-manifest-512x512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "any"
          }
        ],
        // "theme_color": "#434ff1",
        "theme_color": "#08337a",
        "background_color": "#08337a"
      },
      injectRegister: 'auto',
      registerType: 'autoUpdate'
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    port: 623,
  }
});
