import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'// ./代表同级 ../代表上一级 @/根目录src需要手动配置
import '@/assets/css/common.css'
import '@/assets/css/index.css'
import '@/assets/font/iconfont.css'
import '@/assets/font/iconfont.js'



createApp(App).use(router).mount('#app')
