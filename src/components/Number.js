import React from "react";
import TextField from "@material-ui/core/TextField";

export default function Number({ number }) {
  return (
    <TextField
      id="standard-number"
      defaultValue={number}
      InputProps={{
        readOnly: true,
        disableUnderline: true
      }}
    />
  );
}
