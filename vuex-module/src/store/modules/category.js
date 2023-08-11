import axios from 'axios';
const categoryStore = {
  namespaced: true,
  state: {
    dataCategory: [],
  },
  getters: {
    // Getters All Product
    getCategory: (state) => state.dataCategory,
  },
  actions: {
    // Fetching all data product
    async fetchCategory({ commit }) {
      try {
        const data = await axios.get(
          'https://fakestoreapi.com/products/categories'
        );
        commit('SET_CATEGORY', data.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
      async fetchProductCategory({ commit }, categoryName) {
        try {
          const responseCategory = await axios.get(
            `https://fakestoreapi.com/products/${categoryName}`
          );
          console.log(responseCategory.data);
          commit('SET_PRODUCT_CATEGORY', responseCategory.data);
        } catch (error) {
          alert(error);
          console.log(error);
        }
      },
  },
  mutations: {
    SET_CATEGORY(state, category) {
      state.dataCategory = category;
    },
    SET_PRODUCT_CATEGORY(state, categories) {
      state.categoryName = categories
    }
  },
};

export default categoryStore;
