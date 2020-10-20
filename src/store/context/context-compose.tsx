// deps
import React from 'react'
// components
import TableContainer from '_/store/context/table-context'

// eslint-disable-next-line
// @ts-ignore
const ContextCompose: React.FC = ({ children }) => {
  return [TableContainer].reduceRight(
    (child: React.ReactNode, Container: React.FC) => {
      return <Container>{child}</Container>
    },
    children
  )
}

export default ContextCompose
