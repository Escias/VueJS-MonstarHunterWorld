import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from "vue-axios";

Vue.use(Vuex)
Vue.use(VueAxios, axios)

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
    loadMonsters({commit}) {
      axios.get('https://mhw-db.com/monsters').then(result => {
        commit('SAVE_MONSTERS', result.data);
      }).catch(error => {
        throw new Error(`API ${error}`);
      });
    }
  },
  modules: {
  }
})
