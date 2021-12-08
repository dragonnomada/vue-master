<template>
    <div>
        <p>Count: {{ count }}</p>
        <button class="btn-inc" v-on:click="increment()">increment</button>
        <button class="btn-dec" v-on:click="decrement()">decrement</button>
        <button class="btn-rst" v-on:click="reset()">reset</button>
    </div>
</template>

<script>
export default {
    computed: {
        count() { return this.$store.getters['CounterStore/count'] }
    },
    methods: {
        increment() { this.$store.dispatch('CounterStore/increment') },
        decrement() { this.$store.dispatch('CounterStore/decrement') },
        reset() { this.$store.dispatch('CounterStore/reset') },
    },
}
</script>