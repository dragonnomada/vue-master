// Registrar los componentes principales e inicializarlos

<template>
  <!-- Consumir/Usar/Montar el componente -->
  <counter></counter>
</template>

<script>
import Counter from './components/Counter.vue'

export default {
  components: {
    Counter
  }
}

/* Javascript Object
{
  <key>: <value>
}
*/

/* <value> is replaced by a variable/function
{
  <key>: Counter
}
*/

/* <key> is named equals to <value>
{
  Counter: Counter
}
*/

/* Shoutcut: { Counter: Counter }
{
  Counter
}
*/
</script>