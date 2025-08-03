import { createStore } from 'vuex';

import sofaModule from './modules/sofas/index.js';

const store = createStore({
  modules: {
    sofa: sofaModule,
  }
})

export default store;
