/** @format */

import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";

function Record(props) {
    const deleteItem = (index) => {
        let arr = props.data;
        arr.splice(index, 1);
        props.setData([...arr]);
      };
  return (
    <div key={props.index} className="data_show">
      <h3>{props.index + 1}</h3>
      <h3>{props.name}</h3>
      <h3>{props.email}</h3>
      <Button
        variant="contained"
        color="error"
        onClick={() => deleteItem(props.index)}>
        <DeleteIcon />
      </Button>
    </div>
  );
}

export default Record;
