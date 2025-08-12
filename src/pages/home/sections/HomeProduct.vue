<template>
  <div class="product-section">
    <h2>Our Products</h2>
    <div class="product-lists">
      <div
        class="indv-product"
        v-for="(sofa, index) in displaySofas"
        :key="index"
        @mouseenter="isHover = index"
        @mouseleave="isHover = null"
      >
        <div class="tag" :class="isDiscount(sofa.tags) ? 'discount' : ''" v-if="sofa.tags">
          {{ sofa.tags }}
        </div>
        <router-link :to="`/shop/${sofa.id}`" :class="isHover === index ? 'hidden-data' : 'hidden'">
          <button class="add-cart">Add to cart</button>
          <div class="other-options">
            <a href="#" class="share share-img">
              <img :src="share" alt="" />
              <p>Share</p>
            </a>
            <a href="#" class="share compare-img">
              <img :src="compare" alt="" />
              <p>Compare</p>
            </a>
            <a href="#" class="share like-img">
              &#x2764;
              <p>Like</p>
            </a>
          </div>
        </router-link>
        <div class="img-container">
          <img class="product-img" :src="prodImage(sofa.image[0])" alt="" />
        </div>
        <div class="others">
          <h3>{{ sofa.title }}</h3>
          <p class="desc">{{ sofa.description.split(' ').slice(0, 3).join(' ') }}...</p>
          <div class="price">
            <div v-if="sofa.tags && isDiscount(sofa.tags)" class="disc-price">
              <p>
                ₹
                {{
                  (sofa.price - sofa.price * (Number(sofa.tags.slice(1, 3)) / 100)).toLocaleString(
                    'en-IN',
                  )
                }}
              </p>
              <p class="actual-price">₹ {{ sofa.price.toLocaleString('en-IN') }}</p>
            </div>
            <div v-else>₹ {{ sofa.price.toLocaleString('en-IN') }}</div>
          </div>
        </div>
      </div>
    </div>
    <router-link to="/shop/page/1" class="show-more">Show More</router-link>
  </div>
</template>

<script>
import share from '@/assets/svg/Home/share.png'
import compare from '@/assets/svg/Home/compare.png'
import like from '@/assets/svg/header/like.png'

// Import all product images dynamically
const productImages = import.meta.glob('@/assets/images/products/*.jpg', { eager: true })

export default {
  data() {
    return {
      like,
      share,
      compare,
      isHover: null,
      sofas: null,
      windowWidth: window.innerWidth,
    }
  },
  created() {
    this.sofas = this.$store.state.sofa.sofas
    console.log('Sofas loaded:', this.sofas)
    window.addEventListener('resize', this.handleResize)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize)
  },
  computed: {
    displaySofas() {
      if (!this.sofas) return []
      // Show 9 items on mobile (max-width: 44em = 704px)
      const maxItems = this.windowWidth <= 704 ? 9 : 8
      return this.sofas.slice(0, maxItems)
    },
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth
    },
    isDiscount(value) {
      if (value.includes('-')) return true
      return false
    },
    prodImage(image) {
      // Find the image in the imported glob
      for (const path in productImages) {
        if (path.includes(image + '.jpg')) {
          return productImages[path].default || productImages[path]
        }
      }

      // Fallback to a default image if not found
      return '/src/assets/images/products/img--1a.jpg'
    },
  },
}
</script>

<style scoped>
.product-section {
  max-width: 124rem;
  margin: 0 auto;
  text-align: center;
}
h2 {
  font-weight: 700;
  font-size: 4rem;
  color: #333;
}
.img-container {
  position: relative;
  height: 30rem;
  background-color: #f00;
  overflow: hidden;
}
.product-img {
  position: absolute;
  width: 180%;
  left: -5%;
  top: -5%;
}
.others {
  text-align: start;
  background-color: #f4f5f7;
  padding: 1.6rem;
}
.price,
h3 {
  font-size: 2.4rem;
  font-weight: 600;
  color: #3a3a3a;
}
.desc {
  font-size: 1.6rem;
  color: #898989;
  margin: 8px 0;
}
.price {
  font-size: 2rem;
  font-weight: 600;
}
.disc-price {
  display: flex;
  align-items: center;
  gap: 3rem;
}
.actual-price {
  text-decoration: line-through;
  font-style: italic;
  font-weight: normal;
  color: rgba(0, 0, 0, 0.3);
  font-size: smaller;
}
.product-lists {
  display: grid;
  gap: 3.2rem;
  margin-top: 3.2rem;
  grid-template-columns: repeat(4, 1fr);
}
.indv-product {
  cursor: pointer;
  transition: all 0.3s;
  position: relative;
}
.hidden-data {
  transition: all 0.3s;
  position: absolute;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  top: 0;
  left: 0;
  width: 100%;
  font-weight: 600;
  color: #fff;
  font-size: 1.6rem;
}
.indv-product:hover .others,
.indv-product:hover .img-container {
  cursor: pointer;
  opacity: 0.5;
}
.hidden {
  display: none;
}
.add-cart {
  color: #b88e2f;
  font-size: 1.6rem;
  font-weight: 600;
  padding: 1.2rem 4.8rem;
  border: none;
  cursor: pointer;
}

.other-options {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2.8rem;
}
a {
  text-decoration: none;
  color: inherit;
  display: flex;
}
.share {
  display: flex;
  align-items: center;
  gap: 2px;
}

.share img {
  width: 1.6rem;
  height: 1.6rem;
  filter: brightness(0) invert(1);
}

.show-more {
  font-size: 1.6rem;
  font-weight: 600;
  color: #b88e2f;
  background-color: transparent;
  padding: 1.2rem 7.4rem;
  transition: all 0.3s;
  cursor: pointer;
  border: 1px solid #b88e2f;
  margin-top: 3.2rem;
  display: inline-block;
}

.add-cart:hover,
.show-more:hover {
  background-color: #b88e2f;
  color: #fff;
}
/* adding tags in the product */
.tag {
  z-index: 2;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 5%;
  top: 3%;
  text-transform: capitalize;
  height: 4.8rem;
  width: 4.8rem;
  border-radius: 50%;
  font-size: 1.6rem;
  font-weight: 500;
  color: #fff;
  background-color: #2ec1ac;
}
.discount {
  background-color: #e97171 !important;
}
</style>

<style scoped>
@media (max-width: 78em) {
  .product-section {
    padding: 0 2.4rem;
  }
}
@media (max-width: 65em) {
  .product-img {
    width: 210%;
  }
  .price {
    font-size: 1.6rem;
  }
  h3 {
    font-size: 2rem;
  }
  .desc {
    font-size: 1.4rem;
  }
  .show-more {
    padding: 1.2rem 5.4rem;
  }
}
@media (max-width: 53em) {
  .product-img[data-v-9db0466e] {
    width: 220%;
  }
}

@media (max-width: 44em) {
  .product-lists {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 1.2rem;
  }
  .show-more {
    padding: 0.8rem 3.2rem;
  }
}
@media (max-width: 480px) {
  .img-container {
    height: 24rem;
  }
  .tag {
    width: 3.4rem;
    height: 3.4rem;
    font-size: 1.2rem;
  }
  .desc {
    margin: 2px 0;
    margin-bottom: 8px;
  }
  .price {
    font-size: 1.4rem;
  }
}
</style>
