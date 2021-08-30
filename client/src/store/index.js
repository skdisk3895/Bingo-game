import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		bingo: 0,
		turn: 1,
		user_1: 0,
		user_2: 0,
		colored_1: [],
		colored_2: [],
		winner: 0,
		finish: false,
	},
	getters: {},
	mutations: {
		colorBingo(state, payload) {
			state.bingo = payload;
		},
		resetColored(state) {
			for (let i = 0; i < 25; i++) {
				state.colored_1[i] = state.colored_2[i] = false;
			}
		},
	},
	actions: {},
	modules: {},
});
