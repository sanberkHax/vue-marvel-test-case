const state = {
  items: []
}

// getters
const getters = {
  favoritesCount: (state) => {
    return state.items.reduce((total, comic) => {
      return total + comic.quantity
    }, 0)
  }
}

// actions
const actions = {
  addToFavorites({ commit }, comic) {
    commit('addFavorite', { id: comic.id })
  }
}

// mutations
const mutations = {
  addFavorite(state, { id }) {
    state.items.push({
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
