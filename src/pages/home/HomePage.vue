<template>
  <hero-section class="section" />
  <small-gallery class="section" />
  <products-section class="section" />
  <callto-action class="section" />
  <the-gallery class="section" />
</template>

<script>
import HeroSection from './sections/HomeHero.vue'
import ProductsSection from './sections/HomeProduct.vue'
import SmallGallery from './sections/HomeSmall.vue'
import CalltoAction from './sections/HomeCallaction.vue'
import TheGallery from './sections/HomeGallery.vue'
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
<style>
/*****************/
/* Below 1248px */
/***************/
@media (max-width: 78em) {
  html {
    font-size: 56.25%;
  }
}

/*****************/
/* Below 1040px */
/***************/
@media (max-width: 65em) {
  html {
    font-size: 50%;
  }
}

/****************/
/* Below 848px */
/*************/
@media (max-width: 53em) {
  html {
    font-size: 43.75%;
  }
}

/****************/
/* Below 576px */
/*************/
@media (max-width: 36em) {
  html {
    font-size: 37.5%;
  }
}

@media (max-width: 480px) {
  html {
    font-size: 31.25%;
  }
}
</style>
