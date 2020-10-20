// deps
import React from 'react'
// helpers
import { ICell } from '_/components/Table/types'

interface IProps {
  // todo fix types
  Component: React.FC
  columns: string[]
  cells: ICell[]
}

const TableRow: React.FC<IProps> = ({ columns, Component, cells }) => {
  // todo memo
  const orderedCells = columns.map((column) =>
    cells.find((cell) => cell.name === column)
  )
  const cellItems = orderedCells.map((el) => (
    <Component key={el?.name}>{el?.value}</Component>
  ))
  return <tr>{cellItems}</tr>
}

export default TableRow
