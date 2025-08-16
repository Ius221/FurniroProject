<template>
  <h1>THis is cart page :></h1>
  <h3>Total product {{ totalProd }}</h3>
  <div v-for="(ele, ind) in currProd" :key="ind">
    <hr />
    <p>{{ ele.title }}</p>
    <p>{{ ele.price }}</p>
    <p>{{ ele.qty }}</p>
  </div>
  <h3>Total product {{ totalProd }}</h3>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      totalProd: 0,
      currProd: [],
    }
  },
  computed: {
    ...mapGetters('cart', ['getCartTotalQuantity', 'getCart']),
    ...mapGetters('sofa', ['sofas']),
  },
  created() {
    this.settingUp()
    this.totalProd = this.getCartTotalQuantity
  },
  methods: {
    settingUp() {
      this.currProd = []
      for (const ele of this.getCart) {
        let found = this.sofas.find((abc) => abc.id === ele.id)

        if (found) {
          console.log(found, ele)
          found = {
            ...found,
            qty: ele.quantity,
          }
          this.currProd.push(found)
        }
      }

      console.log(this.currProd)
    },
  },
}
</script>

<style></style>
