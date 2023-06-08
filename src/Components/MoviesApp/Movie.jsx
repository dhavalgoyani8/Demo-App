import React from 'react'

function Movie(props) {
  return (
    <div className='movie'>
      <img src={props.img} alt="img" />
      <p>name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>E-mail: {props.email}</p>
      <p>Mobile: {props.phone}</p>
    </div>
  )
}

export default Movie
