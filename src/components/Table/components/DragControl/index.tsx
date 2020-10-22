// deps
import React from 'react'
import clsx from 'clsx'
// helpers
import { TableContext } from '_/components/Table/'
import './style.scss'

interface IProps {
  id: string
  column: string
  draggable?: boolean
}

const DragControl: React.FC<IProps> = ({ children, column }) => {
  // useContext
  const { dragged, setDragged, handleSetColumnsOrder } = React.useContext(
    TableContext
  )
  // useState
  const [over, setOver] = React.useState(false)

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

  const showOver = React.useMemo(() => over && dragged !== column, [
    over,
    dragged,
    column,
  ])

  return (
    <div
      className={clsx('drag-control-container', {
        'dragControl-over': showOver,
      })}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      {children}
    </div>
  )
}

export default DragControl
