import React from "react";
import IconArrowDown from "./Icons/IconArrowDown";

const SlideButton = ({ onClick, type }) => (
  <button onClick={onClick}>
    <span>
      <IconArrowDown />
    </span>
  </button>
);

export default SlideButton;
