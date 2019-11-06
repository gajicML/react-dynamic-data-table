import React from "react";
import TextField from "@material-ui/core/TextField";

export default function Input({ val, handleChange, index, name, inputType }) {
  return (
    <>
      <TextField
        id="standard-multiline-flexible"
        multiline
        rowsMax="4"
        variant="outlined"
        type={inputType}
        defaultValue={val}
        onChange={e => handleChange(e, name, index)}
        className="input-active"
      />
    </>
  );
}
