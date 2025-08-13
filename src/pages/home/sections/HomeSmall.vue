<template>
  <div class="small-gallery">
    <h2>Browse the range</h2>
    <p class="desc">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
    <div class="img-section">
      <div class="section" v-for="(val, ind) in imgContent" :key="ind">
        <div class="img-container">
          <img :src="this[`img__${ind + 1}`]" alt="" />
        </div>
        <p class="img-text">{{ val }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import img__1 from '@/assets/images/img--1.png'
import img__2 from '@/assets/images/img--2.png'
import img__3 from '@/assets/images/img--3.png'
export default {
  data() {
    return {
      img__1,
      img__2,
      img__3,
      imgContent: ['Dining', 'Living', 'Bedroom'],
    }
  },
}
</script>

<style scoped>
.small-gallery {
  max-width: 124rem;
  margin: 0 auto;
  text-align: center;
}

h2 {
  font-size: 3.2rem;
  font-weight: 700;
}
.desc {
  color: #666;
  font-size: 2rem;
  width: 28rem;
  margin: 1.8rem auto 6rem auto;
}
.img-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
}
.img-container {
  height: 18rem;
  width: 36rem;
  overflow: hidden;
  position: relative;
  border-radius: 1rem;
  background-color: #f00;
}
img {
  position: absolute;
  top: 0%;
  right: 0%;
  width: 100%;
}

.img-text {
  margin-top: 1.2rem;
  font-size: 2.4rem;
  font-weight: 600;
}
</style>

<style scoped>
@media (min-width: 320px) {
  .img-container {
    width: 48rem;
    height: 24rem;
  }
}

@media (min-width: 480px) {
  .img-section {
    flex-direction: row;
  }
  .img-container {
    width: 22rem;
    height: 32rem;
  }
  img {
    width: 300%;
  }
}
@media (min-width: 600px) {
  .img-container {
    width: 26rem;
    height: 38rem;
  }
  .desc {
    width: 28rem;
  }
}

@media (min-width: 768px) {
  .img-container {
    width: 32rem;
    height: 48rem;
  }
}

@media (min-width: 1024px) {
  .img-container {
    width: 40rem;
    height: 58rem;
  }
  .img-section {
    gap: 2rem;
  }
  .desc {
    width: 36rem;
  }
}
@media (min-width: 1246px) {
  .img-container {
    width: 39.8rem;
    height: 48rem;
  }
  .desc {
    width: 44rem;
  }
}
</style>
