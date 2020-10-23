// components
import Layout from '_/components/Layout'
// helpers
import { findByAttr, wrapperSetup } from '_/tests/utils'

const setup = wrapperSetup(Layout)
test('renders without error', () => {
  const layoutContainer = findByAttr(setup(), '.layout-container')
  expect(layoutContainer.length).toBe(1)
})
