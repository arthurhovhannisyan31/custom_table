// deps
import React from 'react'
// components
import TableHead from '_/components/Table/components/TableHead'
import TableBody from '_/components/Table/components/TableBody'
// helpers
import { columns, mock } from '_/components/Table/helpers'
import '_/components/Table/style.scss'

// todo move context to store

interface ITableContext {
  columnsOrder: string[]
  handleSetColumnsOrder: (props: ISetColumnsOrderProps) => void
  dragged: string
  setDragged: React.Dispatch<React.SetStateAction<string>>
}

interface ISetColumnsOrderProps {
  source: string
  target: string
}

const tableContextInitValue = {
  columnsOrder: [],
  handleSetColumnsOrder: () => {},
  dragged: '',
  setDragged: () => {},
}

export const TableContext = React.createContext<ITableContext>(
  tableContextInitValue
)

const Table: React.FC = () => {
  const columnsInitOrder = columns.map((el) => el.name)

  const [dragged, setDragged] = React.useState('')
  const [columnsOrder, setColumnsOrder] = React.useState<string[]>(
    columnsInitOrder
  )
  // todo opt to handler
  const handleSetColumnsOrder = (props: ISetColumnsOrderProps) => {
    // console.log(props)
    const draggedIdx = columnsOrder.findIndex(
      (column) => column === props.source
    )
    const columnIdx = columnsOrder.findIndex(
      (column) => column === props.target
    )
    // console.log(draggedIdx, columnIdx)
    const newColumnsOrder = [...columnsOrder]
    newColumnsOrder.splice(draggedIdx, 1)
    newColumnsOrder.splice(columnIdx, 0, props.source)
    // console.log(columnsInitOrder)
    // console.log(newColumnsOrder)
    setColumnsOrder(newColumnsOrder)
  }

  return (
    <TableContext.Provider
      value={{
        columnsOrder,
        handleSetColumnsOrder,
        dragged,
        setDragged,
      }}
    >
      <div className="container">
        <table className="table">
          <TableHead columns={columns} columnsOrder={columnsOrder} />
          <TableBody rows={mock} columnsOrder={columnsOrder} />
        </table>
      </div>
    </TableContext.Provider>
  )
}

export default Table
