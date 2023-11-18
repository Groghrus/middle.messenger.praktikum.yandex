import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    root: resolve(__dirname, 'src'),
    build: {
      outDir: resolve(__dirname, 'dist'),
      emptyOutDir: true
      // rollupOptions: {
      //   input: {
      //       auth: resolve(__dirname, 'src/index.html'),
      //       signin: resolve(__dirname, 'src/index.html'),
      //       err404: resolve(__dirname, 'src/index.html'),
      //       err500: resolve(__dirname, 'src/index.html'),
      //       chat: resolve(__dirname, 'src/index.html'),
      //       profile: resolve(__dirname, 'src/index.html'),
      //       profileEdit: resolve(__dirname, 'src/index.html'),
      //       profilePwdEdit: resolve(__dirname, 'src/index.html'),
      //       modals: resolve(__dirname, 'src/index.html')
      //   }
      // }
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
