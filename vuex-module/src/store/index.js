import { createStore } from 'vuex';
import clients from './modules/clients';
import donatur from './modules/donatur';
import transaksi from './modules/transaksi';

const store = createStore({
  state: {
    isLoading: false,
  },
  modules: {
    clients,
    donatur,
    transaksi,
  },
});

export default store;
