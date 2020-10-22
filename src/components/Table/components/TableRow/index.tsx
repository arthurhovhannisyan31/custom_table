// deps
import React from 'react'
// helpers
import { ICell, ICellProps } from '_/components/Table/types'
import './style.scss'

interface IProps {
  Component: React.FC<ICellProps>
  columns: string[]
  cells: ICell[]
}

const TableRow: React.FC<IProps> = ({ columns, Component, cells }) => {
  const orderedCells = React.useMemo(
    () =>
      columns.map((column) => ({
        cell: cells.find((cell) => cell.name === column),
        columnName: column,
      })),
    [columns, cells]
  )
  const cellItems = React.useMemo(
    () =>
      orderedCells.map((el) => (
        <Component
          key={el.cell?.name}
          value={el.cell?.value}
          name={el.cell?.name}
          column={el.columnName}
        />
      )),
    [orderedCells]
  )
  return <tr className="row-container">{cellItems}</tr>
}

export default TableRow
