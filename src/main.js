import {createApp} from 'vue'
import App from './App.vue'
import './index.scss'

// 引入router
import {createRouter, createWebHashHistory} from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import store from './Store/index.js'

const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        {path: '/', component: Home},
        {path: '/doc', component: Doc}
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
app.use(store)


