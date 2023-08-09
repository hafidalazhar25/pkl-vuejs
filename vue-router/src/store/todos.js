import { createStore } from 'vuex';

const todosStore = createStore({
  state: {
    // State Tempat penyimpanan sentral data
    title: 'Vuex Store',
    notes: [],
  },
  getters: {
    // Getters adalah fungsi yang digunakan untuk mengambil (get) data dari state
    totalNotes(state) {
      return state.notes.length;
    },
  },
  mutations: {
    //  Mutations adalah fungsi-fungsi yang digunakan untuk mengubah (mutate) state dalam Vuex.
    SAVE_NOTE(state, title) {
      state.notes.push(title);
    },
    DELETE_NOTE(state, index) {
      state.notes.splice(index, 1);
    },
  },
  actions: {

    saveNote({ commit }, title) {
      commit('SAVE_NOTE', title);
    },
    deleteNote({ commit }, index) {
      commit('DELETE_NOTE', index);
    },
  },
});

export default todosStore;
