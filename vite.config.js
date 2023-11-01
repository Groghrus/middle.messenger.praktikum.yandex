import { resolve } from 'path';
import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
    root: resolve(__dirname, 'src'),
    plugins: [handlebars(
      {
        partialDirectory: resolve(__dirname, 'partials'),
      }
    )],
    build: {
      outDir: resolve(__dirname, 'dist'),
      rollupOptions: {
        input: {
          index: resolve(__dirname, 'src/index.html'),
          home: resolve(__dirname, 'src/views/home/index.html'),
          modals: resolve(__dirname, 'src/views/modals/index.html'),
          profile: resolve(__dirname, 'src/views/profile/index.html'),
          profileEdit: resolve(__dirname, 'src/views/profile-edit/index.html'),
          profilePwd: resolve(__dirname, 'src/views/profile-pwd/index.html'),
          signin: resolve(__dirname, 'src/views/signin/index.html'),
          e404: resolve(__dirname, 'src/views/404.html'),
          e500: resolve(__dirname, 'src/views/500.html')
        }
      }
    },
    server: {
      port: 3000,
    }
})
