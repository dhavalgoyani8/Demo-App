/*
 * web3mantra react tutorial video 11
 * use only one useState use time 1:01:00
 * @format
 */

import React, { useState } from "react";
import "./RecordApp.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";

import Record from "./Record";

function RecordApp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, { name, email }]);
    // name:name,
    // email:email
    setName("");
    setEmail("");
  };

 const handelEnter = (event) => {
    if(event.key == 'Enter'){
      addData()
    }
    else if(event.key == '-'){
      
    }
 }

  return (
    <div className="App">
      <div className="header">
        <h1>Record Keeping App</h1>
      </div>

      <div className="form">
        <Stack direction="row" spacing={2}>
          <TextField
            onKeyDown={e=>handelEnter(e)}
            value={name}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            onChange={(event) => setName(event.target.value)}
          />
          <TextField
            onKeyDown={e=>handelEnter(e)}
            value={email}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            onChange={(event) => setEmail(event.target.value)}
          />
          <Button variant="contained" color="success" onClick={addData}>
            <AddIcon />
          </Button>
        </Stack>
      </div>

      <div className="data">
        <div className="data_show">
          <h3>index</h3>
          <h3>name</h3>
          <h3>email</h3>
          <h3>Remove</h3>
        </div>

        {data.map((element, index) => {
          return (
            <Record
              key={index}
              index={index}
              name={element.name}
              email={element.email}
              data={data}
              setData={setData}
            />
          );
        })}
      </div>
    </div>
  );
}

export default RecordApp;
