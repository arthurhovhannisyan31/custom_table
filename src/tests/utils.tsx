// deps
import React from 'react'
import { shallow } from 'enzyme'
// import { createStore, applyMiddleware } from 'redux'
// helpers
// import rootReducer from '_/store/root.reducer'
// import { RootState, middlewares } from '_/store/store'

// export const storeFactory = (initState: RootState) => {
//   const enhancer = applyMiddleware(...middlewares)
//   return createStore(rootReducer, enhancer)
// }

// todo fix types
export const findByAttr = (wrapper: any, attr: string) => wrapper.find(attr)

export const wrapperSetup = (Component: React.FC) => (props = {}) =>
  shallow(<Component {...props} />)
