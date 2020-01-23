import React from "react";

function ColorSlider(props) {
  const {
    colorValue,
    changeSetColorValue
  } = props

  return (
    <div className="color-card">
      <div className="color-slider">
      <input
        type="range"
        onChange={changeSetColorValue("red")}
        min="0"
        max="255"
        defaultValue={colorValue.red}
        className="slider --red"
        id="red"
      ></input>
      <input
        type="range"
        onChange={changeSetColorValue("blue")}
        min="0"
        max="255"
        defaultValue={colorValue.blue}
        className="slider --blue"
        id="blue"
      ></input>
      <input
        type="range"
        onChange={changeSetColorValue("green")}
        min="0"
        max="255"
        defaultValue={colorValue.green}
        className="slider --green"
        id="green"
      ></input>
      </div>
    </div>
  );
}

export default ColorSlider;
