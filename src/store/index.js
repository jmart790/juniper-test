import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    salesRep: {},
    isLoading: false,
    error: null
  },
  mutations: {
    SET_PRODUCTS(state, value) {
      state.products = value;
    },
    SET_SALES_REP(state, value) {
      state.salesRep = value;
    },
    SET_IS_LOADING(state, value) {
      state.isLoading = value;
    },
    SET_ERROR(state, value) {
      state.error = value;
    }
  },
  getters: {
    products: state => state.products,
    salesRep: state => state.salesRep,
    isLoading: state => state.isLoading,
    error: state => state.error,
  },
  actions: {
    async getStoreData({ commit }) {
      commit('SET_IS_LOADING', true);
      const productsUrl = "https://raw.githubusercontent.com/RepZio/TestApplication/master/test.json"
      await fetch(productsUrl).then(async (response) => {
        const { SalesRep, items} = await response.json();
        const products = items.map(product => {
          const rating = Number((Math.floor(Math.random() * (1000 - 100) + 100) / 100 / 2).toFixed(1));
          const totalRatings = Math.ceil(Math.random() * (500 - 1) + 1);
          return { ...product, rating, totalRatings }
        })
        commit('SET_PRODUCTS', products);
        commit('SET_SALES_REP', SalesRep);
      }).catch(error => commit('SET_ERROR', error));
      commit('SET_IS_LOADING', false);
    },
  },
})
