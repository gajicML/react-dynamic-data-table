import React from 'react'
import String from './String';
import Number from './Number';
import Date from './Date';
import Slot from './Slot';

export default function TableRow(props) {
    return (
        <>
            <tr> 
                <td><String name={props.details.name}/></td>
                <td><Number age={props.details.height}/></td> 
                <td><Date date={props.details.date}/></td> 
                <td>
                    <Slot 
                        deleteUser={props.deleteUser}
                        index={props.index}
                        startEditing={props.startEditing}
                        stopEditing={props.stopEditing}
                        handleEditing={props.handleEditing}
                    />
                </td> 
            </tr>
        </>
    )
}
