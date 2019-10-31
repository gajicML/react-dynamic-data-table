import React from 'react'
import String from './String';
import Number from './Number';
import Date from './Date';
import Slot from './Slot';

export default function TableRow(props) {
    return (
        <>
            <tr className="table-row"> 
                <td><String name={props.details.name}/></td>
                <td><Number age={props.details.height}/></td> 
                <td><Date date={props.details.date}/></td> 
                <td>
                    <Slot 
                        details={props.details}
                        deleteRow={props.deleteRow}
                        editRow={props.editRow}
                        index={props.index}
                    />
                </td> 
            </tr>
        </>
    )
}
