// deps
import React from 'react'
// components
import TableHead from '_/components/Table/components/TableHead'
import TableBody from '_/components/Table/components/TableBody'
// helpers
import { columns, mock } from '_/components/Table/helpers'
import '_/components/Table/style.scss'

const Table: React.FC = () => {
  console.log(columns)
  console.log(mock)

  // todo table columns index change

  const columnsOrder = columns.map((el) => el.name)

  return (
    <div className="container">
      <table>
        <TableHead columns={columns} columnsOrder={columnsOrder} />
        <TableBody rows={mock} columnsOrder={columnsOrder} />
      </table>
    </div>
  )
}

export default Table
