// deps
import React from 'react'
import clsx from 'clsx'
// helpers
import { TableContext } from '_/components/Table'
import './style.scss'

interface IProps {
  id: string
  column: string
  draggable?: boolean
}

const Draggable: React.FC<IProps> = ({ children, column, draggable }) => {
  // useContext
  const { setDragged, setOver } = React.useContext(TableContext)

  const handleDragStart = React.useCallback(() => {
    setDragged(column)
  }, [column, setDragged])

  const handleDragEnd = React.useCallback(() => {
    setDragged('')
    setOver('')
  }, [setDragged, setOver])

  return (
    <div
      className={clsx('draggable-container')}
      draggable={draggable}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      {children}
    </div>
  )
}

export default Draggable
