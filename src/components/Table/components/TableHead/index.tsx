// deps
import React from 'react'
// components
import TableHeadCell from '_/components/Table/components/TableHeadCell'
import TableRow from '_/components/Table/components/TableRow'
// helpers
import { TableContext } from '_/components/Table'
import { IColumn } from '_/components/Table/types'

interface IProps {
  columns: IColumn[]
}

const TableHead: React.FC<IProps> = ({ columns }) => {
  // useContext
  const { columnsOrder } = React.useContext(TableContext)
  // useMemo
  const rowData = React.useMemo(
    () =>
      columns.map(({ title, name }) => ({
        name: title,
        value: name,
      })),
    [columns]
  )
  return (
    <thead>
      <TableRow
        cells={rowData}
        columns={columnsOrder}
        Component={TableHeadCell}
      />
    </thead>
  )
}

export default TableHead
