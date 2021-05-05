import React, { useEffect, useState } from "react";

const Box = ({ index, value, onClick }) => {
  const [val, setVal] = useState(value);
  useEffect(() => {
    setVal(value);
  }, [value]);
  return (
    <div
      className="box"
      style={{
        backgroundColor:
          val.char === "X"
            ? "#0078D7"
            : val.char === "O"
            ? "yellow"
            : index % 2
            ? "#f1f1f1"
            : "#efefef",
        borderLeft:
          index === 1 || index === 4 || index === 7
            ? "3px solid black"
            : "0px solid white",
        borderRight:
          index === 1 || index === 4 || index === 7
            ? "3px solid black"
            : "0px solid white",
        borderTop:
          index === 3 || index === 4 || index === 5
            ? "3px solid black"
            : "0px solid white",
        borderBottom:
          index === 3 || index === 4 || index === 5
            ? "3px solid black"
            : "0px solid white",
      }}
      onClick={onClick}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "4rem",
        }}
      >
        {val.char}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            fontSize: "0.9rem",
            margin: "1px",
            padding: "1px",
          }}
        >
          {index}
        </div>
        <div className="points">{val.points}</div>
      </div>
    </div>
  );
};

export default Box;
