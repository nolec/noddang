import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Slide = styled.div`
  display: flex;
  padding: 0 55px;
  :hover > div {
    transform: translateX(-25%);
  }
`;
const Item = styled.div`
  flex: 0 0 19.7%;
  text-align: center;
  margin: 0 2px;
  transition: transform 300ms ease 100ms;
  max-width: 200px;
`;

export default ({ children }) => {
  const videoCount = 5;
  const item = useRef();
  useEffect(() => {}, []);
  return (
    <Slide>
      {children && children.map((movie, i) => <Item key={movie.id}></Item>)}
    </Slide>
  );
};
