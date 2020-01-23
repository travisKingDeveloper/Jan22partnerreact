import React from "react";

function ColorBox({ colorValue }) {
  /*
  { 
    red: 1,
    blue: 3,
    green: 255
  }

  */
  const backgroundColor = `rgb(${colorValue.red}, ${colorValue.blue}, ${colorValue.green})`
  return (
    <div className="color-card">
      <div className="color-box" style={{ backgroundColor }}></div>
    </div>
  );
}

export default ColorBox;
