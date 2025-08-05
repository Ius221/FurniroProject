<template>
  <div class="outer-all">
    <div class="bread-crumming">
      <img class="bg-img" :src="rect" alt="" />
      <h2>Shop</h2>
      <div class="breadcrum">
        <router-link class="back-link" to="/">Home</router-link>
        <img class="arrow" :src="right" alt="" />
        <router-link class="curr-link" to="#">Shop</router-link>
      </div>
    </div>
    <div class="show-list">
      <div class="content">
        <div class="left">
          <div class="inner-left">
            <div class="filter">
              <img class="logo" :src="setting" alt="" />
              <p>Filter</p>
            </div>
            <img class="logo" :src="fcircle" alt="" />
            <img
              class="logo view grid"
              v-if="isGrid === true"
              @click="togggleView"
              :src="grid"
              alt=""
            />
            <img class="logo view list" @click="togggleView" v-else :src="list" alt="" />
          </div>
          <div class="showing-data">
            <p>Showing {{ showData() }} of {{ listArr }} results</p>
          </div>
        </div>
        <div class="right">
          <div class="show">
            <p>Show</p>
            <div class="num">{{ perPage }}</div>
          </div>
          <div class="show">
            <p>Short by</p>
            <div class="drop">
              <select>
                <option value="Name">Name</option>
                <option value="hot">Hot</option>
                <option value="new">New</option>
                <option value="discount">Discount</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import rect from '@/assets/images/Rectangle.png'
import setting from '@/assets/svg/Home/setting.png'
import fcircle from '@/assets/svg/shop/fcircle.png'
import grid from '@/assets/svg/shop/grid.png'
import list from '@/assets/svg/shop/list.png'
import right from '@/assets/svg/Home/right.png'
import { ref, toRef } from 'vue'
export default {
  data() {
    return {
      rect,
      setting,
      list,
      fcircle,
      grid,
      right,
      isGrid: true,
      listArr: null,
      perPage: 12,
    }
  },
  created() {
    this.listArr = this.$store.state.sofa.sofas.length
  },
  methods: {
    togggleView() {
      this.isGrid = !this.isGrid
    },
    showData() {
      const pageNo = Number(this.$route.params.pageNo) || 1
      // Adjust if your page size is dynamic
      const total = this.listArr

      // Calculate start and end indexes
      const start = (pageNo - 1) * this.perPage + 1
      let end = pageNo * this.perPage
      if (end > total) end = total

      // If there is no data or start is greater than total, show "0 - 0"
      if (total === 0 || start > total) return '0 - 0'

      return `${start} - ${end}`
    },
  },
  provide() {
    return {
      isGrid: toRef(this, 'isGrid'),
    }
  },
}
</script>

<style scoped>
.bread-crumming {
  position: relative;
  height: 31.6rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.bg-img {
  position: absolute;
  opacity: 0.5;
  top: -240%;
  z-index: -1;
  width: 100%;
}
h2 {
  font-size: 4.8rem;
  font-weight: 600;
}
a:link,
a:visited {
  text-decoration: none;
  color: inherit;
}
.arrow {
  height: 1.4rem;
}
.curr-link,
.back-link {
  position: relative;
  font-size: 1.6rem;
  transition: color 0.3s;
  color: inherit;
  text-decoration: none;
}

.curr-link::after,
.back-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 0;
  height: 2px;
  background-color: #b88e2f;
  transition: width 0.3s ease;
}

.curr-link:hover::after,
.back-link:hover::after {
  width: 100%;
}

.back-link {
  font-weight: 600;
}
.breadcrum {
  display: flex;
  align-items: center;
  gap: 1.2rem;
}

/* nav left side */
.logo {
  width: 2rem;
  height: 2rem;
}
.show-list {
  width: 100%;
  height: 10rem;
  background-color: #f9f1e7;
}

.content {
  max-width: 123.6rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10rem;
}
.left {
  display: flex;
  gap: 3rem;
}
.view {
  cursor: pointer;
}
.filter {
  height: 10rem;
  display: flex;
  align-items: center;
  gap: 1.2rem;
}
.inner-left {
  display: flex;
  align-items: center;
  gap: 2.4rem;
  padding-right: 3rem;
  border-right: 2px solid rgba(0, 0, 0, 0.2);
  height: 3rem;
}
P {
  font-size: 2rem;
}

/* nav right side */
.right {
  display: flex;
  gap: 3rem;
}
.show {
  display: flex;
  align-items: center;
  gap: 1.6rem;
}
.num {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  font-size: 2rem;
  color: #9f9f9f;
  height: 5.5rem;
  width: 5.5rem;
}
select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: none;
  outline: none;
  height: 5.5rem;
  width: 18.8rem;
  font-size: 2rem;
  color: #9f9f9f;
  padding: 1.2rem 3rem;
}
</style>
