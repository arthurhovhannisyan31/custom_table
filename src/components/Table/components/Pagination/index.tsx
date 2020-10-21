// deps
import React from 'react'
import clsx from 'clsx'
// helpers
import './style.scss'

interface IProps {
  rowsPerPageOptions: number[]
  count: number
  rowsPerPage: number
  page: number
  onChangePage: (val: number) => void
  onChangeRowsPerPage: (val: number) => void
  className?: string
}

const Pagination: React.FC<IProps> = ({
  rowsPerPageOptions,
  page,
  rowsPerPage,
  className,
  count,
  onChangePage,
  onChangeRowsPerPage,
}) => {
  return (
    <div className={clsx('pagination-container', className)}>
      <div>Rows per page</div>
      <div>Rows selector</div>
      <div>1-5 of total</div>
      <div>controls left + rigth</div>
    </div>
  )
}

export default Pagination
