// deps
import React from 'react'
import clsx from 'clsx'
// helpers
import './style.scss'

interface IProps {
  className?: string
}

const Backdrop: React.FC<IProps> = ({ className, children }) => {
  return <div className={clsx('backdrop-container', className)}>{children}</div>
}

export default Backdrop
