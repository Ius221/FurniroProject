<template>
  <div>
    <nav>
      <div class="name">
        <img :src="logo" alt="" />
        <span>Furniro</span>
      </div>
      <div class="links">
        <div class="link">
          <router-link to="#"> Home </router-link>
          <router-link to="#"> Shop </router-link>
          <router-link to="#"> About </router-link>
          <router-link to="#"> Contact </router-link>
        </div>
      </div>
      <div class="icons">
        <div class="ind-icon">
          <img :src="user" alt="" />
        </div>
        <div class="ind-icon">
          <img :src="search" alt="" />
        </div>
        <div class="ind-icon">
          <img :src="like" alt="" />
        </div>
        <div class="ind-icon">
          <img :src="cart" alt="" />
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import logo from '@/assets/svg/logo.svg'
import user from '@/assets/svg/user.png'
import search from '@/assets/svg/search.png'
import like from '@/assets/svg/like.png'
import cart from '@/assets/svg/cart.png'
export default {
  data() {
    return {
      logo,
      user,
      search,
      like,
      cart,
    }
  },
}
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 5.4rem;
  padding-right: 10rem;
}
.name span {
  font-size: 3.4rem;
  font-weight: 700;
}
.link {
  display: flex;
  gap: 7.5rem;
}
.icons {
  display: flex;
  gap: 4.5rem;
}
a:link,
a:visited {
  color: inherit;
  text-decoration: none;
  font-size: 1.6rem;
  font-weight: 500;
  padding: 3.8rem 0;
}

.ind-icon img {
  height: 2.8rem;
  width: 2.8rem;
}
</style>
