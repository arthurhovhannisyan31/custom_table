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
  // todo memo
  const orderedCells = columns.map((column) => ({
    cell: cells.find((cell) => cell.name === column),
    columnName: column,
  }))
  const cellItems = orderedCells.map((el) => (
    // todo fix types
    <Component
      key={el?.cell?.name}
      value={el?.cell?.value}
      name={el?.cell?.name}
      column={el.columnName}
    />
  ))
  return <tr className="row-container">{cellItems}</tr>
}

export default TableRow
