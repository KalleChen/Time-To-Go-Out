import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import initialState from './initialState'
import rootReducer from '../reducers'
import rootSaga from '../sagas'

export default function configureStore () {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware)
  )
  sagaMiddleware.run(rootSaga)
  return store
}
