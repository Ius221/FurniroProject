<template>
  <div class="outer-all">
    <div class="img-container">
      <img class="bg-img" :src="rect" alt="" />
      <h2>Shop</h2>
      <div class="breadcrum">
        <router-link class="back-link" to="/">Home</router-link>
        <img class="arrow" :src="right" alt="" />
        <router-link class="curr-link" to="#">Shop</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import rect from '@/assets/images/Rectangle.png'
import right from '@/assets/svg/right.png'
export default {
  data() {
    return {
      rect,
      right,
    }
  },
}
</script>

<style scoped>
.img-container {
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
  bottom: -2px; /* adjust as needed */
  width: 0;
  height: 2px; /* thickness of underline */
  background-color: currentColor;
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
</style>
