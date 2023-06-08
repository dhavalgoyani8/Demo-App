import React, { useState } from "react";

function UseState2() {
  const data = [
    { id: 0, name: "harry", age: 24, city: "mexico" },
    { id: 1, name: "kano", age: 20, city: "surat" },
    { id: 2, name: "marry", age: 22, city: "london" },
  ];
  
  const [aData, setAData] = useState(data);

  const removed = (id) => {
    const newData = aData.filter((curVal) => {
      return curVal.id !== id;
    });
    setAData(newData);
  };

  return (
    <>
      <div className="div_useState2">
        {aData.map((val) => (
          <h1 className="arrayH1" key={val.id}>
            Name:{val.name}, Age: {val.age}, City: {val.city}
            <button className="removeButton" onClick={() => removed(val.id)}>
              Removed
            </button>
          </h1>
        ))}

        <button
          className="clearButton"
          onClick={() => {
            setAData([]);
          }}
        >
          Clear All Data
        </button> 
      </div>
    </>
  );
}

export default UseState2;



