import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import Components from 'unplugin-vue-components/vite'  // 修正：使用 Components
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vite.dev/config/
export default defineConfig({
  server: {
    open: true, // 自动打开浏览器
    port: 8088
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),  // 修正：双下划线 __dirname
    }
  },
  plugins: [
    vue(),
    Components({  // 修正：使用 Components 而不是 Componentsts
      resolvers: [ElementPlusResolver()],  // 修正：resolvers 不是 resolves
    })
  ],
})