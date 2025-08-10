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
          <div class="container img-container">
            <transition name="slide" mode="out-in">
              <img :src="currentImage" :key="activeDot" alt="" class="main-image" />
            </transition>
            <transition name="slide" mode="out-in">
              <div class="box" :key="activeDot">
                <p class="top">{{ currentImageObj.title }}</p>
                <h3>{{ currentImageObj.desc }}</h3>
              </div>
            </transition>
          </div>
        </div>
        <div class="img2">
          <div class="supporting img-container">
            <transition name="slide" mode="out-in">
              <img :src="supportingImage.img" :key="activeDot + '-support1'" alt="" />
            </transition>
          </div>
          <div class="dots">
            <div
              v-for="(_, index) in images"
              :key="index"
              class="dot"
              :class="{ 'active-dot': activeDot === index + 1 }"
              @click="switchImage(index + 1)"
            ></div>
          </div>
        </div>
        <div class="supporting img-container">
          <transition name="slide" mode="out-in">
            <img :src="thirdImage.img" :key="activeDot + '-support2'" alt="" />
          </transition>
        </div>
        <div class="supporting img-container">
          <transition name="slide" mode="out-in">
            <img :src="fourthImage.img" :key="activeDot + '-support3'" alt="" />
          </transition>
        </div>
      </div>
      <div class="right-arrow" @click="switchNextImage">
        <img :src="right" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import img1 from '@/assets/gallery/img--1.png'
import img2 from '@/assets/gallery/img--2.png'
import img3 from '@/assets/gallery/img--3.png'
import img4 from '@/assets/gallery/img--4.png'
import right from '@/assets/svg/Home/right.png'
export default {
  data() {
    return {
      right,
      activeDot: 1,
      images: [
        { img: img1, title: 'Study Room', desc: 'Mind Peace' },
        { img: img2, title: 'Living Room', desc: 'Luxury Comfort' },
        { img: img3, title: 'Kitchen', desc: 'Cook Zone' },
        { img: img4, title: 'Rest Room', desc: ' Well Comfort' },
      ],
    }
  },
  computed: {
    supportingImage() {
      return this.images[this.activeDot % this.images.length]
    },
    thirdImage() {
      return this.images[(this.activeDot + 1) % this.images.length]
    },
    currentImageObj() {
      return this.images[this.activeDot - 1]
    },
    currentImage() {
      return this.currentImageObj.img
    },
    fourthImage() {
      return this.images[(this.activeDot + 2) % this.images.length]
    },
  },
  methods: {
    switchImage(dotNumber) {
      this.activeDot = dotNumber
    },
    switchNextImage() {
      if (this.activeDot >= this.images.length) {
        this.activeDot = 1
      } else {
        this.activeDot += 1
      }
    },
  },
}
</script>

<style scoped>
/* General Container Styles */
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
  position: relative;
}
.text-content {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2rem;
  /* width: 42rem !important; */
  width: 42rem;
}
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
} /* Image Content Layout
*/
.img-content {
  margin-left: 4.2rem;
  display: flex;
  gap: 2.4rem;
  position: relative;
}
.container {
  overflow: hidden;
  height: 58rem;
  width: 40rem;
}
.supporting {
  overflow: hidden;
  width: 37.2rem;
  height: 48.6rem;
}
img {
  width: 100%;
  height: auto;
  object-fit: cover;
} /* Dots and Pagination */
.dots {
  display: flex;
  gap: 2rem;
  margin-top: 4rem;
}
.dot {
  background-color: #d8d8d8;
  width: 1.1rem;
  height: 1.1rem;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  transition: background 0.25s;
}
.dot:hover {
  background-color: rgba(184, 143, 47, 0.6);
}
.active-dot {
  background-color: #b88e2f !important;
} /* Ring animation effect inside the active dot */
.active-dot::before {
  content: '';
  position: absolute;
  top: -0.8rem;
  left: -0.8rem;
  width: 2.7rem;
  height: 2.7rem;
  border: 2px solid #b88e2f;
  border-radius: 50%;
  box-sizing: border-box;
  z-index: 1;
  background: transparent;
  pointer-events: none;
} /* Main Image */
.main-image {
  width: 100%;
  display: block;
}
.main-img {
  position: relative;
}
/* Vue Transition */
.slide-enter-active,
.slide-leave-active {
  transition:
    transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.3s;
}
.slide-enter-from {
  transform: translateX(30px);
  opacity: 0;
}
.slide-leave-to {
  transform: translateX(-30px);
  opacity: 0;
} /* Box Overlay on Image */
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
h3 {
  font-weight: 600;
  font-size: 2.8rem;
}
.top {
  font-size: 1.6rem;
  color: #616161;
  text-transform: uppercase;
  text-decoration: underline;
} /* Right Arrow */
.right-arrow {
  position: absolute;
  height: 4.8rem;
  width: 4.8rem;
  background-color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0%;
  top: 50%;
  transform: translate(50%, -50%);
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  z-index: 2;
  transition: background 0.2s;
}
.right-arrow:hover {
  background-color: #eee;
}
.right-arrow img {
  width: 2.4rem;
  height: 2.4rem;
  margin-left: 3px;
}
</style>

<style scoped>
@media (max-width: 78em) {
  .contents {
    padding: 0 2.4rem;
  }
  .right-arrow {
    right: 5%;
  }
}
@media (max-width: 44em) {
  .outer-div {
    height: 56rem;
  }
  .contents {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.2rem;
  }
  .img-content {
    display: grid;
    justify-self: center;
    margin: 0;
    grid-template-columns: repeat(2, 1fr);
  }
  .right-arrow,
  .dots {
    display: none;
  }
  .img-container {
    position: relative;
    overflow: hidden;
    width: 20rem;
    height: 20rem;
  }
  h2 {
    font-size: 3.2rem;
  }
  p {
    font-size: 1.4rem;
  }
  .btn {
    padding: 0.8rem 2.6rem;
  }
  .text-content {
    width: auto;
  }
  img {
    position: absolute;
    width: 100%;
  }
  .box {
    display: none;
  }
}

@media (max-width: 36em) {
  p {
    max-width: 38rem;
  }
}

@media (max-width: 480px) {
  .img-container[data-v-85cb7f55] {
    width: 18rem;
    height: 18rem;
  }
  .outer-div {
    height: 46rem;
  }
}
@media (max-width: 375px) {
  h2 {
    max-width: 22rem;
    font-size: 2rem;
  }
  .btn,
  p {
    font-size: 1.2rem;
  }
  .btn {
    padding: 0.8rem 1.8rem;
  }

  .img-container {
    width: 14rem;
    height: 14rem;
  }
}
</style>
