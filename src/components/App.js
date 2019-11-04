import React from 'react';
import Table from './Table';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
  status: {
    danger: 'orange',
  },
});

class App extends React.Component {

    state = {
        data: [
            {id: 1, name: "Mladen Gajic", height: 1.8328, date: "04.02.2016.", description: "Web designer", email: "mla.gajic@gmail.com"},
            {id: 2, name: "Aleksandar Milosevic", height: 1.8828, date: "10.04.2017.", description: "Pićkin dim junior developer",email: "aco@gmail.com"},
            {id: 3, name: "Dejan Tripic", height: 1.8228, date: "04.09.2015.", description: "Web designer",email: "tripa@gmail.com"},
            {id: 4, name: "Aleksa Šarov", height: 1.8398, date: "25.06.2018.", description: "Pićkin dim midijor developer",email: "aleksa@gmail.com"}
        ],

    }

    header =  [
        {
          name: "Full name",
          prop: "name",
          type: 'string',
        },
        {
          name: "Height",
          prop: "height",
          type: 'number',
        },
        {
          name: "Date",
          prop: "date",
          type: 'string',
        },
        {
          name: "Email",
          prop: "email",
          type: "string",
        },
      ]
    

    render() {
        return(
          <div className="App">
            <MuiThemeProvider theme={theme}>
                <TextField
                    name="firstName"
                    id="standard-basic"
                    className="textField-text"
                    label="Name"
                    margin="normal"
                />
               
                    <Table 
                      data={this.state.data} 
                      header={this.header}
                    />
                  
            </MuiThemeProvider>
          </div>
        )
    }
}

export default App;
