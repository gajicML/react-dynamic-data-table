import React from 'react'
import Button from 'react-bootstrap/Button';

export default function Slot(props) {
    return (
        <>
            <Button 
                className="btn btn-danger btn-sm" 
                onClick={() => {props.deleteUser(props.index)}}
            > 
                Delete User 
            </Button>
        </>
    )
}
