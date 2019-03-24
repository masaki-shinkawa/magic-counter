import Vue from "vue";
import Vuex from "vuex";
import config from "./config";

Vue.use(Vuex);

export default new Vuex.Store({
  // strictモード
  strict: process.env.NODE_ENV !== "production",

  // 信頼できる唯一の情報源(Single Source of Truth)
  state: {
    counter: {}
  },

  // stateの取得時に加工する処理を書く
  getters: {
    getCounter: state => index => {
      return state.counter[index];
    }
  },

  // 同期的な処理
  // ここでしかstateを更新してはいけない
  mutations: {
    setCounter(state, payload) {
      state.counter[payload.index] = payload.value;
    }
  },

  // 非同期な処理
  // APIの通信やLocalStorageのアクセス等、外部とやり取りするのもここ
  actions: {
    async initializeCounter({ commit }, index) {
      commit("setCounter", { index, value: 0 });
    },
    async incrementCounter({ state, commit }, index) {
      const counter = state.counter[index];
      const updateCounter =
        counter < config.counter.maxValue ? counter + 1 : counter;
      commit("setCounter", { index, value: updateCounter });
    },
    async decrementCounter({ state, commit }, index) {
      const counter = state.counter[index];
      const updateCounter =
        counter > config.counter.minValue ? counter - 1 : counter;
      commit("setCounter", { index, value: updateCounter });
    }
  }
});
