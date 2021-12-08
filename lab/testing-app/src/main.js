import { createApp } from 'vue'
import { createStore } from 'vuex'

import CounterStore from './stores/CounterStore'

import App from './App.vue'

const store = createStore({
    modules: {
        CounterStore
    }
})

const app = createApp(App)

app.use(store)

app.mount('#app')
