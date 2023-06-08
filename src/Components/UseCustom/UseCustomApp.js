/** @format */

import React, { useState, useEffect } from "react";
import "./UseCustomApp.css";
import Custom from "./Custom";

function UseCustomApp() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const getData = async () => {
  //     const response = await fetch(
  //       "https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001"
  //     );
  //     const resData = await response.json();
  //     console.log(resData);
  //     setData(resData);
  //   };
  //   getData();
  // }, []);

  const [data] = Custom("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001")

  return (
    <div className="App">
      <div className="header">
        <h1>Use Custom Hook</h1>
      </div>
      <div className="main">
        {data.map((element, index) => {
          return (
            <h1 key={index}>
              name: {element.firstName} {element.lastName}
            </h1>
          );
        })}
      </div>
    </div>
  );
}

export default UseCustomApp;
