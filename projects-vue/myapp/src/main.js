// PERFIL: ADMINISTRADOR FRONT
// HINT: Programador Especializado (Vue | Webpack | .ENV | ...)
// * Configurar Vue: Enlazar y inicializar servicios (Vuex | Vue Router | Paypal | ...)
// * Administrar las variables de entorno (API_KEY | TOKENS | PORT | BASE_URL)
// * Configuraciones de alto nivel sobre Vue (Webpack | Babel | Eslint | Vue Config)

// Configurar Vue (Vuex | Vue Router | Paypal | Server)

// createApp(<component>) - Crea un aplicación Vue basada en un componente
import { createApp } from 'vue'

// Importa el Componente .VUE y lo transforma a código útil de JS para montarlo en la aplicación
import App from './App.vue' // Vue Component -> <template>...</template> <--> h(...)

// .mount(<css selector>) - Monta la aplicación en el nodo HTML indicado
createApp(App).mount('#app')
