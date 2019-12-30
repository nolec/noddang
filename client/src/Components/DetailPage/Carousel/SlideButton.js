import React from "react";
import IconArrowDown from "./Icons/IconArrowDown";
import styled from "styled-components";

const Button = styled.button`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 55px;
  background: rgba(0, 0, 0, 0.5);
  border: 0;
  outline: 0;
  padding: 0;
  right: ${props => (props.type === "next" ? 0 : null)};
  left: ${props => (props.type === "next" ? null : 0)};
  z-index: 4;
  cursor: pointer;
  span {
    transform: ${props =>
      props.type === "next" ? "rotateZ(-90deg)" : "rotateZ(90deg)"};
    width: 25px;
    display: block;
    margin: 0 auto;
  }
  :hover path {
    color: #fff !important;
  }
`;

const SlideButton = ({ onClick, type }) => {
  return (
    <Button type={type} onClick={onClick}>
      <span>
        <IconArrowDown />
      </span>
    </Button>
  );
};

export default SlideButton;
