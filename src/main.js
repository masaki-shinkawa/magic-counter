import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueMaterial from "vue-material";
import VueAnalytics from "vue-analytics";
import "vue-material/dist/vue-material.min.css";
import "./registerServiceWorker";

Vue.config.productionTip = false;

Vue.use(VueMaterial);
Vue.use(VueAnalytics, { id: "UA-136786420-1", router });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
