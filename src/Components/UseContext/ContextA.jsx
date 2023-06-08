import React from 'react'
import ContextB from './ContextB'


function ContextA() {
  return (
    <div className='contextA'>
      <h1>Context A Components</h1>
        <ContextB />
    </div>
  )
}

export default ContextA
