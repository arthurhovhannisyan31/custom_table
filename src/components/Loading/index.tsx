// deps
import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
// components
import Backdrop from '_/components/Backdrop'
// helpers
import './style.scss'

const Loading: React.FC = () => {
  return (
    <Backdrop className="loading-container">
      <CircularProgress color="secondary" />
    </Backdrop>
  )
}

export default Loading
