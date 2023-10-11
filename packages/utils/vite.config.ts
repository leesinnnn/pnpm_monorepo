import { defineConfig } from "vite";

export default defineConfig({
  build: {
    target: "es2015",
    lib: {
      entry: "./src/index.ts",
      formats: ["es", "cjs", "iife", "umd"],
      fileName: "index",
      name: "leeesin_utils",
    },
    minify: false,
    outDir: "dist",
    sourcemap: true,
  },
});
