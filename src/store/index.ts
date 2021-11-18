import { createStore } from 'vuex'

export default createStore({
  state: {
    playerId: 20210001
  },
  mutations: {
    setFamePlayerId (state, payload) {
      state.playerId = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
