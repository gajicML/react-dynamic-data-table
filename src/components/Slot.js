import React from 'react'
import Button from 'react-bootstrap/Button';

export default function Slot(props) {
    return (
        <>
           <Button 
                className="btn btn-danger btn-sm" 
                onClick={() => {props.deleteRow(props.e_index)}}
            > 
                Delete User 
            </Button>
            &nbsp;
            &nbsp;
            <Button 
                className="btn btn-primary btn-sm" 
                onClick={() => {props.editRow(props.index)}}
            > 
                Edit 
            </Button>
            

            
        </>
    )
}
