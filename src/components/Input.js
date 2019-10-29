import React from 'react'

export default function Input(props) {
    return (
        <>
            <textarea className="form-control">{props.description}</textarea>  
        </>
    )
}
