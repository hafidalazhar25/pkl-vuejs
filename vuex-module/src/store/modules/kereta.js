import axios from "axios";

const stasiunKereta = {
  namespaced: true,
  state: {
    dataStasions: [],
  },
  getters: {
    getStasions: (state) => state.dataStasions,
  },
  actions: {
    async fetchStasions({ commit }) {
      try {
        const data = await axios.get(
          "https://booking.kai.id/api/stations2"
        );
        commit("SET_STASIONS", data.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
  mutations: {
    SET_STASIONS(state, stasions) {
      state.dataStasions = stasions;
    },
  },
};

export default stasiunKereta;