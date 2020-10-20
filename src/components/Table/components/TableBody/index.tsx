// deps
import React from 'react'
// components
import TableRow from '_/components/Table/components/TableRow'
import TableCell from '_/components/Table/components/TableCell'
// helpers
import { IRow, ICell } from '_/components/Table/types'

interface IProps {
  rows: IRow[]
  columnsOrder: string[]
}

const TableBody: React.FC<IProps> = ({ columnsOrder, rows }) => {
  // const rowItems = rows.map((el) => <TableRow />)

  // todo move to helpers
  const cellPropsSelector = (row: IRow) =>
    Object.entries(row).map(([name, value]) => ({ name, value }))

  const formattedRows = rows.map(cellPropsSelector)

  const rowItems = formattedRows.map((el: ICell[]) => (
    <TableRow Component={TableCell} columns={columnsOrder} cells={el} />
  ))

  return <tbody>{rowItems}</tbody>
}

export default TableBody

//   Component: React.FC
//   columns: string[]
//   cells: { name: string; value: string }[]
