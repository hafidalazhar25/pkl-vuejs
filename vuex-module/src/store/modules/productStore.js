import axios from 'axios';
const productStore = {
  namespaced: true,
  state: {
    dataProducts: [],
  },
  getters: {
    // Getters All Product
    getProducts: (state) => state.dataProducts,

    // Getters Single Product
    getProductById: (state) => (productId) => {
      console.log('ProductId:', productId);
      console.log('ProductData:', state.dataProducts);
      const product = state.dataProducts.find((p) => p.id == productId);
      console.log('Product:', product);
      return product;
    },
  },
  actions: {
    // Fetching all data product
    async fetchProducts({ commit }) {
      try {
        const data = await axios.get('https://fakestoreapi.com/products');
        commit('SET_PRODUCTS', data.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    // Fetching single data product
    async fetchSingleProducts({ commit }, productId) {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${productId}`
        );
        commit('SET_SINGLE_PRODUCTS', response.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.dataProducts = products;
    },
    SET_SINGLE_PRODUCTS(state, product) {
      state.singleProduct = product;
    },
  },
};

export default productStore;
