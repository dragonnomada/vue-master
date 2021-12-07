<template>
  <div class="hello">
    <div v-if="isLogin">
      <p>{{ date }}</p>
      <p>{{ hash }}</p>
      <p>{{ count }}</p>
      <button v-on:click="refresh()">refresh</button>
    </div>
    <div v-if="!isLogin">
      <p>No autorizado</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed: {
    isLogin() {
      return this.$store.getters['LoginStore/isLogin']
    },
    date() {
      return this.$store.getters['HelloStore/date']
    },
    hash() {
      return this.$store.getters['HelloStore/hash']
    },
    count() {
      return this.$store.getters['HelloStore/count']
    }
  },
  methods: {
    refresh() {
      this.$store.dispatch('HelloStore/fetchData')
    }
  }
}
</script>
