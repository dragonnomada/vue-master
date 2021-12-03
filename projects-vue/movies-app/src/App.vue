<!-- Start App: `npm run serve` -->

<template>
  <notifications />
  <MoviesApp msg="Welcome to Your Vue.js App"/>
</template>

<script>
import MoviesApp from './components/MoviesApp.vue'

export default {
  name: 'App',
  components: {
    MoviesApp
  }
}
</script>
