<template>
  <hero-section />
  <small-gallery class="section" />
</template>

<script>
import HeroSection from './sections/HeroSection.vue'
import SmallGallery from './sections/SmallGallery.vue'
export default {
  components: { HeroSection, SmallGallery },
}
</script>

<style scoped>
.section {
  margin: 9rem auto;
}
</style>
