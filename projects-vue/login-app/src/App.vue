<template>
  <div>
    <Login v-if="!isLogin"/>
    <HelloWorld v-if="isLogin"/>
  </div>
</template>

<script>
import Login from './components/Login.vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    Login,
    HelloWorld,
  },
  computed: {
    isLogin() {
      return this.$store.getters['LoginStore/isLogin']
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
