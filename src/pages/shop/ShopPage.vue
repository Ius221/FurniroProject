<template>
  <shop-breadcrums />
  <shop-list class="list" />
  <carousel-section />
</template>

<script>
import ShopBreadcrums from './sections/ShopBreadcrums.vue'
import ShopList from './sections/ShopList.vue'
import CarouselSection from './sections/ShopCarousel.vue'
export default {
  inject: ['isGrid'],
  components: { ShopBreadcrums, ShopList, CarouselSection },
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
