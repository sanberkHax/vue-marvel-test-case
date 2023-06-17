import { createStore, createLogger } from 'vuex'
import favorites from './modules/favorites'
import comics from './modules/comics'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    favorites,
    comics
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
