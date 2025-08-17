<template>
  <div>
    <nav>
      <div class="name">
        <img :src="logo" alt="" />
        <span>Furniro</span>
      </div>
      <div class="links">
        <div class="link">
          <router-link to="/" class="point-link" :class="{ active: route.path === '/' }"
            >Home</router-link
          >
          <router-link to="/shop/page/1" class="point-link" :class="{ active: isActive('/shop') }"
            >Shop</router-link
          >
          <router-link to="/about" class="point-link" :class="{ active: route.path === '/about' }"
            >About</router-link
          >
          <router-link
            to="/contact"
            class="point-link"
            :class="{ active: route.path === '/contact' }"
            >Contact</router-link
          >
        </div>
      </div>
      <div class="icons">
        <router-link to="">
          <div class="ind-icon">
            <img :src="user" class="sml" alt="" />
          </div>
        </router-link>
        <router-link to="">
          <div class="ind-icon">
            <img :src="search" alt="" />
          </div>
        </router-link>
        <router-link to="">
          <div class="ind-icon">
            <img :src="like" alt="" />
          </div>
        </router-link>
        <router-link to="/cart">
          <div class="ind-icon">
            <img :src="cart" alt="" />
          </div>
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
import logo from '@/assets/svg/header/logo.svg'
import user from '@/assets/svg/header/user.png'
import search from '@/assets/svg/header/search.png'
import like from '@/assets/svg/header/like.png'
import cart from '@/assets/svg/header/cart.png'
import { useRoute } from 'vue-router'
export default {
  data() {
    return {
      logo,
      user,
      search,
      like,
      cart,
      route: useRoute(),
    }
  },
  methods: {
    isActive(base) {
      return this.route.path === base || this.route.path.startsWith(base + '/')
    },
  },
}
</script>

<style scoped>
.name {
  display: flex;
  align-items: center;
  gap: 1.2rem;
}
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
.point-link {
  color: inherit;
  text-decoration: none;
  font-size: 1.6rem;
  font-weight: 500;
  padding: 3.8rem 0;
  transition: all 0.3s ease;
  display: inline-block;
  position: relative;
}

.point-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 35px;
  width: 0%;
  height: 2px;
  transition: all 0.3s ease;
  background-color: #b88e2f;
}
.point-link.active::after,
.point-link:hover::after {
  width: 100%;
}

.active,
.point-link:hover {
  transform: scale(1.1);
  color: #b88e2f;
}

.ind-icon img {
  height: 2.8rem;
  width: 2.8rem;
}
.sml {
  height: 2.4rem !important;
  width: 2.4rem !important;
  margin-top: 0.4rem;
}
</style>
<style scoped>
@media (max-width: 65em) {
  .point-link::after {
    bottom: 30px;
  }
  nav {
    padding-left: 3.4rem;
    padding-right: 5rem;
  }
}

@media (max-width: 53em) {
  .point-link::after {
    bottom: 25px;
  }
  .link {
    gap: 5.5rem;
  }
  .icons {
    gap: 2.4rem;
  }

  .name span {
    font-size: 3rem;
  }
  .name img {
    width: 5.5rem;
  }
}

@media (max-width: 44em) {
  nav {
    display: none;
  }
}
</style>
