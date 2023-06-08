import React from 'react'
import { NavLink } from 'react-router-dom'

function Error() {
    const style = {
        textAlign:"center",
        marginTop:"100px"
    }
  return (
    <div style={style}>
      <h1><i>404</i> Page is not Found !!</h1>
      <NavLink to={"/"}><button>Home</button></NavLink>
    </div>
  )
}

export default Error
