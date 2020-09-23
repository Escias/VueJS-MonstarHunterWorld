import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    monsters: []
  },
  mutations: {
    SAVE_MONSTERS(state, monsters) {
      state.monsters = monsters;
    }
  },
  actions: {
    loadMonsters({commit}, id) {
      axios.get('https://mhw-db.com/monsters/'+id).then(result => {
        commit('SAVE_MONSTERS', result.data);
      }).catch(error => {
        throw new Error(`API ${error}`);
      });
    }
  },
  modules: {
  }
})
