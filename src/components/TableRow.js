import React from 'react'
import String from './String';
import Number from './Number';
import Date from './Date';
import Input from './Input';
import Slot from './Slot';

export default function TableRow(props) {
    return (
        <>
            <tr> 
                <td><String name={props.details.name}/></td>
                <td><Number age={props.details.height}/></td> 
                <td><Date date={props.details.date}/></td> 
                <td><Input description={props.details.description}/></td> 
                <td>
                    <Slot 
                        deleteUser={props.deleteUser}
                        index={props.index}
                    />
                </td> 
            </tr>
        </>
    )
}
