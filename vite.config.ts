import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from "vite-plugin-dts";
import { resolve } from "path";
// import tailwindcss from "tailwindcss";
import postcss from "@tailwindcss/postcss"; 

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({ 
      tsconfigPath: "./tsconfig.app.json",
      insertTypesEntry: true, 
      rollupTypes: true
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "/lib/index.ts"),
      name: "chaoscomponents",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "tailwindcss"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          tailwindcss: "tailwindcss",
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  css: {
    postcss: {
      // plugins: [tailwindcss],
      plugins: [postcss],
    },
  },
})
