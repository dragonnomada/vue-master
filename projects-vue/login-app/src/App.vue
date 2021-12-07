<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <p>{{ url }}</p>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

const url = process.env.VUE_APP_API_URL

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  computed: {
    url() {
      return url
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
