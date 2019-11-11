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
          .sort((a, b) => a[columnName].localeCompare(b[columnName]))
          .reverse();
        sortOrder = "desc";
      } else {
        dataCopy.sort((a, b) => a[columnName].localeCompare(b[columnName]));
        sortOrder = "asc";
      }
    } else if (type === "number") {
      if (
        columnName === this.state.sortedColumn &&
        this.state.sortOrder === "asc"
      ) {
        dataCopy.sort((a, b) => a[columnName] - b[columnName]);
        sortOrder = "desc";
      } else {
        dataCopy.sort((a, b) => b[columnName] - a[columnName]);
        sortOrder = "asc";
      }
    }

    this.setState({
      data: dataCopy,
      sortedColumn: columnName,
      sortOrder: sortOrder
    });
  };

  decimalSpace = side => {
    let dataCopy = this.state.data;

    dataCopy = dataCopy.map(row => {
      let fixedSpace;
      let zero = "0";
      const parts = row["height"].toString().split(".", 2);

      if (side === "left") {
        row["height"] = parseFloat(row["height"]);

        if (fixedSpace < 1 || !parts[1]) {
          fixedSpace = 0;
        } else {
          fixedSpace = parts[1].length - 1;
        }
        row["height"] = row["height"].toFixed(fixedSpace);
      } else if (side === "right") {
        if (parts[1]) {
          fixedSpace = parts[1].length + 1;
        } else {
          fixedSpace = 1;
          zero = ".0";
        }
        row["height"] = Number.parseFloat(row["height"] + zero).toFixed(
          fixedSpace
        );
      }
      return row;
    });
    this.setState({
      data: dataCopy
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
            decimalSpace={this.decimalSpace}
          />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
