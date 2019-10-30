import React from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

import TableRow from './TableRow';

class TableComponent extends React.Component {

    state = {
        employees: [
            {id: 1, name: "Mladen Gajic", height: 1.8328, date: "04.02.2016.", description: "Web designer", email: "mla.gajic@gmail.com"},
            {id: 2, name: "Aleksandar Milosevic", height: 1.8828, date: "10.04.2017.", description: "Pićkin dim junior developer",email: "aco@gmail.com"},
            {id: 3, name: "Dejan Tripic", height: 1.8228, date: "04.09.2015.", description: "Web designer",email: "tripa@gmail.com"},
            {id: 4, name: "Aleksa Šarov", height: 1.8398, date: "25.06.2018.", description: "Pićkin dim midijor developer",email: "aleksa@gmail.com"}
        ],
        editId: -1,
    }

    deleteUser = (index) => {
        let employeesCopy = this.state.employees;
        employeesCopy = employeesCopy.filter(item => item.id !== index);
        this.setState({
            employees: employeesCopy
        })
    };

    startEditing = () => {}
    stopEditing = () => {}
    handleEditing = () => {}

    render() {
        return(
            <Container>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Full Name</th>
                            <th>Height (cm)</th>
                            <th>Start Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        
                        {this.state.employees.map(employee => {
                            return (
                                <TableRow 
                                    key={employee.id} 
                                    details={employee}
                                    deleteUser={this.deleteUser}
                                    startEditing={this.startEditing}
                                    stopEditing={this.stopEditing}
                                    handleEditing={this.handleEditing}
                                    index={employee.id} 
                                />
                            )
                        })}
                    </tbody>

                </Table>

                
            </Container>
        )
    }
}

export default TableComponent;