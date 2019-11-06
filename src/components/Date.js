import React from "react";
import TextField from "@material-ui/core/TextField";

export default function Date({ date }) {
  return (
    <TextField
      id="standard-basic"
      defaultValue={date}
      InputProps={{
        readOnly: true,
        disableUnderline: true
      }}
    />
  );
}
