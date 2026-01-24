import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'// ./代表同级 ../代表上一级 @/根目录src需要手动配置
import '@/assets/css/common.css'
import '@/assets/css/index.css'
import '@/assets/font/iconfont.css'
import '@/assets/font/iconfont.js'
import axios from 'axios'

// 
// axios.defaults.baseURL = "http://localhost:8080"
// axios.defaults.timeout = 10000;

const app = createApp(App)

// 全局挂载
app.config.globalProperties.$axios = axios;

app.provide('axios', axios);

//Vue3项目
app.use(router)
app.mount('#app')
