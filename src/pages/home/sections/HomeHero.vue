<template>
  <div class="hero-section">
    <img :src="hero" alt="a table image" />
    <div class="box-container">
      <div class="supporting-text">new arrival</div>
      <div class="title">
        discover our <br />
        new collection
      </div>
      <div class="desc">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ut eaque debitis?
      </div>
      <router-link to="/shop/page/1" class="btn">buy now</router-link>
    </div>
  </div>
</template>

<script>
import hero from '@/assets/images/Hero.png'
export default {
  data() {
    return {
      hero,
    }
  },
}
</script>

<style scoped>
.hero-section {
  height: 90vh;
  overflow: hidden;
  position: relative;
}
img {
  position: absolute;
  width: 100%;
  top: -35%;
  z-index: -1;
}
.box-container {
  position: absolute;
  right: 0%;
  top: 50%;
  transform: translate(-10%, -50%);
  width: 64.3rem;
  border-radius: 1rem;
  padding: 5rem 4rem;
  background-color: #fff3e3;
}
.supporting-text {
  text-transform: uppercase;
  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: 1.2px;
  color: #333;
  margin-bottom: 1rem;
}
.title {
  font-size: 5.2rem;
  text-transform: capitalize;
  color: #b88e2f;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 2.8rem;
}
.desc {
  font-size: 1.8rem;
  font-weight: 500;
  color: #333;
}
a {
  text-decoration: none;
  color: inherit;
}
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  color: #fff;
  height: 7.4rem;
  width: 22.2rem;
  border: none;
  background-color: #b88e2f;
  margin-top: 4.6rem;
  font-weight: 800;
  font-size: 1.6rem;
  cursor: pointer;
  letter-spacing: 1.1px;
  transition: all 0.5s;
}
.btn:hover {
  box-shadow: 0 0 30px #b88e2f;
  border-radius: 1rem;
}
</style>

<style scoped>
@media (max-width: 78em) {
  img {
    top: 0%;
  }
  .box-container {
    transform: translate(0%, -50%);
  }
  html {
    font-size: 50%;
  }
}
</style>
