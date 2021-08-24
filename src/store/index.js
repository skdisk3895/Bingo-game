import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bingo: 0,
    turn: 1,
    user_1: 0,
    user_2: 0,
  },
  getters: {},
  mutations: {
    colorBingo(state, payload) {
      state.bingo = payload;
    },
  },
  actions: {},
  modules: {},
});
