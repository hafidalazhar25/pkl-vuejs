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

    getProductByCategory: (state) => (productCategory) => {
      const produk = state.dataProducts.filter(
        (p) => p.category == productCategory
      );


      return produk;
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
    async fetchFilterCategory({commit}, productCategory) {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/category/${productCategory}`
        )
        console.log(response.data);
        commit('SET_FILTER_PRODUCT', response.data)
      } catch (error) {
        alert(error)
        console.error(error);
      }
    }
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.dataProducts = products;
    },
    SET_SINGLE_PRODUCTS(state, product) {
      state.singleProduct = product;
    },
    SET_FILTER_PRODUCT(state, product) {
      state.getProductByCategory = product
    }
  },
};

export default productStore;
