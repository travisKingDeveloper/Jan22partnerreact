import React, { useState } from "react";
import ColorSlider from "./ColorSlider";
import ColorBox from "./ColorBox";
import "./styles.css";

const defaultState = {
  red: 255,
  blue: 0,
  green: 0,
}

function ColorWorkshop(props) {
  const [colorValue, setColorValue] = useState(defaultState)

  const changeSetColorValue = (key) => (e) => {
    const value = e.target.value
    const newState = {
      ...colorValue, 
      [key]: value
    }
    setColorValue(newState)
  }

  return (
    <div className="color-container">
      <h1 className="header">Color Picker :)</h1>
      <ColorSlider 
        colorValue={colorValue} 
        changeSetColorValue={changeSetColorValue}
      />
      <ColorBox 
        colorValue={colorValue}
      />
    </div>
  );
}

export default ColorWorkshop;
