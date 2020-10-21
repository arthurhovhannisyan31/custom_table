// deps
import React from 'react'
// components
import TableRow from '_/components/Table/components/TableRow'
import TableCell from '_/components/Table/components/TableCell'
// helpers
import { IRow } from '_/store/revisions/types'

interface IProps {
  rows: IRow[]
  columnsOrder: string[]
}

const TableBody: React.FC<IProps> = ({ columnsOrder, rows }) => {
  // todo move to helpers
  const cellPropsSelector = (row: IRow) =>
    Object.entries(row).map(([name, value]) => ({ name, value }))

  const formattedRows = rows.map((row) => ({
    cells: cellPropsSelector(row),
    id: row.revision,
  }))

  const rowItems = formattedRows.map(({ cells, id }) => (
    <TableRow
      key={id}
      Component={TableCell}
      columns={columnsOrder}
      cells={cells}
    />
  ))

  return <tbody>{rowItems}</tbody>
}

export default TableBody
