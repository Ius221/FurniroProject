<template>
  <div class="small-gallery">
    <h2>Browse the range</h2>
    <p class="desc">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
    <div class="img-section">
      <div class="section">
        <img :src="dining" alt="" />
        <p class="img-text">Dining</p>
      </div>
      <div class="section">
        <img :src="living" alt="" />
        <p class="img-text">Living</p>
      </div>
      <div class="section">
        <img :src="bedroom" alt="" />
        <p class="img-text">Bedroom</p>
      </div>
    </div>
  </div>
</template>

<script>
import bedroom from '@/assets/images/bedroom.png'
import dining from '@/assets/images/dining.png'
import living from '@/assets/images/living.png'
export default {
  data() {
    return {
      bedroom,
      dining,
      living,
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
  margin: 1.8rem auto 6rem auto;
}
.img-section {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
img {
  border-radius: 1rem;
}
.img-text {
  margin-top: 3rem;
  font-size: 2.4rem;
  font-weight: 600;
}
</style>
