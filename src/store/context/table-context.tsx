// deps
import React from 'react'

interface ITableContext {
  columnsOrder: string[]
  handleSetColumnsOrder: (props: ISetColumnsOrderProps) => void
}

interface ISetColumnsOrderProps {
  source: string
  target: string
}

const tableContextInitValue = {
  columnsOrder: [],
  handleSetColumnsOrder: () => {},
}

const TableContext = React.createContext<ITableContext>(tableContextInitValue)

const TableContextContainer: React.FC = ({ children }) => {
  const [columnsOrder, setColumnsOrder] = React.useState<string[]>([])

  const handleSetColumnsOrder = (props: ISetColumnsOrderProps) => {
    setColumnsOrder(columnsOrder)
    console.log(props)
  }

  return (
    <TableContext.Provider
      value={{
        columnsOrder,
        handleSetColumnsOrder,
      }}
    >
      {children}
    </TableContext.Provider>
  )
}

export { TableContextContainer as default, TableContext }
