import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      count: 666,
    }
  },
  mutations: {
    add(state) {
      state.count++
    },
  },
  actions: {
    asyncAdd({ commit }) {
      setTimeout(() => {
        commit('add')
      }, 2000)
    },
  },
  getters: {
    double(state) {
      return state.count * 2
    },
  },
})

export default store
