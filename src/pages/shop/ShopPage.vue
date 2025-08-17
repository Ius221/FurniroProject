<template>
  <top-breadcrum>
    <template #headCurr> Shop </template>
    <template #curr> Shop </template>
  </top-breadcrum>
  <shop-breadcrums />
  <shop-list class="list" />
  <page-carousel />
</template>

<script>
import ShopBreadcrums from './sections/ShopSupportbar.vue'
import ShopList from './sections/ShopList.vue'
export default {
  inject: ['isGrid'],
  components: { ShopBreadcrums, ShopList },
}
</script>

<style scoped>
.list {
  margin-top: 6.4rem;
}
</style>
