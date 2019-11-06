import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core/";
import String from "./String";
import Number from "./Number";
import Slot from "./Slot";
import Date from "./Date";
import Input from "./Input";

const row = (
  item,
  index,
  header,
  deleteRow,
  startEditing,
  editIndex,
  stopEditing,
  handleChange
) => {
  const currentlyEditing = editIndex === item.id;

  const getComponent = (type, value) => {
    // eslint-disable-next-line default-case
    switch (type) {
      case "string":
        return <String text={value} />;
      case "number":
        return <Number number={value} />;
      case "date":
        return <Date date={value} />;
    }
  };

  return (
    <TableRow key={`tr-${index}`}>
      {header.map((cellItem, cellIndex) => (
        <TableCell key={`tc-${cellIndex}`}>
          {currentlyEditing ? (
            <Input
              inputType={cellItem.type !== "number" ? "text" : "number"}
              name={cellItem.path}
              val={item[cellItem.path]}
              handleChange={handleChange}
              index={item.id}
            />
          ) : (
            getComponent(cellItem.type, item[cellItem.path])
          )}
        </TableCell>
      ))}
      <TableCell>
        <Slot
          deleteRow={deleteRow}
          itemId={item.id}
          startEditing={startEditing}
          stopEditing={stopEditing}
          currentlyEditing={currentlyEditing}
        />
      </TableCell>
    </TableRow>
  );
};

export default ({
  data,
  header,
  deleteRow,
  startEditing,
  editIndex,
  stopEditing,
  handleChange,
  sortTable
}) => {
  return (
    <Paper>
      <Table className="table table-striped " aria-label="simple table">
        <TableHead>
          <TableRow>
            {header.map((item, index) => {
              return (
                <TableCell
                  onClick={() => sortTable(item.path)}
                  key={index}
                  className="header-cells"
                >
                  {item.name}
                </TableCell>
              );
            })}
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) =>
            row(
              item,
              index,
              header,
              deleteRow,
              startEditing,
              editIndex,
              stopEditing,
              handleChange
            )
          )}
        </TableBody>
      </Table>
    </Paper>
  );
};
