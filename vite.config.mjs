import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: ".",
  server: {
    port: 3001,
  },
  publicDir: false,
  build: {
    outDir: "public/dist/assets",
    emptyOutDir: false,
    rollupOptions: {
      input: resolve(__dirname, "src/main.ts"),
      output: {
        entryFileNames: "main.js",
      },
    },
  },
});
