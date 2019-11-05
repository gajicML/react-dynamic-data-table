import React from 'react'
import Button from 'react-bootstrap/Button';

export default function Slot({ deleteRow, editRow, itemId }) {
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
                onClick={() => {editRow(itemId)}}
            > 
                Edit 
            </Button>
            

            
        </>
    )
}
