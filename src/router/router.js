import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/pages/home/HomePage.vue'
import ShopPage from '@/pages/shop/ShopPage.vue'
import IndvProduct from '@/pages/products/IndvProduct.vue'
import CartPage from '@/pages/other/cart/CartPage.vue'
import RegisterUser from '@/pages/auth/RegisterUser.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/shop/page/:pageNo',
      name: 'shop',
      component: ShopPage,
    },
    {
      path: '/shop/:prodId',
      name: 'Product',
      component: IndvProduct,
    },
    {
      path: '/cart',
      name: 'CartPage',
      component: CartPage,
    },
    {
      path: '/register',
      name: 'register Users',
      component: RegisterUser,
    },

  ],
  scrollBehavior(_, __, savedPosition) {
    if (savedPosition) return { ...savedPosition, behavior: 'smooth' }
    else return { top: 0, behavior: 'smooth' }
  },
})

export default router
