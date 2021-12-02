<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <fruta-price-card></fruta-price-card> --> <!-- HTML -->
  <!-- <FrutaPriceCard /> --> <!-- XML -->
  <FrutaPriceCard />
</template>

<script>
import FrutaPriceCard from './components/FrutaPriceCard.vue'

export default {
  name: 'App',
  components: {
    FrutaPriceCard
  }
}
</script>
