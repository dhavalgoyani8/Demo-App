import React, { useState } from "react";

function UseState3() {
  const [data, setData] = useState({
    id: 0,
    name: "harry",
    age: 24,
    city: "mexico",
  });

  return (
    <>
      <div className="div_useState2">
        <h1 className="arrayH1">
          Name:{data.name}, Age: {data.age}, City: {data.city}
        </h1>
        <button
          onClick={() => {
            setData({...data,name: "marry"});
          }}
        >
          Update Name
        </button>
      </div>
    </>
  );
}

export default UseState3;
