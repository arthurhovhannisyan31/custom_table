// deps
import React from 'react'
import { Provider } from 'react-redux'
// components
import Layout from '_/components/Layout'
import Main from '_/pages/Main'
// helpers
import store from '_/store'

const App: React.FC = () => {
  console.log(process.env)
  return (
    <Provider store={store}>
      <Layout>
        <Main />
      </Layout>
    </Provider>
  )
}

export default App
