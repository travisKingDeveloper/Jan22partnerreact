import React from "react";

function ColorSlider(props) {
  return (
    <div className="color-card color-slider">
      <input
        type="range"
        min="1"
        max="100"
        value="50"
        class="slider"
        id="myRange"
      ></input>
      <input
        type="range"
        min="1"
        max="100"
        value="50"
        class="slider"
        id="myRange"
      ></input>
      <input
        type="range"
        min="1"
        max="100"
        value="50"
        class="slider"
        id="myRange"
      ></input>
    </div>
  );
}

export default ColorSlider;
