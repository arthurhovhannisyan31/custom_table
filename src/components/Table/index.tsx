// deps
import React from 'react'
// components
import TableHead from '_/components/Table/components/TableHead'
import TableBody from '_/components/Table/components/TableBody'
import Pagination from '_/components/Table/components/Pagination'
// helpers
import { columns, mock, rowsPerPageOptions } from '_/components/Table/helpers'
import { IFilter } from '_/components/Table/types'
import '_/components/Table/style.scss'

interface ITableContext {
  columnsOrder: string[]
  handleSetColumnsOrder: (props: ISetColumnsOrderProps) => void
  dragged: string
  setDragged: React.Dispatch<React.SetStateAction<string>>
  filter: IFilter
  handleUpdateFilter: (props: Partial<IFilter>) => void
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
  filter: {
    page: 0,
    rowsPerPage: 0,
    sort: [],
  },
  handleUpdateFilter: () => {},
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

  const [filter, setFilter] = React.useState<IFilter>({
    page: 1,
    rowsPerPage: rowsPerPageOptions[0],
    sort: [],
  })
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

  const handleUpdateFilter = (props: Partial<IFilter>) =>
    setFilter((val) => ({ ...val, ...props }))

  return (
    <TableContext.Provider
      value={{
        columnsOrder,
        handleSetColumnsOrder,
        dragged,
        setDragged,
        filter,
        handleUpdateFilter,
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
          rowsPerPage={filter.rowsPerPage}
          page={filter.page}
          handleUpdateFilter={handleUpdateFilter}
        />
      </div>
    </TableContext.Provider>
  )
}

export default Table
