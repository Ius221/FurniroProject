<template>
  <div class="outer-all">
    <!-- LEFT SIDE -->
    <div class="dummy">
      <div class="cart-detils top-heading">
        <div class="title"></div>
        <div class="title">Product</div>
        <div class="title">Price</div>
        <div class="title">Quantity</div>
        <div class="title">Subtotal</div>
        <div class="title"></div>
      </div>
      <div class="cart-detils" v-if="currProd.length === 0">
        <div class="img-container"><img src="" alt="?" /></div>
        <div class="blur-effect">--</div>
        <div class="blur-effect">--</div>
        <div class="title list-qty">-</div>
        <div class="title">--</div>
        <div class="title"></div>
      </div>
      <router-link
        v-else
        class="cart-detils redirect-list"
        v-for="(prod, ind) in currProd"
        :to="{ name: 'Product', params: { prodId: prod.id } }"
        :key="ind"
      >
        <div class="img-container">
          <img class="import-img" :src="getImage(prod.image[0])" alt="" />
        </div>
        <div class="blur-effect">{{ prod.title }}</div>
        <div class="blur-effect">₹ {{ prod.price.toLocaleString('en-IN') }}</div>
        <div class="title list-qty">{{ prod.qty }}</div>
        <div class="title">₹ {{ (prod.price * prod.qty).toLocaleString('en-IN') }}</div>
        <div class="title"><img class="bin-icon" :src="bin" alt="" /></div>
      </router-link>
    </div>
    <!-- RIGHT SIDE -->
    <div class="cart-total">
      <h2>Cart Totals</h2>

      <div v-if="currProd.length === 0">
        <p class="notfound--text">No Product Found</p>
        <router-link to="/shop/page/1">
          <div class="button">Shop Now</div>
        </router-link>
      </div>
      <div v-else class="prouct-found">
        <div class="items" v-for="(prod, ind) in currProd" :key="ind">
          <p class="title">
            {{ prod.title }}
          </p>
          <p class="blur-effect">₹ {{ (prod.price * prod.qty).toLocaleString('en-IN') }}</p>
        </div>
        <div class="total-items">
          <p class="title">Total</p>
          <p class="total-price">₹ {{ totalPrice.toLocaleString('en-IN') }}</p>
        </div>
        <router-link to="#">
          <div class="button">Check Out</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
const importImg = 'src/assets/images/products/'
import bin from '@/assets/svg/shop/bin.png'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      bin,
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
          // if (found.tags.includes('-')) {
          // } else {
          indvPrice = found.price * found.qty
          // }
          this.currProd.push(found)
        }
        this.totalPrice += indvPrice
      }

      console.log(this.currProd)
    },
    getImage(abc) {
      return importImg + abc + '.jpg'
    },
  },
}
</script>

<style scoped>
.outer-all {
  max-width: 144rem;
  margin: 0 auto;
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(3, 1fr);
}
.dummy {
  grid-column: span 2;
}

/* LEFT SIDE */

/* RIGHT SIDE */
.cart-total {
  background-color: #f9f1e7;
  padding: 1.5rem 7.5rem;
}
h2 {
  font-size: 3.2rem;
  font-weight: 600;
  margin-bottom: 4.8rem;
  text-align: center;
}
.total-items,
.items {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.4rem;
}
.title {
  font-weight: 500;
  font-size: 1.6rem;
}
.blur-effect {
  font-size: 1.6rem;
  color: #9f9f9f;
}
.notfound--text,
.total-price {
  font-size: 2rem;
  color: #b88e2f;
  font-weight: 600;
}
.notfound--text {
  text-align: center;
  margin-bottom: 1.4rem;
}
.total-items {
  border-top: 1px solid #999;
  margin-top: 4rem;
  padding-top: 2rem;
}

.button {
  border: 1px solid #000;
  border-radius: 1.5rem;
  padding: 1.4rem 6rem;
  font-size: 2rem;
  text-align: center;
  transition: all 0.3s;
  width: fit-content;
  margin: 0 auto 5rem auto;
}

.button:hover,
.button:active {
  background-color: rgba(184, 143, 47, 0.2);
}

a {
  text-decoration: none;
  color: inherit;
}
</style>

<style scoped>
.cart-detils {
  display: grid;
  gap: 3rem;
  grid-template-columns: 100px 1fr 1fr 0.5fr 1fr 0.5fr;
  transition: all 0.5s;
  align-items: center;
  margin-bottom: 3rem;
}
.top-heading {
  margin-bottom: 5.5rem;
  width: 100%;
  background-color: #f9f1e7;
  height: 5.5rem;
}
.bin-icon {
  height: 28px;
  width: 28px;
  opacity: 0.3;
  cursor: pointer;
}
.bin-icon:hover {
  opacity: 0.6;
}
.img-container {
  background-color: rgba(238, 238, 238, 0.5);
  height: 10rem;
  width: 10rem;
  position: relative;
  border-radius: 1.5rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.import-img {
  position: absolute;
  bottom: 0px;
  width: 170%;
  left: -27%;
}
.list-qty {
  height: 3.2rem;
  width: 3.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #9f9f9f;
  border-radius: 5px;
  justify-self: center;
}
.redirect-list:hover {
  margin-bottom: 3rem !important;
  background-color: #eee;
  border-radius: 1.5rem;
}
</style>
