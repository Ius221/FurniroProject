<template>
  <div class="outer-all">
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
import setting from '@/assets/svg/Home/setting.png'
import fcircle from '@/assets/svg/shop/fcircle.png'
import grid from '@/assets/svg/shop/grid.png'
import list from '@/assets/svg/shop/list.png'
import { ref, toRef } from 'vue'
export default {
  data() {
    return {
      setting,
      list,
      fcircle,
      grid,
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
