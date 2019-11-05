import React from 'react'
import Button from 'react-bootstrap/Button';

export default function Slot({ deleteRow, startEditing, itemId, stopEditing, currentlyEditing }) {
    return (
        <>
           
            {
                currentlyEditing ? 
                <Button 
                    className="btn btn-success btn-sm" 
                    onClick={() => {stopEditing()}}
                > 
                    Finish 
                </Button> 
                : 
                <Button 
                    className="btn btn-primary btn-sm" 
                    onClick={() => {startEditing(itemId)}}
                > 
                    Edit 
                </Button>
            }

            &nbsp;
            &nbsp;

            <Button 
                className="btn btn-danger btn-sm" 
                onClick={() => {deleteRow(itemId)}}
            > 
                D
            </Button>
           
            
        </>
    )
}
