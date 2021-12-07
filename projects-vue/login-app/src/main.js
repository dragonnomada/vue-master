import { createApp } from 'vue'
import { createStore } from 'vuex'

import LoginStore from './stores/LoginStore'
import HelloStore from './stores/HelloStore'

import App from './App.vue'

const store = createStore({
    modules: {
        LoginStore,
        HelloStore,
    }
})

const app = createApp(App)

app.use(store)

app.mount('#app')
