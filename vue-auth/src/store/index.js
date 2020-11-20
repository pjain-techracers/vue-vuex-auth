import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      loggedIn: false,
      data: null
    }
  },
  mutations: {
    setUserSession(state, { logon, userData }) {
      state.user.loggedIn = logon
      state.user.data = userData
    }
  },
  actions: {
    getUser({ commit }, user) {
      console.log(user)
      if (user) {
        commit("setUserSession", { logon: true, userData: user });
      } else {
        commit("setUserSession", { logon: false, userData: null });
      }
    }
  },
  getters: {
    getUser(state) {
      return state.user
    }
  }
})
