import React from "react";
import TextField from "@material-ui/core/TextField";

export default function String({ text }) {
    return (
        <TextField
            id="standard-multiline-flexible"
            multiline
            rowsMax="4"
            defaultValue={text}
            InputProps={{
                readOnly: true,
                disableUnderline: true
            }}
        />
    );
}
