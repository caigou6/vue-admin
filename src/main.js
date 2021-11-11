import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 新增代码：引入全部组件及样式
import ElementPlus from 'element-plus'
import 'element-ui/lib/theme-chalk/index.css'

const app = createApp(App)

app.use(store)
app.use(router)

// 新增代码：注册全部组件
app.use(ElementPlus)

app.mount('#app')