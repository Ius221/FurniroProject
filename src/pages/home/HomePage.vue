<template>
  <hero-section class="section" />
  <small-gallery class="section" />
  <products-section class="section" />
  <callto-action class="section" />
  <the-gallery class="section" />
</template>

<script>
import HeroSection from './sections/HeroSection.vue'
import ProductsSection from './sections/ProductsSection.vue'
import SmallGallery from './sections/SmallGallery.vue'
import CalltoAction from './sections/CalltoAction.vue'
import TheGallery from './sections/TheGallery.vue'
export default {
  components: { HeroSection, SmallGallery, ProductsSection, TheGallery, CalltoAction },
}
</script>

<style scoped>
.section {
  margin: 9rem auto;
  margin-top: 0;
}
</style>
