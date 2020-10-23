// deps
import React from 'react'
// components
import TableRow from '_/components/Table/components/TableRow'
import TableCell from '_/components/Table/components/TableCell'
import EmptyRow from '_/components/Table/components/EmptyRow'
// helpers
import { IColumn } from '_/components/Table/types'
import { cellPropsSelector } from '_/components/Table/components/TableBody/helpers'
import { TableContext } from '_/components/Table'

interface IProps {
  rows: Record<string, string | number>[]
  columns: IColumn[]
  count: number
}

const TableBody: React.FC<IProps> = ({ rows, columns, count }) => {
  // useContext
  const { columnsOrder, rowsPerPage, page } = React.useContext(TableContext)
  // useMemo
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

  const emptyRows = React.useMemo(
    () =>
      rows?.length
        ? rowsPerPage - Math.min(rowsPerPage, count - (page - 1) * rowsPerPage)
        : rowsPerPage,
    [rows, rowsPerPage, count, page]
  )

  return (
    <tbody>
      {rowItems}
      {!!emptyRows && <EmptyRow count={emptyRows} />}
    </tbody>
  )
}

export default TableBody
