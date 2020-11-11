import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

function configureStore (initialState = {}) {
  const middleware = [thunk]
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  return createStore(
    reducer(),
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware)
    )
  )
}

const reduxStore = configureStore(window.REDUX_INITIAL_DATA)

export default reduxStore
