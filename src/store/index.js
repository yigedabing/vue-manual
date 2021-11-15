import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});

export default store;
