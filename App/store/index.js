import { combineReducers, applyMiddleware, compose } from 'redux'
import { reducer as repoReducer } from './repoRedux'
import { reducer as logoReducer } from './logoRedux'
import { reducer as errorReducer } from './errorRedux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { createStore } from 'redux'

// Reactotron Stuff
import Reactotron from 'reactotron-react-native'

// make our root reducer
const rootReducer = combineReducers({
repo: repoReducer,
logo: logoReducer,
error: errorReducer
})

// the logger master switch
const USE_LOGGING = false

// silence these saga-based messages
const SAGA_LOGGING_BLACKLIST = ['EFFECT_TRIGGERED', 'EFFECT_RESOLVED', 'EFFECT_REJECTED']

// create the logger
const logger = createLogger({
  predicate: (getState, { type }) => USE_LOGGING && not(isInArr(type, SAGA_LOGGING_BLACKLIST))
})

// a function which can create our store and auto-persist the data
export default () => {
  // const sagaMiddleware = createSagaMiddleware({
  //     sagaMonitor: Reactotron.createSagaMonitor()
  // })
  const middleware = applyMiddleware(logger)
  const store = createStore(rootReducer, compose(middleware))
  // sagaMiddleware.run(rootSaga)
  return store
}

const isInArr = (string, arr) => {
  const index = arr.indexOf(string)
  if (index < 0) {
    return false
  }
  return true
}

const not = (res) => {
  return !res
}
