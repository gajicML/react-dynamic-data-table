import React from 'react'
import Button from 'react-bootstrap/Button';

export default function Slot({ deleteRow, startEditing, itemId }) {
    return (
        <>
           <Button 
                className="btn btn-danger btn-sm" 
                onClick={() => {deleteRow(itemId)}}
            > 
                Delete Row 
            </Button>
            &nbsp;
            &nbsp;
            <Button 
                className="btn btn-primary btn-sm" 
                onClick={() => {startEditing(itemId)}}
            > 
                Edit 
            </Button>
            

            
        </>
    )
}
