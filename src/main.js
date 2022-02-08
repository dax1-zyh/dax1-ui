import {createApp} from 'vue'
import App from './App.vue'
import './index.scss'
import {store} from './Store'
import {router} from './router.js'

const app = createApp(App)
app.use(router)
app.mount('#app')
app.use(store)


