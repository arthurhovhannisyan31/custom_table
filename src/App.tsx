// deps
import React from 'react'
// components
import Layout from '_/components/Layout'
import Table from '_/components/Table'
// helpers
import ContextCompose from '_/store/context/context-compose'

const App: React.FC = () => {
  return (
    <ContextCompose>
      <Layout>
        <Table />
      </Layout>
    </ContextCompose>
  )
}

export default App
