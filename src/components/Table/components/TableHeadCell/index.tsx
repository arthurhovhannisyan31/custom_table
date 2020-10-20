// deps
import React from 'react'

const TableHeadCell: React.FC = ({ children }) => {
  return (
    <th draggable>
      <span>{children}</span>
    </th>
  )
}

export default TableHeadCell
