import React, { useState } from "react";

const defaultState = {
  red: 0,
  blue: 0,
  green: 255,
}

function ColorSlider(props) {
  const [colorValue, setColorValue] = useState(defaultState)

  const changeSetColorValue = (e) => {
    const value = e.target.value

    return setColorValue(value)
  }

  return (
    <div className="color-card">
      <div className="color-slider">
      <input
        type="range"
        onChange={changeSetColorValue}
        min="0"
        max="255"
        defaultValue={colorValue.red}
        className="slider"
        id="red"
      ></input>
      <input
        type="range"
        onChange={changeSetColorValue}
        min="0"
        max="255"
        defaultValue={colorValue.blue}
        className="slider"
        id="blue"
      ></input>
      <input
        type="range"
        onChange={changeSetColorValue}
        min="0"
        max="255"
        defaultValue={colorValue.green}
        className="slider"
        id="green"
      ></input>
      </div>
    </div>
  );
}

export default ColorSlider;
