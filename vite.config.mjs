import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: ".",
  server: {
    port: 3001,
  },
  publicDir: true,
  build: {
    outDir: "public/dist",
    emptyOutDir: false,
    rollupOptions: {
      input: resolve(__dirname, "src/main.ts"),
      output: {
        entryFileNames: "assets/main.js",
      },
    },
  },
});
