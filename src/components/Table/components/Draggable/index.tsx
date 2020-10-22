// deps
import React from 'react'
// helpers
import './style.scss'

interface IProps {
  id: string
  column: string
  draggable?: boolean
}

const Draggable: React.FC<IProps> = ({ children }) => {
  return <div className="draggable-container">{children}</div>
}

export default Draggable
