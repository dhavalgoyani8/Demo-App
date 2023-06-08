/** @format */

import React, { useEffect, useRef, useState } from "react";
import "./UseRefApp.css";

function UseRefApp() {
  const [input, setInput] = useState("");
  // const [count, setCount] = useState(0)
  const count = useRef(0);
  const inputText = useRef()

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  useEffect(() => {
    count.current = count.current + 1;
  });

  const zoomText= () => {
    inputText.current.style.fontSize = "50px"
    inputText.current.style.transition = "2s";
  }

  return (
    <div className="App">
      <div className="header">
        <h1>Use Ref Hook</h1>
      </div>
      <div className="main">
        <input ref={inputText} type="text" value={input} onChange={handleInput} />
        <p ref={inputText}>{input}</p>
        <h1>Count : {count.current}</h1>
        <button onClick={zoomText}>Zoom it</button>
      </div>
    </div>
  );
}

export default UseRefApp;
