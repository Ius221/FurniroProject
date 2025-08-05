<template>
  <div class="outer-div">
    <div class="img-section">
      <div class="img-container">
        <div class="left-img"></div>
        <div class="main-img"></div>
      </div>
    </div>
    <div class="other-info">
      <div class="top-part">
        <div class="title">{{ product.title }}</div>
        <p class="light price">₹{{ product.price.toLocaleString('en-IN') }}</p>
        <div class="icons">
          <img :src="star" alt="" class="icon" />
          <img :src="star" alt="" class="icon" />
          <img :src="star" alt="" class="icon" />
          <img :src="star" alt="" class="icon" />
          <img :src="star" alt="" class="icon" />
        </div>
        <p class="desc">{{ product.description }}</p>
        <div class="size">
          <div class="light">Size</div>
          <div class="sizes">
            <div class="ind-size active">L</div>
            <div class="ind-size">XL</div>
            <div class="ind-size">XS</div>
          </div>
        </div>
        <div class="color">
          <div class="light">Color</div>
          <div class="sizes">
            <div class="ind-color blue"></div>
            <div class="ind-color black"></div>
            <div class="ind-color yellow"></div>
          </div>
        </div>
        <div class="btns">
          <div class="btn" id="add-btn">- 1 +</div>
          <div class="cart-btn btn">Add To Cart</div>
          <div class="compare-btn btn">+ Compare</div>
        </div>
      </div>
      <div class="bottom-part">
        <table>
          <tr>
            <td>SKU</td>
            <td>:</td>
            <td>{{ product.sku }}</td>
          </tr>
          <tr>
            <td>Tags</td>
            <td>:</td>
            <td>{{ product.category.join(', ') }}</td>
          </tr>
          <tr v-if="product.tags">
            <td>Special Tag</td>
            <td>:</td>
            <td>{{ product.tags }}</td>
          </tr>
          <tr>
            <td>Share</td>
            <td>:</td>
            <td class="sm-icons">
              <img class="icon" :src="fb" alt="" />
              <img class="icon" :src="lin" alt="" />
              <img class="icon" :src="twit" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import star from '@/assets/svg/products/star.png'
import fb from '@/assets/svg/products/fb.png'
import lin from '@/assets/svg/products/lin.png'
import twit from '@/assets/svg/products/tweeter.png'
export default {
  props: ['product'],
  data() {
    return { star, fb, lin, twit }
  },
}
</script>

<style scoped>
.outer-div {
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(2, 1fr);
  max-width: 124rem;
  margin: 3.5rem auto;
}
.main-img {
  height: 50rem;
  width: 42.3rem;
  background-color: #f09;
}

/* OTHER INFORMATION TOP PART */
.top-part {
  padding-bottom: 6rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.title {
  font-size: 4.2rem;
}
.price {
  font-size: 2.4rem !important;
}
.icons {
  display: flex;
  gap: 7px;
  margin-top: 1.5rem;
}
.icon {
  width: 1.8rem;
}
.desc {
  font-size: 1.3rem;
  max-width: 42rem;
  margin-top: 1.8rem;
}
.light {
  color: #9f9f9f;
  font-size: 1.4rem;
}
.size {
  margin-top: 2rem;
}
.sizes {
  display: flex;
  gap: 1.6rem;
}
.color {
  margin-top: 2rem;
  gap: 1.8rem;
}
.ind-size {
  width: 3rem;
  height: 3rem;
  background-color: #f9f1e7;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 5px;
  margin-top: 1.4rem;
}
.ind-size:hover {
  background-color: rgba(184, 143, 47, 0.3);
}
.active {
  background-color: #b88e2f !important;
  color: #fff !important;
}
.btns {
  display: flex;
  gap: 1.8rem;
  margin-top: 3.2rem;
}
.btn {
  border: 1px solid #000;
  height: 6.4rem;
  width: 21.5rem;
  display: flex;
  align-items: center;
  border-radius: 1rem;
  transition: all 0.3s;
  font-size: 2rem;
  justify-content: center;
  cursor: pointer;
}
.btn:hover {
  background-color: #f9f1e7;
}
#add-btn {
  width: 12.3rem;
  border-color: #9f9f9f;
}
.ind-color {
  padding: 1.5rem;
  margin-top: 1.2rem;
  cursor: pointer;
  border-radius: 50%;
}
.blue {
  background-color: #816dfa;
}
.black {
  background-color: #000;
}
.yellow {
  background-color: #b88e2f;
}
/* OTHER INFORMATION BOTTOM PART */
.bottom-part {
  padding-top: 4.2rem;
  color: #9f9f9f;
  font-size: 1.6rem;
}
th,
td {
  text-transform: capitalize;
  padding: 2px 6px;
}
.sm-icons {
  display: flex;
  gap: 2.4rem;
}
</style>
