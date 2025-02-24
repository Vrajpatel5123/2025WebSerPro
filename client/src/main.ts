import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
//App is your template file or page that has everything

app.use(router)

app.mount('#app')
