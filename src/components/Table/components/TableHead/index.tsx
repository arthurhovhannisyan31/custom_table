// deps
import React from 'react'
// components
import TableHeadCell from 'Table/components/TableHeadCell'
import TableRow from 'Table/components/TableRow'
// helpers
import { IColumn } from 'Table/types'

interface IProps {
  columns: IColumn[]
  columnsOrder: string[]
}

const TableHead: React.FC<IProps> = ({ columns, columnsOrder }) => {
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
