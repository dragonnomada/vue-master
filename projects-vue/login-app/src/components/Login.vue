<template>
    <div>
        <input placeholder="username" v-model="username">
        <input placeholder="password" type="password" v-model="password">
        <button v-on:click="signIn">Sign In</button>
    </div>
</template>

<script>
export default {
    data: () => ({
        username: '',
        password: ''
    }),
    methods: {
        async signIn() {
            await this.$store.dispatch('LoginStore/signIn', {
                username: this.username,
                password: this.password,
            })

            await this.$store.dispatch('HelloStore/fetchData')
        }
    }
}
</script>