<template>
  <div class="outer-all">
    <div class="main">
      <div class="left">
        <router-link to="/">Home</router-link>
        <img :src="right" alt="" />
        <router-link to="/shop/page/1">Shop</router-link>
        <img :src="right" alt="" />
      </div>
      <p>{{ title }}</p>
    </div>
  </div>
</template>

<script>
import right from '@/assets/svg/Home/right.png'
export default {
  props: ['title'],
  data() {
    return {
      right,
    }
  },
}
</script>

<style scoped>
.outer-all {
  width: 100%;
  background-color: #f9f1e7;
}
.main {
  display: flex;
  height: 10rem;
  max-width: 124rem;
  align-items: center;
  /* padding: 0 10rem; */
  margin: 0 auto;
}
.left {
  display: flex;
  align-items: center;
  gap: 2rem;
  border-right: 2px solid #9f9f9f;
  padding-right: 2.4rem;
}
img {
  width: 1.6rem;
  height: 1.6rem;
}
a {
  text-decoration: none;
  font-size: 1.6rem;
  color: #9f9f9f;
}
P {
  font-size: 1.6rem;
  margin-left: 3.4rem;
}
</style>
