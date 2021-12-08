<template>
    <div>
        <p class="lbl-name">Name: {{ name }}</p>
        <p class="lbl-status">Status: {{ status }}</p>
        <button class="btn-manzana" v-on:click="changeTo('manzana')">change to manzana</button>
        <button class="btn-mango" v-on:click="changeTo('mango')">change to mango</button>
    </div>
</template>

<script>
export default {
    computed: {
        name() { return this.$store.getters['ItemStore/name'] },
        status() { return this.$store.getters['ItemStore/status'] }
    },
    methods: {
        changeTo(name) {
            this.$store.dispatch('ItemStore/changeItem', name)
        }
    },
}
</script>