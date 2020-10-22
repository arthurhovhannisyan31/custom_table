// deps
import React from 'react'
// components
import TableRow from '_/components/Table/components/TableRow'
import TableCell from '_/components/Table/components/TableCell'
// helpers
import { IColumn } from '_/components/Table/types'
import { cellPropsSelector } from '_/components/Table/components/TableBody/helpers'

interface IProps {
  rows: Record<string, string | number>[]
  columns: IColumn[]
  columnsOrder: string[]
}

const TableBody: React.FC<IProps> = ({ columnsOrder, rows, columns }) => {
  const formattedRows = React.useMemo(
    () =>
      rows.map((row) => ({
        cells: cellPropsSelector(row, columns),
        id: row.revision,
      })),
    [rows, columns]
  )

  const rowItems = React.useMemo(
    () =>
      formattedRows.map(({ cells, id }) => (
        <TableRow
          key={id}
          Component={TableCell}
          columns={columnsOrder}
          cells={cells}
        />
      )),
    [formattedRows, columnsOrder]
  )

  return <tbody>{rowItems}</tbody>
}

export default TableBody
