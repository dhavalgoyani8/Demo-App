import React, { useEffect, useState } from "react";

function UseEffect1() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Effect 1") // only one time run
    if (count > 0) {
      document.title = `sms (${count})`;
    } else {
      document.title = `sms`;
    }
  },[]); 
  
  useEffect(() => {
   console.log("effect 2") // when you call run it
  },[count]);
  return (
    <div className="useEffect1_div">
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}

export default UseEffect1;
