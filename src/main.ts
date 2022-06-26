import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import 'ant-design-vue/dist/antd.css';
import '@/router/permission'

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
