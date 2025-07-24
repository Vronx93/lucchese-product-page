import { defineConfig } from "vite";
import { resolve } from "path";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  root: ".",
  server: {
    port: 3001,
  },
  publicDir: false,
  build: {
    outDir: "public/dist/assets",
    assetsDir: "",
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(__dirname, "src/main.ts"),
      output: {
        entryFileNames: "main.js",
        assetFileNames: "main.css"
      },
    },
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: "src/data/*.json",     
          dest: "data"                
        },
        {
          src: "src/assets/images/**/*", 
          dest: "images"          
        }
      ]
    }),
  ]
});
