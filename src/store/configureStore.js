import { createStore, compose, applyMiddleware } from 'redux'

import { rootReducer, initialState } from '../reducers'
import thunk from 'redux-thunk'
import logger from 'redux-logger'


export const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk, logger)
  )
)

