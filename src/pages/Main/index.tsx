// deps
import React from 'react'
// components
import Table from '_/components/Table'
// helpers
import { columns, mock, rowsPerPageOptions } from '_/components/Table/helpers'
import '_/pages/Main/style.scss'
import { EFilterOrder } from '_/store/types'

const Main: React.FC = () => {
  // useMemo
  const columnsInitOrder = React.useMemo(() => columns.map((el) => el.name), [])
  // useState
  const [page, setPage] = React.useState<number>(1)
  const [columnsOrder, setColumnsOrder] = React.useState<string[]>(
    columnsInitOrder
  )
  const [rowsPerPage, setRowsPerPage] = React.useState<number>(
    rowsPerPageOptions[0]
  )
  const [sort, setSort] = React.useState<Record<string, string | EFilterOrder>>(
    {}
  )

  // useCallback
  const handleChangeColumnsOrder = React.useCallback(
    (arr: string[]) => setColumnsOrder(arr),
    []
  )
  const handleSetPage = React.useCallback((val: number) => setPage(val), [])
  const handleSetRowsPerPage = React.useCallback(
    (val: number) => setRowsPerPage(val),
    []
  )
  const handleSetSort = React.useCallback(
    (val: Record<string, string | EFilterOrder>) => setSort(val),
    []
  )

  const totalCount = 47

  return (
    <div className="main-container">
      <Table
        columnsOrder={columnsOrder}
        onChangeColumnsOrder={handleChangeColumnsOrder}
        rows={mock}
        columns={columns}
        rowsPerPageOptions={rowsPerPageOptions}
        count={totalCount}
        page={page}
        onPageChange={handleSetPage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleSetRowsPerPage}
        sort={sort}
        handleSetSort={handleSetSort}
      />
    </div>
  )
}

export default Main
