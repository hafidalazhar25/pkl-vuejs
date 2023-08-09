import { createStore } from 'vuex';
import clients from './modules/clients';
import donatur from './modules/donatur';
import transaksi from './modules/transaksi';
import users from './modules/users';
import stasiunKereta from './modules/kereta';
import productStore from './modules/productStore';
import categoryStore from './modules/category';

const store = createStore({
  state: {
    isLoading: false,
  },
  modules: {
    clients,
    donatur,
    transaksi,
    users,
    stasiunKereta,
    productStore,
    categoryStore
  },
});

export default store;
