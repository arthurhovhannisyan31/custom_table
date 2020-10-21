// deps
import React from 'react'
// components
import Table from '_/components/Table'
// helpers
import { columns, mock, rowsPerPageOptions } from '_/components/Table/helpers'
import '_/pages/Main/style.scss'
import { EFilterOrder } from '_/store/types'

// todo pass props and request data here

const Main: React.FC = () => {
  const columnsInitOrder = columns.map((el) => el.name)
  const [columnsOrder, setColumnsOrder] = React.useState<string[]>(
    columnsInitOrder
  )

  const [page, setPage] = React.useState<number>(1)
  const [rowsPerPage, setRowsPerPage] = React.useState<number>(
    rowsPerPageOptions[0]
  )
  const [sort, setSort] = React.useState<Record<string, string | EFilterOrder>>(
    {}
  )

  const handleChangeColumnsOrder = (arr: string[]) => setColumnsOrder(arr)
  const totalCount = 47

  const handleSetPage = (val: number) => setPage(val)
  const handleSetRowsPerPage = (val: number) => setRowsPerPage(val)
  const handleSetSort = (val: Record<string, string | EFilterOrder>) =>
    setSort(val)

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
