import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuetify from "vuetify";
import VueAnalytics from "vue-analytics";
import "vuetify/dist/vuetify.min.css";
import "./registerServiceWorker";

Vue.config.productionTip = false;

Vue.use(Vuetify);
Vue.use(VueAnalytics, { id: "UA-136786420-1", router });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
