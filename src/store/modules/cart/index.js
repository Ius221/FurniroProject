
export default {
  namespaced: true,
  state() {
    return {
      cartProd: [

      ],
    }
  },
  mutations: {
    addToCart(state, { id, quantity }) {
      // Check if item already exists in cart
      const existingItem = state.cartProd.find(item => item.id === id);

      if (existingItem) {
        // If item exists, update the quantity
        existingItem.quantity = quantity;
      } else {
        // If item doesn't exist, add new item to cart
        state.cartProd.push({
          id: id,
          quantity: quantity
        });
      }
    }
  },
  getters: {
    getCartTotalQuantity(state) {
      return state.cartProd.reduce((total, item) => {
        return total + parseInt(item.quantity);
      }, 0);
    },

    getCart(state) {
      return state.cartProd;
    }
  },
  actions: {}
}
