<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <button v-on:click="doFetch()">fetch</button>
  <pre><code>{{ text }}</code></pre>
</template>

<script>
const https = require('https')

export default {
  name: 'App',
  data: () => ({
    text: "click on fetch"
  }),
  methods: {
    async doFetch() {
      const agent = new https.Agent({
        rejectUnauthorized: false,
      });

      const response = await fetch("https://localhost:4433/authenticate", {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        proxyHeaders: true,
        proxy: true,
        httpsAgent: agent
      })

      const text = await response.text()

      console.log(text)

      this.text = text
    }
  },
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
