import React, { useMemo, useState } from 'react'
import './UseMemoApp.css'

function UseMemoApp() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('')

    const tryCode = (number) => {
        for(let i=0; i<3000000000; i++){}
        return number
    }

    const cal = useMemo(()=>{
        tryCode(count);
    },[count])

  return (
    <div className='App'>
      <h1 className='header'>Use Memo Hook</h1>
        <h1>Count : {count}</h1>
        <button onClick={() => setCount(count + 5)}>Increment</button>
        <hr />
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        <h1>Name: {name}</h1>
    </div>
  )
}

export default UseMemoApp
