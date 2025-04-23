import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { compression } from 'vite-plugin-compression2'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    compression({
      algorithm: 'gzip',
      exclude: [/\.(br)$/, /\.(gz)$/],
    }),
    compression({
      algorithm: 'brotliCompress',
      exclude: [/\.(br)$/, /\.(gz)$/],
    }),
  ],
  build: {
    // Generate source maps for better debugging
    sourcemap: true,
    // Minify CSS and JS for better performance
    minify: 'terser',
    // Configure chunk size warnings
    chunkSizeWarningLimit: 1000,
    // Configure rollup options
    rollupOptions: {
      output: {
        // Ensure proper asset handling
        assetFileNames: 'assets/[name].[hash][extname]',
        // Ensure proper chunk handling
        chunkFileNames: 'assets/[name].[hash].js',
        // Ensure proper entry handling
        entryFileNames: 'assets/[name].[hash].js',
        // Optimize chunks
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Enable CSS minification
    cssMinify: true,
    // Configure terser options
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  // Configure server options
  server: {
    // Enable HTTPS for local development
    https: false,
    // Configure host
    host: true,
  },
  // Configure optimization options
  optimizeDeps: {
    include: ['vue'],
  },
})
