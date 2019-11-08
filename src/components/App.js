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
    data: dataSample,
    editIndex: -1,
    sortedColumn: null,
    sortOrder: null
  };

  // componentDidMount() {
  //   this.setState({
  //     data: dataSample
  //   });
  // }

  deleteRow = rowIndex => {
    if (!window.confirm("Are you sure you wish to delete this row?"))
      return false;

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

  sortColumn = (columnName, type) => {
    let dataCopy = this.state.data;
    let sortOrder = "";

    if (type === "string" || type === "date") {
      if (
        columnName === this.state.sortedColumn &&
        this.state.sortOrder === "asc"
      ) {
        dataCopy
          .sort((a, b) => {
            return a[columnName].localeCompare(b[columnName]);
          })
          .reverse();
        sortOrder = "desc";
      } else {
        dataCopy.sort((a, b) => {
          return a[columnName].localeCompare(b[columnName]);
        });
        sortOrder = "asc";
      }
    } else if (type === "number") {
    }

    this.setState({
      data: dataCopy,
      sortedColumn: columnName,
      sortOrder: sortOrder
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
