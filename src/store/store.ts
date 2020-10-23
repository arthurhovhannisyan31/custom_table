// deps
import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// helpers
import rootReducer from '_/store/root.reducer'

const composeEnhancers =
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

export const middlewares = [thunk]
const enhancer = composeEnhancers(applyMiddleware(...middlewares))
const store = createStore(rootReducer, enhancer)

export default store

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
