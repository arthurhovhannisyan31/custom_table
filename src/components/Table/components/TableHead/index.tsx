// deps
import React from 'react'
// components
import TableHeadCell from '_/components/Table/components/TableHeadCell'
import TableRow from '_/components/Table/components/TableRow'
// helpers
import { IColumn } from '_/components/Table/types'

interface IProps {
  columns: IColumn[]
  columnsOrder: string[]
}

const TableHead: React.FC<IProps> = ({ columns, columnsOrder }) => {
  // todo memo

  const rowData = columns.map(({ title, name }) => ({
    name: title,
    value: name,
  }))

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
