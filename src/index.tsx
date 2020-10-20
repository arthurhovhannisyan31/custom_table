// deps
import React from 'react'
import { render } from 'react-dom'
// components
import App from '_/App'
// helpers
import '_/styles/index.scss'

const renderApp = () =>
  render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  )

renderApp()
// eslint-disable-next-line
// @ts-ignore
if (module.hot) {
  // eslint-disable-next-line
  // @ts-ignore
  module.hot.accept('./App', renderApp)
}
