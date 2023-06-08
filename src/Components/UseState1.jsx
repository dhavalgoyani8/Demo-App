import React, { useState } from "react";

function UseState1() {
  const [num, setNum] = useState(0);
  const [name, setName] = useState("D G");

  return (
    <div className="main_div">
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        🔺 increment 🔺
      </button>
      <h1>{num}</h1>
      <button
        onClick={() => {
          setNum(num - 1);
        }}
      >
        🔻 decrement 🔻
      </button>
      <hr />
      <h1>{name}</h1>
      <button
        onClick={() => {
          (name === "D G") ? setName("Dhaval Goyani") : setName("D G");
        }}
      >
       👆 Change 👆
      </button>
    </div>
  );
}

export default UseState1;