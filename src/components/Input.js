import React from 'react'
import  TextField from '@material-ui/core/TextField';

export default function Input({ val, handleChange }) {
    return (
        <>
            <TextField 
                defaultValue={val}
                onChange={(e) => handleChange}
            />
        </>
    )
}
