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

const DragControl: React.FC<IProps> = ({ children, column, draggable }) => {
  // useContext
  const { dragged, setDragged, handleSetColumnsOrder } = React.useContext(
    TableContext
  )
  // useState
  const [over, setOver] = React.useState(false)

  const handleDragStart = React.useCallback(() => {
    setDragged(column)
  }, [column, setDragged])
  const handleDragOver = React.useCallback(
    (event: React.DragEvent) => {
      event.stopPropagation()
      event.preventDefault()
      if (!over) setOver(true)
    },
    [over]
  )
  const handleDragLeave = React.useCallback(
    (event: React.DragEvent) => {
      event.stopPropagation()
      event.preventDefault()
      if (over) setOver(false)
    },
    [over]
  )
  const handleDrop = React.useCallback(() => {
    if (dragged !== column) {
      handleSetColumnsOrder({ source: dragged, target: column })
    }
    setDragged('')
    setOver(false)
  }, [handleSetColumnsOrder, dragged, column, setDragged])
  return (
    <>
      <div
        className={clsx(
          draggable && {
            dragStart: dragged === column,
            dragOver: over,
          }
        )}
        draggable={draggable}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDragStart={handleDragStart}
      >
        {children}
      </div>
    </>
  )
}

export default DragControl
