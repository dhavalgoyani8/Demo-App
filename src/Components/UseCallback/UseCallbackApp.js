/** @format */

import React, { useCallback, useState } from "react";
import "./UseCallbackApp.css";
import Callback from "./Callback";

function UseCallbackApp() {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState([]);

  const addItem = useCallback((sms) => {
    setItem((oldItem)=>[...oldItem,`New Item ${sms}`])
  },[item]);

  return (
    <div className="App">
      <h1 className="header">Use Callback Hook</h1>

      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <hr />
      <Callback item={item} addItem={addItem} />
    </div>
  );
}

export default UseCallbackApp;
