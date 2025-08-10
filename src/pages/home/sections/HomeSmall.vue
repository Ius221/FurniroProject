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
.section {
  width: 100%;
}
h2 {
  font-size: 3.2rem;
  font-weight: 700;
}
.desc {
  color: #666;
  font-size: 2rem;
  margin: 1.8rem auto 6rem auto;
}
.img-section {
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  grid-template-columns: repeat(3, 1fr);
}
.img-container {
  height: 48rem;
  overflow: hidden;
  position: relative;
  border-radius: 1rem;
  background-color: #f00;
}
img {
  position: absolute;
  top: 0%;
  right: 0%;
  width: 270%;
}

.img-text {
  margin-top: 3rem;
  font-size: 2.4rem;
  font-weight: 600;
}
</style>

<!-- MEDIA QUERIES -->
<style scoped>
@media (max-width: 78em) {
  .small-gallery {
    padding: 0 2.4rem;
  }
}
@media (max-width: 65em) {
  .img-container {
    height: 40rem;
  }
}
@media (max-width: 44em) {
  .img-section {
    flex-direction: column;
    gap: 3rem;
  }

  .img-text {
    margin-top: 1rem;
  }
  img {
    top: -15%;
    width: 110%;
  }
  .img-container {
    height: 34rem;
  }
}
@media (max-width: 480px) {
  .img-container {
    height: 32rem;
  }
  img {
    top: -5%;
    width: 115%;
  }
}
@media (max-width: 375px) {
  .img-container[data-v-a3b0fab5] {
    height: 27rem;
  }
  img {
    width: 125%;
  }
}
</style>
