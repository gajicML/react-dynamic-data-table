import React from "react";
import Table from "./Table";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import header from "../column.json";
import dataSample from "../dataSample";

const theme = createMuiTheme({
  palette: {
    type: "dark"
  },
  status: {
    danger: "orange"
  }
});

class App extends React.Component {
  state = {
    data: [],
    editIndex: -1
  };

  componentDidMount() {
    this.setState({
      data: dataSample
    });
  }

  deleteRow = rowIndex => {
    let dataCopy = this.state.data;
    dataCopy = dataCopy.filter(item => item.id !== rowIndex);
    this.setState({
      data: dataCopy
    });
  };

  startEditing = index => {
    this.setState({
      editIndex: index
    });
  };

  stopEditing = () => {
    this.setState({
      editIndex: -1
    });
  };

  handleChange = (e, name, index) => {
    const { value } = e.target;
    let dataCopy = this.state.data;

    dataCopy = dataCopy.map(row => {
      return row.id === index ? { ...row, [name]: value } : row;
    });

    this.setState({
      data: dataCopy
    });
  };

  sortColumn = columnName => {
    let dataCopy = this.state.data;
    this.setState({
      data: dataCopy.sort((a, b) => {
        return a[columnName].localeCompare(b[columnName]);
      })
    });
  };

  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <Table
            data={this.state.data}
            header={header}
            deleteRow={this.deleteRow}
            startEditing={this.startEditing}
            stopEditing={this.stopEditing}
            handleChange={this.handleChange}
            editIndex={this.state.editIndex}
            sortColumn={this.sortColumn}
          />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
