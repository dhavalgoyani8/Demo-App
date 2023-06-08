import React, { useState } from "react";

function ShortCircuitEvaluation() {
  const [name, SetName] = useState("");

  return (
    <div className="main_div">
      <h1 className="h1Style"> UseState Value is : 
        {name || (
          <>
            <h1>Hello</h1>
            <p>You can do it</p>
          </>
        )}
      </h1>
      <h1 className="h1Style">name : {name && "Goyani"}</h1>
    </div>
  );
}

export default ShortCircuitEvaluation;
