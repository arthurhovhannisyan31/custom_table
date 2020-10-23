// deps
import React from 'react'
// components
import DragControl from '_/components/Table/components/DragControl'
// helpers
import { ICellProps } from '_/components/Table/types'
import './style.scss'

const TableCell: React.FC<ICellProps> = ({ value, name = '', column = '' }) => {
  return (
    <td>
      <DragControl id={name} column={column}>
        <div className="tableCell">{value}</div>
      </DragControl>
    </td>
  )
}

export default TableCell
