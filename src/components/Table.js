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
import SwapVertIcon from "@material-ui/icons/SwapVert";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";

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
  sortColumn,
  decimalSpace
}) => {
  return (
    <Paper>
      <Table className="table table-striped " aria-label="simple table">
        <TableHead>
          <TableRow>
            {header.map((item, index) => {
              return (
                <TableCell key={index}>
                  <span
                    onClick={
                      item.sortable
                        ? () => sortColumn(item.path, item.type)
                        : () => true
                    }
                    className="header-cells"
                  >
                    {item.name}{" "}
                    {item.sortable ? (
                      <SwapVertIcon style={{ fontSize: 15 }} />
                    ) : (
                      ""
                    )}
                  </span>
                  &nbsp;
                  {item.type === "number" ? (
                    <span className="decimal">
                      <KeyboardArrowRightIcon
                        className="decimal-right decimal-icon"
                        onClick={() => decimalSpace("left")}
                      />
                      .
                      <KeyboardArrowLeftIcon
                        className="decimal-left decimal-icon"
                        onClick={() => decimalSpace("right")}
                      />{" "}
                    </span>
                  ) : (
                    ""
                  )}
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
