// deps
import React from 'react'
// helpers
import './style.scss'

interface IProps {
  count: number
  height?: number
}

const EmptyRow: React.FC<IProps> = ({ count, height = 40 }) => {
  return <tr className="emptyRow" style={{ height: `${count * height}px` }} />
}

export default EmptyRow
