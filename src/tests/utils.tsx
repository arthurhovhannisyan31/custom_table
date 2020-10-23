// deps
import React from 'react'
import { shallow } from 'enzyme'

// todo types
export const findByAttr = (wrapper: any, attr: string) => wrapper.find(attr)
// ) => wrapper.find(`[data-test='${attr}']`)

export const wrapperSetup = (Component: React.FC) => (props = {}) =>
  shallow(<Component {...props} />)
