import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import CheckIcon from "@material-ui/icons/Check";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

export default function Slot({
  deleteRow,
  startEditing,
  itemId,
  stopEditing,
  currentlyEditing
}) {
  return (
    <>
      {currentlyEditing ? (
        <span>
          <CheckIcon
            className="icons check"
            onClick={() => {
              stopEditing();
            }}
          />
        </span>
      ) : (
        <span>
          <EditIcon
            className="icons edit"
            onClick={() => {
              startEditing(itemId);
            }}
          />
        </span>
      )}
      &nbsp; &nbsp;
      <span>
        <HighlightOffIcon
          className="icons delete"
          onClick={() => {
            deleteRow(itemId);
          }}
        />
      </span>
    </>
  );
}
