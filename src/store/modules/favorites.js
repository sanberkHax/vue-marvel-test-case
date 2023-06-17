const state = {
  favorites: []
}

// getters
const getters = {}

// actions
const actions = {
  addToFavorites({ commit }, comic) {
    commit('addFavorite', { id: comic.id })
  }
}

// mutations
const mutations = {
  addFavorite(state, { id }) {
    state.favorites.push({
      id,
      quantity: 1
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
