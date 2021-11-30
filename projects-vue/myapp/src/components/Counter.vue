<template>
    <!-- Inyección directa del estado a los componentes -->
    <p>{{ count }}</p>
    <!-- Enlaza/Escucha el evento click y llama al método increment con parámetros -->
    <button v-on:click="increment('hello', $event, 123)">inc</button>
</template>

<script>
export default {
    // Devuelve el estado inicial
    data() {
        // Regresa el estado inicial { count: 0 } => count
        return {
            count: 0
        }
    },
    // data: () => ({ count: 0 })
    // data: { count: 0 }
    methods: {
        increment(message, event, value) {
            console.log(message, event, value)
            // TODO: El estado count debería incrementar
            this.count++ // this.count += 1 | this.count = this.count + 1
        }
    }
}
</script>