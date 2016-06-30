import developmentStore from './store.dev'
import productionStore from './store.prod'

const store = process.env.NODE_ENV === 'development'
  ? developmentStore
  : productionStore

export default store
