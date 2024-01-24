import { createApp } from 'vue'
import App from './App.vue'
import router from "@/routers";

//4、使用路由
const app = createApp(App)
app.use(router)

app.mount('#app')
