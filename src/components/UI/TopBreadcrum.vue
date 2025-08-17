<template>
  <div class="bread-crumming">
    <img class="bg-img" :src="rect" alt="" />
    <img :src="logo" alt="" class="logo" />
    <h2>
      <slot name="headCurr"></slot>
    </h2>
    <div class="breadcrum">
      <router-link class="back-link" to="/">Home</router-link>
      <img class="arrow" :src="right" alt="" />
      <!-- <router-link class="curr-link" to="#"> -->
      <p class="curr-link">
        <slot name="curr"></slot>
      </p>
      <!-- </router-link> -->
    </div>
  </div>
</template>

<script>
import logo from '@/assets/svg/header/logo.svg'
import rect from '@/assets/images/Rectangle.png'
import right from '@/assets/svg/Home/right.png'
export default {
  data() {
    return {
      rect,
      right,
      logo,
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
.breadcrum {
  display: flex;
  align-items: center;
  gap: 1.2rem;
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
p {
  width: 0% !important;
}
.back-link {
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
</style>
