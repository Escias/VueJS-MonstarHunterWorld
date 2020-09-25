import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { CoolSelectPlugin } from 'vue-cool-select'
import 'vue-cool-select/dist/themes/bootstrap.css'
import 'vue-cool-select/dist/themes/material-design.css'

Vue.use(Vuex)
Vue.use(CoolSelectPlugin)

export default new Vuex.Store({
  state: {
    monsters: [],
    selectedMonster: [],
    selectedFirstMonster: [],
    selectedSecondMonster: []
  },
  mutations: {
    SAVE_MONSTERS(state, monsters) {
      state.monsters = monsters;
    },
    SAVE_SELECT_MONSTER(state, selectMonster) {
      state.selectedMonster = selectMonster;
    },
    SAVE_FIRST_MONSTER(state, selectMonster) {
      state.selectedFirstMonster = selectMonster;
    },
    SAVE_SECOND_MONSTER(state, selectMonster) {
      state.selectedSecondMonster = selectMonster;
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
    },
    selectedFirstMonster({commit}, id) {
      axios.get('https://mhw-db.com/monsters/'+id).then(result => {
        commit('SAVE_FIRST_MONSTER', result.data);
      }).catch(error => {
        throw new Error(`API ${error}`);
      });
    },
    selectedSecondMonster({commit}, id) {
      axios.get('https://mhw-db.com/monsters/'+id).then(result => {
        commit('SAVE_SECOND_MONSTER', result.data);
      }).catch(error => {
        throw new Error(`API ${error}`);
      });
    }
  },
  modules: {
  }
})
