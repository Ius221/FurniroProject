<template>
  <div class="outer-div">Hello ther</div>
</template>

<script>
export default {
  data() {
    return {
      routeId: null,
      currProd: null,
    }
  },
  created() {
    this.routeId = this.$route.params.prodId
    const currProd = this.$store.state.sofa.sofas.find((abc) => abc.id === this.routeId)

    console.log(this.routeId, currProd)
  },
}
</script>

<style scoped></style>
