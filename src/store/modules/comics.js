// initial state
const state = {
  items: []
}

// getters
const getters = {}

// actions
const actions = {
  async getComics({ commit }) {
    try {
      const response = await fetch(
        'https://gateway.marvel.com:443/v1/public/comics?format=comic&apikey=428e3fa12c7a4fe4fff041f6f306cb9c'
      )
      const responseJSON = await response.json()
      commit('setComics', responseJSON.data.results)
    } catch (err) {
      console.log(err)
    }
  }
}

// mutations
const mutations = {
  setComics(state, comics) {
    state.items = comics
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
