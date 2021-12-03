import { createApp } from 'vue'

// npm install --save vuex@next
import { createStore } from 'vuex'

import MovieStore from './stores/MovieStore'

import App from './App.vue'

const store = createStore({
    modules: {
        MovieStore // namespace 'MovieStore/<mutation|action>'
    }
})

store.dispatch('MovieStore/getAllMovies')

const app = createApp(App)

app.use(store)

app.mount('#app')
