import React from "react";
import TextField from "@material-ui/core/TextField";

export default function Input({ val, handleChange, index, name, inputType }) {
  return (
    <>
      {inputType === "number" ? (
        <TextField
          type="number"
          defaultValue={val}
          onChange={e => handleChange(e, name, index)}
          className="number-input"
        />
      ) : (
        <TextField
          id="standard-multiline-flexible"
          multiline
          rowsMax="4"
          type={inputType}
          defaultValue={val}
          onChange={e => handleChange(e, name, index)}
          className="input-active"
        />
      )}
    </>
  );
}
