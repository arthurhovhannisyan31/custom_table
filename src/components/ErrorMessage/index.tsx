// deps
import React from 'react'
// helpers
import './style.scss'

interface IProps {
  message?: string
}

const ErrorMessage: React.FC<IProps> = ({ message }) => {
  return (
    <div className="error-container">
      <span>An error occurred, please try again later.</span>
      <span>{message}</span>
    </div>
  )
}

export default ErrorMessage
