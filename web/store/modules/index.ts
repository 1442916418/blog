const state = {
  data: {}
}

const mutations = {
  setData(state, payload) {
    state.data = payload.data
  }
}

const actions = {
  initialData({ commit }, { payload }) {
    commit('setData', payload)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
