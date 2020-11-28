import React from "react";

const Square = ({value, onClick}) => {
  return (
    <button className={value ? "squares squareText" : "squares"} onClick={onClick}>
      <p>{value}</p>
    </button>
  );
};

export default Square;
