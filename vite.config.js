import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      vue: "vue/dist/vue.esm-bundler.js", // Utilise la version avec compilation runtime
    },
  },
  plugins: [vue(), tailwindcss()],
});
