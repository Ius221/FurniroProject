<template>
  <top-breadcrum>
    <template #headCurr>Cart</template>
    <template #curr>Cart</template>
  </top-breadcrum>
  <cart-main class="middle" />
  <page-carousel>
    <template>Cart</template>
  </page-carousel>
</template>

<script>
import CartMain from './sections/CartMain.vue'
export default {
  components: { CartMain },
}
</script>

<style scoped>
.middle {
  padding: 8.5rem 0;
}
</style>
