import { createStore } from 'vuex';

import sofaModule from './modules/sofas/index.js';
import cartFunction from './modules/cart/index.js';

const store = createStore({
  modules: {
    sofa: sofaModule,
    cart: cartFunction,
  }
})

export default store;
