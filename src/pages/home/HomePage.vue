<template>
  <hero-section class="section" />
  <small-gallery class="section" />
  <products-section class="section" />
</template>

<script>
import HeroSection from './sections/HeroSection.vue'
import ProductsSection from './sections/ProductsSection.vue'
import SmallGallery from './sections/SmallGallery.vue'
export default {
  components: { HeroSection, SmallGallery, ProductsSection },
}
</script>

<style scoped>
.section {
  margin: 9rem auto;
  margin-top: 0;
}
</style>
