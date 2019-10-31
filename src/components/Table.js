import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
});

export default function SimpleTable(props) {

  return (
    <Paper >
      <Table className='table table-striped ' aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Height</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {props.data.map(employee => {
                return (
                    <TableRow >
                        <TableCell component="th" scope="row">  {employee.name} </TableCell>
                        <TableCell align="right">{employee.height}</TableCell>
                        <TableCell align="right">{employee.date}</TableCell>
                        <TableCell align="right">{employee.email}</TableCell>
                    </TableRow>
                )
            })}
            
        </TableBody>
      </Table>
    </Paper>
  );
}
