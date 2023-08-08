import { createStore } from 'vuex';
import clients from './modules/clients';
import donatur from './modules/donatur';
import transaksi from './modules/transaksi';
import users from './modules/users'

const store = createStore({
  state: {
    isLoading: false,
  },
  modules: {
    clients,
    donatur,
    transaksi,
    users
  },
});

export default store;
