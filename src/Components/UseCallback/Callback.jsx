import React,{memo, useState} from 'react'

function Callback({item,addItem}) {
    console.log("Render Callback...")
  return (
    <div>
      <h1>I am Callback</h1>
      <button onClick={()=>addItem("is Added")}>Add Item</button>
      {
        item.map((element,index)=>{
            return <h2 key={index}>{element}</h2>
        })
      }
    </div>
  )
}

export default memo(Callback)
