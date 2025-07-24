import { defineConfig } from "vite";
import { resolve } from "path";
import { viteStaticCopy } from 'vite-plugin-static-copy';

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
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'src/data/*.json',
          dest: 'data' 
        },
        {
          src: 'public/assets/images',
          dest: 'assets'
        }
      ]
    })
  ]
});
