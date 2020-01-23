import React from "react";
import ColorSlider from "./ColorSlider";
import ColorBox from "./ColorBox";
import "./styles.css";

function ColorWorkshop(props) {
  return (
    <div className="color-container">
      <ColorSlider />
      <ColorBox />
    </div>
  );
}

export default ColorWorkshop;
