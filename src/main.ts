import './lib/dax1.scss'
import './index.scss'
import {createApp} from 'vue'
import App from './App.vue'
import {store} from './Store'
import {router} from './router.js'

const app = createApp(App)
app.use(router)
app.mount('#app')
app.use(store)


