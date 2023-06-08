/** @format */

import React, { createContext, useState } from "react";
import ContextA from "./ContextA";
import "./UseContextApp.css";

const UserContext = createContext();

function UseContextApp() {
  const [data, setData] = useState({
    name: "Goyani",
    age: 24,
    city: "Surat",
  });

  return (
    <UserContext.Provider value={data}>
      <div className="App">
        <h1 className="header">Use Context Hook</h1>
        <ContextA />
      </div>
    </UserContext.Provider>
  );
}

export default UseContextApp;
export { UserContext };
