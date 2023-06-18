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
  addToFavorites({ commit, state }, id) {
    if (!state.items.find((i) => i.id === id)) {
      commit('addFavorite', id)
    } else {
      commit('removeFavorite', id)
    }
  }
}

// mutations
const mutations = {
  addFavorite(state, id) {
    state.items.push({
      id,
      quantity: 1
    })
  },
  removeFavorite(state, id) {
    state.items = state.items.filter((i) => i.id !== id)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
