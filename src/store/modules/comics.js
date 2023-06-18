// initial state
const state = {
  items: [],
  loading: false
}

// getters
const getters = {
  getComic: (state) => (id) => {
    const item = state.items.find((i) => i.id == id)
    return item
  }
}

// actions
const actions = {
  async getComics({ commit }) {
    try {
      commit('setLoading', true)
      const response = await fetch(
        'https://gateway.marvel.com:443/v1/public/comics?format=comic&apikey=428e3fa12c7a4fe4fff041f6f306cb9c'
      )
      const responseJSON = await response.json()
      commit('setComics', responseJSON.data.results)
    } catch (err) {
      console.log(err)
    } finally {
      commit('setLoading', false)
    }
  }
}

// mutations
const mutations = {
  setComics(state, comics) {
    state.items = comics
  },
  setLoading(state, loading) {
    state.loading = loading
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
