/** @format */

import React, { useReducer } from "react";
import "./UseReducerApp.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "inc":
      return state + 2;
    case "dec":
      return state - 2;
    case "mul":
      return state * 2;
    case "div":
      return state / 2;
    default:
      return state;
  }
};

function UseReducerApp() {
  const [state, dispatch] = useReducer(reducer, 2);
  return (
    <div className="App">
      <div className="header">
        <h1>Use Reducer Hook</h1>
      </div>
      <div className="main">
        <h1>{state}</h1>
        <button onClick={() => dispatch({ type: "inc" })}>increment + 2</button>
        <button onClick={() => dispatch({ type: "dec" })}>decrement - 2</button>
        <button onClick={() => dispatch({ type: "mul" })}>multiply x 2</button>
        <button onClick={() => dispatch({ type: "div" })}>Divide / 2</button>
      </div>
    </div>
  );
}

export default UseReducerApp;
