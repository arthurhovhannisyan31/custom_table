// deps
import React from 'react'
import { Provider } from 'react-redux'
// components
import Layout from '_/components/Layout'
import Main from '_/pages/Main'
// helpers
import store from '_/store'
import interceptor from '_/utils/interceptor.service'

interceptor()

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Layout>
        <Main />
      </Layout>
    </Provider>
  )
}

export default App
