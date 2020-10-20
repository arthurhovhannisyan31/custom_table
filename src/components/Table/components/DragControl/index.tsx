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

  const handleDragStart = (event: React.DragEvent) => {
    setDragged(column)
    // eslint-disable-next-line no-param-reassign
    event.dataTransfer.effectAllowed = 'move'
    event.dataTransfer.setData('text/html', column)
  }
  // todo change onMouseOver
  const handleDragOver = (event: React.DragEvent) => {
    event.stopPropagation()
    event.preventDefault()
    if (!over) setOver(true)
    // console.log('DragOver', column)
  }
  const handleDragLeave = (event: React.DragEvent) => {
    event.stopPropagation()
    event.preventDefault()
    if (over) setOver(false)
    // console.log('Leave', column)
  }
  const handleDrop = () => {
    if (dragged !== column) {
      handleSetColumnsOrder({ source: dragged, target: column })
    }
    setDragged('')
  }
  const handleDragEnd = () => {
    setOver(false)
  }

  return (
    <>
      <div
        className={clsx(
          draggable && {
            dragStart: dragged === column,
            dragOver: dragged && over,
          }
        )}
        draggable={draggable}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        {children}
      </div>
    </>
  )
}

export default DragControl
