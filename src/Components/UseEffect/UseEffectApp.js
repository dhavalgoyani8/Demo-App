/** @format */

import React, { useEffect, useState } from "react";
import "./UseEffectApp.css";

function UseEffectApp() {
  const [state, setState] = useState(3);
  const [Data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`
      );
      const data = await response.json();
      setData(data);
      console.log(data);
    };
    getData();
    document.title=`Employees (${state})`
  }, [state]);


  return (
    <div className="App">
      <div className="header">
        <h1>Use Effect Hook</h1>
      </div>

      <button className="btn" onClick={() => setState(state + 3)}>
        User: {state}
      </button>

      <div className="main">
        {Data.map((element, index) => {
          return (
            <div key={index} className="data">
              <p>{index+1}</p>
              <img src={element.imageUrl} alt="img" />
              <p>
                Name: {element.firstName} {element.lastName}
              </p>
              <p>DOB: {element.dob}</p>
              <p>Age: {element.age}</p>
              <p>Email: {element.email}</p>
              <p>Phone : {element.contactNumber}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UseEffectApp;
