// deps
import Layout from '_/components/Layout/index'
// helpers
import { wrapperSetup, findByAttr } from '_/tests/utils'

const setup = wrapperSetup(Layout)

test('renders without error', () => {
  const layoutContainer = findByAttr(setup(), 'layout-container')
  expect(layoutContainer.length).toBe(1)
})
