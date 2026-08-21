import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// vite.config.ts
export default defineConfig({
  base: '/Mi_Portafolio/',  // 👈 Reemplaza con el nombre exacto de tu repo
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
