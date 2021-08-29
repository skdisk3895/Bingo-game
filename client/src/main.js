import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

// import { io } from "socket.io-client";

// const socket = io("http://localhost:3000");
// Vue.prototype.$socket = socket;

Vue.config.productionTip = false;

new Vue({
	store,
	router,
	render: h => h(App),
}).$mount("#app");
