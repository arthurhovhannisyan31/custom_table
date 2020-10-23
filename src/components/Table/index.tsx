// deps
import React from 'react'
// components
import TableHead from '_/components/Table/components/TableHead'
import TableBody from '_/components/Table/components/TableBody'
import Pagination from '_/components/Table/components/Pagination'
import NoData from '_/components/Table/components/NoData'
// helpers
import { IColumn, TRow, EFilterOrder } from '_/components/Table/types'
import '_/components/Table/style.scss'

interface ITableContext {
  columnsOrder: string[]
  sort: Record<string, string | EFilterOrder>
  handleSetSort: (val: Record<string, string | EFilterOrder>) => void
  handleSetColumnsOrder: (props: ISetColumnsOrderProps) => void
  dragged: string
  setDragged: React.Dispatch<React.SetStateAction<string>>
  over: string
  setOver: React.Dispatch<React.SetStateAction<string>>
  page: number
  onPageChange: (val: number) => void
  rowsPerPage: number
  onRowsPerPageChange: (val: number) => void
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
  over: '',
  setOver: () => {},
  sort: {},
  handleSetSort: () => {},
  page: 0,
  onPageChange: () => {},
  rowsPerPage: 0,
  onRowsPerPageChange: () => {},
}

export const TableContext = React.createContext<ITableContext>(
  tableContextInitValue
)

interface IProps {
  loading: boolean
  columnsOrder: string[]
  onChangeColumnsOrder: (arr: string[]) => void
  rows: TRow[]
  columns: IColumn[]
  rowsPerPageOptions: number[]
  count: number
  page: number
  onPageChange: (val: number) => void
  rowsPerPage: number
  onRowsPerPageChange: (val: number) => void
  sort: Record<string, string | EFilterOrder>
  handleSetSort: (val: Record<string, string | EFilterOrder>) => void
}

const Table: React.FC<IProps> = ({
  loading,
  columnsOrder,
  onChangeColumnsOrder,
  rowsPerPageOptions,
  rows,
  columns,
  count,
  sort,
  handleSetSort,
  page,
  onPageChange,
  rowsPerPage,
  onRowsPerPageChange,
}) => {
  // useState
  const [dragged, setDragged] = React.useState<string>('')
  const [over, setOver] = React.useState<string>('')

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
      onChangeColumnsOrder(newColumnsOrder)
    },
    [columnsOrder, onChangeColumnsOrder]
  )

  return (
    <TableContext.Provider
      value={{
        columnsOrder,
        handleSetColumnsOrder,
        dragged,
        setDragged,
        over,
        setOver,
        sort,
        handleSetSort,
        page,
        onPageChange,
        rowsPerPage,
        onRowsPerPageChange,
      }}
    >
      <div className="table-container">
        <div className="table-content">
          <table>
            <TableHead columns={columns} />
            <TableBody rows={rows} columns={columns} count={count} />
          </table>
        </div>
        {rows.length ? (
          <Pagination rowsPerPageOptions={rowsPerPageOptions} count={count} />
        ) : (
          !loading && <NoData />
        )}
      </div>
    </TableContext.Provider>
  )
}

export default Table
