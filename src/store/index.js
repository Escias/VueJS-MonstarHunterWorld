import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    async getMonster ({ commit }) {
      const monster = await axios.get('https://mhw-db.com/monsters')
      commit('MONSTER', monster)
    }
  },
  modules: {
  }
})
