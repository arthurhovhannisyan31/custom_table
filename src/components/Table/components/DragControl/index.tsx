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

const DragControl: React.FC<IProps> = ({ children, column, draggable }) => {
  // useContext
  const { dragged, setDragged, handleSetColumnsOrder } = React.useContext(
    TableContext
  )
  // useState
  const [over, setOver] = React.useState(false)

  const handleDragStart = React.useCallback(() => {
    setDragged(column)

    // const canvas = document.createElement('canvas')
    // canvas.width = 200
    // canvas.height = 30
    // const ctx = canvas.getContext('2d')
    // ctx!.font = '16px Roboto'
    // ctx!.fillText(column, 10, 20)
    // const img = new Image(200, 40)
    // img!.src = canvas.toDataURL()
    // console.log(canvas.toDataURL())
    // // eslint-disable-next-line no-param-reassign
    // event.dataTransfer.effectAllowed = 'move'
    // event.dataTransfer.setDragImage(img, 0, 0)
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

  const handleDragEnd = React.useCallback(() => {
    setDragged('')
  }, [setDragged])

  return (
    <div
      className={clsx(
        'container',
        draggable && {
          dragEnd: dragged !== column,
          dragStart: dragged === column,
          dragOver: over,
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
  )
}

export default DragControl
