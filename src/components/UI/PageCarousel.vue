<template>
  <div class="outer-div">
    <div class="content">
      <div class="data" v-for="(data, ind) in datas" :key="ind">
        <img :src="data.img" alt="" />
        <div class="text-content">
          <h3>{{ data.head }}</h3>
          <p>{{ data.para }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from '@/assets/svg/shop/trophy.png'
import img2 from '@/assets/svg/shop/tick.png'
import img3 from '@/assets/svg/shop/shipping.png'
import img4 from '@/assets/svg/shop/customer.png'
export default {
  data() {
    return {
      img1,
      img2,
      img3,
      img4,
      datas: [
        { img: img1, head: 'High Quality', para: 'crafted from top materials' },
        { img: img2, head: 'Warranty Protection', para: 'Over 2 years' },
        { img: img3, head: 'Free Shipping', para: 'Order over 150 $' },
        { img: img4, head: '24 / 7 Support', para: 'Dedicated support' },
      ],
    }
  },
}
</script>

<style scoped>
.outer-div {
  background-color: #faf3ea;
  width: 100%;
}
.text-content {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.content {
  display: flex;
  justify-content: center;
  gap: 5.5rem;
  padding: 10rem 5.4rem;
}
.data {
  display: flex;
  gap: 1rem;
}
h3 {
  font-size: 2.4rem;
  font-weight: 600;
}
p {
  font-size: 2rem;
  font-weight: 500;
  color: #898989;
}
img {
  height: 6rem;
  width: 6rem;
}
</style>
