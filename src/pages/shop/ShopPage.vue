<template>
  <shop-breadcrums />
  <shop-list class="list" />
</template>

<script>
import ShopBreadcrums from './sections/ShopBreadcrums.vue'
import ShopList from './sections/ShopList.vue'
export default {
  inject: ['isGrid'],
  components: { ShopBreadcrums, ShopList },
  created() {
    console.log(this.isGrid)
  },
}
</script>

<style scoped>
.list {
  margin-top: 6.4rem;
}
</style>
