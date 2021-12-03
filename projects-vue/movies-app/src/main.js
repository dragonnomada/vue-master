import { createApp } from 'vue'

// npm install --save vuex@next
import { createStore } from 'vuex'

// npm install --save @kyvg/vue3-notification
import Notifications, { notify } from '@kyvg/vue3-notification'

// npm install --save @meforma/vue-toaster
import Toaster, { createToaster } from "@meforma/vue-toaster";

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
app.use(Notifications)
app.use(Toaster)

const toaster = createToaster({ /* options */ });

setTimeout(() => {
    notify('Hello Vue')
    toaster.show(`Hey! I'm here`);
}, 5000)

app.mount('#app')
