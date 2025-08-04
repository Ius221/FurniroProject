<template>
  <div class="outer-div">
    <div class="contents">
      <div class="text-content">
        <h2>50+ Beautiful rooms inspiration</h2>
        <p>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
        <router-link to="#" class="btn">Explore More</router-link>
      </div>
      <div class="img-content">
        <div class="main-img">
          <div class="container">
            <img :src="first" alt="" />
            <div class="box">
              <p class="top">Study Room</p>
              <h3>Mind Peace</h3>
            </div>
          </div>
        </div>
        <div class="second">
          <div class="supporting">
            <img :src="second" alt="" />
          </div>
          <div class="dots">
            <div class="dot active-dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
        </div>
        <div class="supporting">
          <img :src="third" alt="" />
        </div>
        <div class="supporting">
          <img :src="first" alt="" />
        </div>
        <div class="supporting">
          <img :src="first" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import first from '@/assets/gallery/img--1.png'
import second from '@/assets/gallery/img--2.png'
import third from '@/assets/gallery/img--3.png'
import fourth from '@/assets/gallery/img--4.png'
export default {
  data() {
    return { first, second, third, fourth }
  },
}
</script>

<style scoped>
/* left content */
.outer-div {
  background-color: #fcf8f3;
  width: 100%;
  height: 67rem;
  overflow-x: hidden;
}
.contents {
  max-width: 124rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  height: 100%;
}
.text-content {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2rem;
  width: 42rem !important;
}
/* 8825238566 */
h2 {
  color: #3a3a3a;
  font-size: 4rem;
  line-height: 1.3;
  font-weight: 700;
}
p {
  color: #616161;
  font-size: 1.6rem;
}

.btn {
  color: #fff;
  font-size: 1.6rem;
  font-weight: 500;
  padding: 1.2rem 3.6rem;
  background-color: #b88e2f;
  transition: all 0.5s;
}
.btn:hover {
  box-shadow: 0 0 30px #b88e2f;
  border-radius: 1rem;
}
a {
  text-decoration: none;
  color: inherit;
}

.img-content {
  margin-left: 4.2rem;
  display: flex;
  gap: 2.4rem;
}
.container {
  background-color: #f00;
  overflow: hidden;
  height: 58rem;
  width: 40rem;
}
.supporting {
  overflow: hidden;
  width: 37.2rem;
  height: 48.6rem;
}
.dots {
  display: flex;
  gap: 2rem;
  margin-top: 4rem;
}
.dot {
  background-color: #d8d8d8;
  height: 1.1rem;
  width: 1.1rem;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
}
.dot:hover {
  background-color: rgba(184, 143, 47, 0.6);
}
.active-dot {
  background-color: #b88e2f !important;
}
.active-dot::before {
  content: '';
  position: absolute;
  top: -8px;
  left: -8px;
  width: 2.7rem; /* 14+4*2 */
  height: 2.7rem; /* 14+4*2 */
  border: 2px solid #b88e2f; /* Ring color */
  border-radius: 50%;
  box-sizing: border-box;
  z-index: 1;
}
img {
  width: 100%;
}
</style>

<style scoped>
.main-img {
  position: relative;
}
h3 {
  font-weight: 600;
  font-size: 2.8rem;
}
.top {
  font-size: 1.6rem;
  color: #616161;
  text-transform: uppercase;
  text-decoration: underline;
}
.box {
  position: absolute;
  height: 13rem;
  width: 35.6rem;
  bottom: 7%;
  left: 6%;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
