<template>
  {{ statusMessage }}
  <input placeholder="email" :value="email" @change="updateEmail($event.target.value)" >
  <textarea :value="content" @change="updateContent($event.target.value)"></textarea>
  <button @click="send">send</button>
</template>

<script>
export default {
  data: () => ({
    email: '',
    content: ''
  }),
  computed: {
    statusMessage() {
      console.log(this.$store)
      return this.$store.state.statusMessage
    }
  },
  methods: {
    updateEmail(email) {
      this.email = email
    },
    updateContent(content) {
      this.content = content
    },
    send() {
      if (!this.email) {
        alert('Invalid email')
        return
      }
      if (!this.content) {
        alert('Invalid content')
        return
      }
      this.$store.dispatch('sendTicket', {
        email: this.email,
        content: this.content
      })
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
