import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    monsters: [],
    selectedMonster: []
  },
  mutations: {
    SAVE_MONSTERS(state, monsters) {
      state.monsters = monsters;
    },
    SAVE_SELECT_MONSTER(state, selectMonster) {
      state.selectedMonster = selectMonster;
    }
  },
  actions: {
    loadMonsters({commit}) {
      axios.get('https://mhw-db.com/monsters/').then(result => {
        commit('SAVE_MONSTERS', result.data);
      }).catch(error => {
        throw new Error(`API ${error}`);
      });
    },
    selectedMonsters({commit}, id) {
      axios.get('https://mhw-db.com/monsters/'+id).then(result => {
        commit('SAVE_SELECT_MONSTER', result.data);
      }).catch(error => {
        throw new Error(`API ${error}`);
      });
    }
  },
  modules: {
  }
})
