import React from "react";

function StudentCard(props) {
  return (
    <div
      style={{
        maxWidth: "300px",
        minWidth: "250px",
        border: "1px solid gray",
        padding: "1.25rem",
      }}
    >
      <button>{props.stdDetails.class}</button>
      <h3>{props.stdDetails.name}</h3>
      <p>{props.stdDetails.subStream}</p>
    </div>
  );
}

export default StudentCard;
