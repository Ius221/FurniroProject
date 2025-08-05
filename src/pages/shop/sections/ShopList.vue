<template>
  <div class="product-lists">
    <div
      class="indv-product"
      v-for="(sofa, index) in sofas"
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
        <img class="product-img" :src="img" alt="" />
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
    <div class="page-no">
      <router-link
        :to="`/shop/page/${page}`"
        class="page"
        v-for="(page, index) in totalPage"
        :key="index"
        :class="{ active: currPage === page }"
      >
        {{ page }}
      </router-link>
      <router-link :to="`/shop/page/${currPage + 1}`" class="page next" v-if="totalPage > currPage"
        >Next</router-link
      >

      <router-link to="/shop/page/1" class="page next" v-else> Back 1</router-link>
    </div>
  </div>
</template>

<script>
import share from '@/assets/svg/Home/share.png'
import compare from '@/assets/svg/Home/compare.png'
import like from '@/assets/svg/header/like.png'
import img from '@/assets/images/products/img--1.png'
export default {
  inject: ['isGrid'],
  data() {
    return {
      img,
      like,
      share,
      compare,
      // above are for images
      isHover: null,
      allSofa: null,
      sofas: null,
      perPage: 12,
      view: this.isGrid,
      currPage: 1,
    }
  },
  created() {
    this.allSofa = this.$store.state.sofa.sofas
    this.routeMethod(this.$route.params)
  },
  methods: {
    isDiscount(value) {
      if (value.includes('-')) return true
      return false
    },
    routeMethod(newRoute) {
      const getPage = Number(newRoute.pageNo)
      const finalPage = Math.ceil(this.allSofa.length / this.perPage)
      if (Number.isInteger(getPage) && getPage >= 1 && getPage <= finalPage) {
        this.currPage = getPage
        // This will change data dynamically
        const start = (this.currPage - 1) * this.perPage
        const end = start + this.perPage
        this.sofas = this.allSofa.slice(start, end)
      } else {
        this.$router.push('/error')
      }
    },
    checkPage() {
      return this.currPage
    },
  },
  computed: {
    totalPage() {
      return Math.ceil(this.allSofa.length / this.perPage)
    },
  },
  watch: {
    $route(newRoute) {
      this.routeMethod(newRoute.params)
    },
  },
}
</script>

<style scoped>
.img-container {
  position: relative;
  height: 30rem;
  width: 28.5rem;
  overflow: hidden;
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
  max-width: 124rem;
  margin: 0 auto;
  text-align: center;
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
.page-no {
  display: flex;
  justify-content: center;
  grid-column: 1/-1;
  margin-top: 4rem;
  gap: 3.8rem;
}
.page {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6rem;
  height: 6rem;
  font-size: 2rem;
  background-color: #f9f1e7;
  border-radius: 1rem;
  cursor: pointer;
  margin-bottom: 8.5rem;
  transition: all 0.3s ease;
}
.next {
  width: 9.8rem;
}
.active {
  background-color: #b88e2f !important;
  color: #fff;
}
.page:hover {
  background-color: rgba(184, 143, 47, 0.5);
}
</style>
