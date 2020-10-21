// deps
import React from 'react'
// components
import TableHead from '_/components/Table/components/TableHead'
import TableBody from '_/components/Table/components/TableBody'
import Pagination from '_/components/Table/components/Pagination'
// helpers
import { columns, mock, rowsPerPageOptions } from '_/components/Table/helpers'
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

  // useState
  const [dragged, setDragged] = React.useState<string>('')
  const [columnsOrder, setColumnsOrder] = React.useState<string[]>(
    columnsInitOrder
  )
  const [page, setPage] = React.useState<number>(1)
  const [rowsPerPage, setRowsPerPage] = React.useState<number>(
    rowsPerPageOptions[0]
  )
  const totalCount = 47

  // useCallback
  const handleSetColumnsOrder = React.useCallback(
    (props: ISetColumnsOrderProps) => {
      const draggedIdx = columnsOrder.findIndex(
        (column) => column === props.source
      )
      const columnIdx = columnsOrder.findIndex(
        (column) => column === props.target
      )
      const newColumnsOrder = [...columnsOrder]
      newColumnsOrder.splice(draggedIdx, 1)
      newColumnsOrder.splice(columnIdx, 0, props.source)
      setColumnsOrder(newColumnsOrder)
    },
    [columnsOrder]
  )
  const handleChangePage = React.useCallback(
    (val: number) => {
      setPage(val)
    },
    [setPage]
  )
  const handleChangeRowsPerPage = React.useCallback(
    (val: number) => {
      setRowsPerPage(val)
    },
    [setRowsPerPage]
  )

  return (
    <TableContext.Provider
      value={{
        columnsOrder,
        handleSetColumnsOrder,
        dragged,
        setDragged,
      }}
    >
      <div className="table-container">
        <table className="table-content">
          <TableHead columns={columns} columnsOrder={columnsOrder} />
          <TableBody rows={mock} columnsOrder={columnsOrder} />
        </table>
        <Pagination
          rowsPerPageOptions={rowsPerPageOptions}
          count={totalCount}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </div>
    </TableContext.Provider>
  )
}

export default Table
