// deps
import React from 'react'
// components
import DragControl from '_/components/Table/components/DragControl'
// helpers
import { ICellProps } from '_/components/Table/types'
import './style.scss'

// todo fix types
const TableHeadCell: React.FC<ICellProps> = ({ value, name, column }) => {
  return (
    <th>
      <DragControl id={name || ''} column={column || ''} draggable>
        <div className="cell">{value}</div>
      </DragControl>
    </th>
  )
}

export default TableHeadCell
