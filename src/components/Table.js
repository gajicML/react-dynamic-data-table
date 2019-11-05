import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import String from './String';
import Number from './Number';
import Slot from './Slot';
import Date from './Date';

const row = (item, index, header, deleteRow, editRow) => (
    <TableRow key={`tr-${index}`}>
        {header.map((cellItem, cellIndex) => 
            <TableCell key={`tc-${cellIndex}`}>
                {getComponent(cellItem.type,item[cellItem.path])}
            </TableCell>
        )}
        <TableCell>
            <Slot deleteRow={deleteRow} itemId={item.id}/>
        </TableCell>
     
    </TableRow>
);

const getComponent = (type, value) => {
    // eslint-disable-next-line default-case
    switch(type) {
        case "string":
            return <String text={value}/>;
        case "number":
            return <Number number={value}/>;
        case "date":
            return <Date date={value}/>;
    } 
};

export default ({ data, header, deleteRow, editRow }) => {
    return(
    <Paper >
      <Table className='table table-striped ' aria-label="simple table">
        <TableHead>
          <TableRow>
                {header.map((item, index) => {
                    return <TableCell key={index}>{item.name}</TableCell>
                  })
                }
                 <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
            {data.map((item, index) => row(item, index, header, deleteRow, editRow))}
        </TableBody>
      </Table>
    </Paper>
    )
    
}
