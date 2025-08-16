<template>
  <div class="outer-div">
    <div class="img-section">
      <div class="img-container">
        <div class="left-img">
          <div class="img-contain" v-for="(_, index) in 4" :key="index" @click="ind = index">
            <img class="sml-img" :src="getImage(index)" alt="" />
          </div>
        </div>
        <div class="main-img">
          <img class="act-img" :src="getImage(ind)" alt="" />
        </div>
      </div>
    </div>
    <div class="other-info">
      <div class="top-part">
        <div class="title">{{ product.title }}</div>
        <div class="prices">
          <p class="light price disc-price" v-if="checkDisc()">₹{{ discPrice() }}</p>
          <p class="light price" :id="checkDisc() ? 'abc' : ''">
            ₹{{ product.price.toLocaleString('en-IN') }}
          </p>
        </div>
        <div class="icons">
          <img :src="star" alt="" class="icon" />
          <img :src="star" alt="" class="icon" />
          <img :src="star" alt="" class="icon" />
          <img :src="star" alt="" class="icon" />
          <img :src="star" alt="" class="icon" />
        </div>
        <p class="desc">{{ product.description }}</p>
        <div class="size">
          <div class="light">Size</div>
          <div class="sizes">
            <div class="ind-size active">L</div>
            <div class="ind-size">XL</div>
            <div class="ind-size">XS</div>
          </div>
        </div>
        <div class="color">
          <div class="light">Color</div>
          <div class="sizes">
            <div class="ind-color blue"></div>
            <div class="ind-color black"></div>
            <div class="ind-color yellow"></div>
          </div>
        </div>
        <div class="btns">
          <div class="btn" id="add-btn">
            <button class="neg" @click="subt">-</button>
            <div class="neg">{{ cart }}</div>
            <button class="neg" @click="add">+</button>
          </div>
          <div class="cart-btn btn" @click="cartAdding">Add To Cart</div>
          <div class="compare-btn btn">+ Compare</div>
        </div>
      </div>
      <div class="bottom-part">
        <table>
          <tr>
            <td>SKU</td>
            <td>:</td>
            <td>{{ product.sku }}</td>
          </tr>
          <tr>
            <td>Tags</td>
            <td>:</td>
            <td>{{ product.category.join(', ') }}</td>
          </tr>
          <tr v-if="product.tags">
            <td>Special Tag</td>
            <td>:</td>
            <td>{{ product.tags }}</td>
          </tr>
          <tr>
            <td>Share</td>
            <td>:</td>
            <td class="sm-icons">
              <img class="icon" :src="fb" alt="" />
              <img class="icon" :src="lin" alt="" />
              <img class="icon" :src="twit" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import star from '@/assets/svg/products/star.png'
import fb from '@/assets/svg/products/fb.png'
import lin from '@/assets/svg/products/lin.png'
import twit from '@/assets/svg/products/tweeter.png'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import { mapMutations } from 'vuex'

// Import all product images dynamically
const productImages = import.meta.glob('@/assets/images/products/*.jpg', { eager: true })

export default {
  name: 'App',

  props: ['product'],
  data() {
    return {
      star,
      fb,
      lin,
      twit,
      ind: 0,
      cart: 1,
    }
  },
  created() {
    this.getCart()
  },
  computed: {
    ...mapMutations('carts', ['addToCart']),
  },
  methods: {
    getCart() {
      const allItems = this.$store.state.cart.cartProd
      console.log('Cart Items: ', allItems)
    },
    cartAdding() {
      // Add item to cart using Vuex store mutation
      this.$store.commit('cart/addToCart', {
        id: this.product.id.toString(),
        quantity: this.cart.toString(),
      })

      // Show success notification
      this.notify(`Added ${this.cart} item(s) to cart!`)

      this.getCart()
    },
    checkDisc() {
      if (this.product.tags) return this.product.tags.includes('-')
      return ''
    },
    discPrice() {
      if (this.product.tags && this.product.tags.includes('-')) {
        const disc = Number(this.product.tags.slice(1, -1))
        const actPrice = this.product.price
        const discPrices = actPrice - actPrice * (disc / 100)
        return discPrices.toLocaleString('en-IN')
      } else return ''
    },
    getImage(ind) {
      const getImg = this.product.image[ind]
      const imagePath = `/src/assets/images/products/${getImg}.jpg`

      // Find the image in the imported glob
      for (const path in productImages) {
        if (path.includes(getImg + '.jpg')) {
          return productImages[path].default || productImages[path]
        }
      }

      // Fallback to a default image if not found
      return '/src/assets/images/products/img--1a.jpg'
    },
    add() {
      if (this.cart < 10) {
        this.cart++
      } else {
        this.notify('Cannot exceed 10!')
      }
    },
    subt() {
      if (this.cart > 1) {
        this.cart--
      } else {
        this.notify('Cannot go below 1!')
      }
    },
    notify(val) {
      toast(val, {
        autoClose: 3000,
        style: {
          borderradius: '12px',
          fontSize: '20px',
          fontWeight: '500',
          boxshadow: '0 4px 16px rgba(33, 212, 253, 0.3)',
        },
      })
    },
  },
}
</script>

<style scoped>
#abc {
  /* color: #000; */
  text-decoration: line-through;
  font-style: italic;
  opacity: 0.5;
}
.outer-div {
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(2, 1fr);
  max-width: 124rem;
  margin: 3.5rem auto;
}
.main-img {
  height: 50rem;
  width: 42.3rem;
}

/* OTHER INFORMATION TOP PART */
.top-part {
  padding-bottom: 6rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.title {
  font-size: 4.2rem;
}
.prices {
  display: flex;
  gap: 3.6rem;
}
.price {
  font-size: 2.4rem !important;
}
.icons {
  display: flex;
  gap: 7px;
  margin-top: 1.5rem;
}
.icon {
  width: 1.8rem;
}
.desc {
  font-size: 1.3rem;
  max-width: 42rem;
  margin-top: 1.8rem;
}
.light {
  color: #9f9f9f;
  font-size: 1.4rem;
}
.size {
  margin-top: 2rem;
}
.sizes {
  display: flex;
  gap: 1.6rem;
}
.color {
  margin-top: 2rem;
  gap: 1.8rem;
}
.ind-size {
  width: 3rem;
  height: 3rem;
  background-color: #f9f1e7;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 5px;
  margin-top: 1.4rem;
}
.ind-size:hover {
  background-color: rgba(184, 143, 47, 0.3);
}
.active {
  background-color: #b88e2f !important;
  color: #fff !important;
}
.btns {
  display: flex;
  gap: 1.8rem;
  margin-top: 3.2rem;
}
.btn {
  border: 1px solid #000;
  height: 6.4rem;
  width: 21.5rem;
  display: flex;
  align-items: center;
  border-radius: 1rem;
  transition: all 0.3s;
  font-size: 2rem;
  justify-content: center;
  cursor: pointer;
}
.btn:hover {
  background-color: #f9f1e7;
}
#add-btn {
  display: flex;
  justify-content: space-between;
  width: 12.3rem;
  border-color: #9f9f9f;
  cursor: auto;
}
#add-btn:hover {
  background-color: transparent;
}
.ind-color {
  padding: 1.5rem;
  margin-top: 1.2rem;
  cursor: pointer;
  border-radius: 50%;
}
.blue {
  background-color: #816dfa;
}
.black {
  background-color: #000;
}
.yellow {
  background-color: #b88e2f;
}
/* OTHER INFORMATION BOTTOM PART */
.bottom-part {
  padding-top: 4.2rem;
  color: #9f9f9f;
  font-size: 1.6rem;
}
th,
td {
  text-transform: capitalize;
  padding: 2px 6px;
}
.sm-icons {
  display: flex;
  gap: 2.4rem;
}

/* IMAGE SECTION STYLES :) */
.img-container {
  gap: 3rem;
  display: flex;
}
/* Left Image */
.left-img {
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
}

.img-contain {
  width: 7.6rem;
  height: 8rem;
  border-radius: 1rem;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}
.sml-img {
  position: absolute;
  width: 200%;
  top: 0%;
  left: -50%;
}
/* Main image */
.main-img {
  height: 50rem;
  width: 42.3rem;
  border-radius: 1rem;
  position: relative;
  overflow: hidden;
}
.act-img {
  width: 200%;
  left: -20%;
  position: absolute;
  top: 0%;
}
button {
  height: 100%;
  padding: 0 1.4rem;
  font-size: 2rem;
  font-weight: 500;
  background-color: transparent;
  border: none;
  cursor: pointer;
}
</style>
