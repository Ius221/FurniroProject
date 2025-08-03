<template>
  <div class="product-section">
    <h2>Our Products</h2>
    <div class="product-lists">
      <div
        class="indv-product"
        v-for="(sofa, index) in sofas.slice(0, 8)"
        :key="index"
        @mouseenter="isHover = index"
        @mouseleave="isHover = null"
      >
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
          <img class="product-img" :src="img" alt="" />
        </div>
        <div class="others">
          <h3>{{ sofa.title }}</h3>
          <p class="desc">{{ sofa.description.split(' ').slice(0, 3).join(' ') }}...</p>
          <p class="price">₹ {{ sofa.price.toLocaleString('en-IN') }}</p>
        </div>
      </div>
    </div>
    <router-link to="/shop" class="show-more">Show More</router-link>
  </div>
</template>

<script>
import share from '@/assets/svg/share.png'
import compare from '@/assets/svg/compare.png'
import like from '@/assets/svg/like.png'
import img from '@/assets/images/products/img--1.png'
export default {
  data() {
    return {
      img,
      like,
      share,
      compare,
      isHover: null,
      sofas: null,
    }
  },
  created() {
    this.sofas = this.$store.state.sofa.sofas
    console.log('Sofas loaded:', this.sofas)
  },
  methods: {
    hoverInd() {
      console.log('hii ther')
    },
    hoverOut() {
      console.log('Helloww....')
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
  width: 28.5rem;
  overflow: hidden;
  background-color: #f00;
}
.product-img {
  position: absolute;
  /* width: 100%; */
  width: 150%;
  left: -25%;
  top: -35%;
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
</style>
