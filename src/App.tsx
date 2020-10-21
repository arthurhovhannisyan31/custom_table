// deps
import React from 'react'
// components
import Layout from '_/components/Layout'
import Main from '_/pages/Main'
// helpers
import ContextCompose from '_/store/context/context-compose'

const App: React.FC = () => {
  return (
    <ContextCompose>
      <Layout>
        <Main />
      </Layout>
    </ContextCompose>
  )
}

export default App
