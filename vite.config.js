import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    root: resolve(__dirname, 'src'),
    build: {
      outDir: resolve(__dirname, 'dist'),
      emptyOutDir: true
    },
    resolve: {
        alias: {
            'assets': resolve(__dirname, 'src/assets'),
            'components': resolve(__dirname, 'src/components'),
            'layout': resolve(__dirname, 'src/layout'),
            'lib': resolve(__dirname, 'src/lib'),
            'pages': resolve(__dirname, 'src/pages'),
            'typings': resolve(__dirname, 'src/typings'),
            'utils': resolve(__dirname, 'src/utils')
        }
    },
    server: {
      port: 3000,
    }
})
