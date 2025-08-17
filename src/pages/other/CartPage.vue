<template>
  <h1>THis is cart page :></h1>
  <h3>Total product {{ totalProd }}</h3>
  <div v-for="(ele, ind) in currProd" :key="ind">
    <hr />
    <p>{{ ele.title }}</p>
    <p>{{ ele.price }}</p>
    <p>{{ ele.qty }}</p>
    <p>{{ ele.qtyPrice }}</p>
  </div>
  <h3>Total Cart Price {{ totalPrice }}</h3>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      totalProd: 0,
      currProd: [],
      totalPrice: 0,
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
        let indvPrice = 0
        if (found) {
          found = {
            ...found,
            qty: ele.quantity,
            qtyPrice: ele.quantity * found.price,
          }
          indvPrice = found.price * found.qty
          this.currProd.push(found)
        }
        this.totalPrice += indvPrice
      }

      console.log(this.currProd)
    },
  },
}
</script>

<style></style>
