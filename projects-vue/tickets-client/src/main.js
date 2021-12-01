import { createApp } from 'vue'
import { createStore } from "vuex"

import TicketsStore from "./stores/TicketsStore"

import App from './App.vue'


const store = createStore({
    modules: {
        tickets: TicketsStore // Un conjunto de acciones asociadas a un estado
    }
})

const app = createApp(App)

app.use(store)

app.mount('#app')
