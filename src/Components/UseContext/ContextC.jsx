import React, { useContext } from 'react'
import {UserContext} from './UseContextApp'

function ContextC() {
    const data = useContext(UserContext)
    console.log(data)
  return (
    <div className='contextC'>
      <h1>Context C Components</h1>
      <p>Name: {data.name}</p>
      <p>Age: {data.age}</p>
      <p>City: {data.city}</p>
    </div>
  )
}

export default ContextC
