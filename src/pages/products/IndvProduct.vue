<template>
  <product-breadcrum :title="currProd.title" />
  <product-info :product="currProd" />
</template>

<script>
import ProductBreadcrum from './sections/ProductBreadcrum.vue'
import ProductInfo from './sections/ProductInfo.vue'
export default {
  components: { ProductInfo, ProductBreadcrum },
  data() {
    return {
      id: null,
      currProd: null,
    }
  },
  created() {
    this.id = this.$route.params.prodId
    this.currProd = this.$store.state.sofa.sofas.find((abc) => abc.id === this.id)
  },
}
</script>

<style scoped></style>
