import React from "react";
import styled from "styled-components";
import CarouselContext from "./context";

const Item = styled.div`
  flex: 0 0 19.7%;
  transition: transform 300ms ease 100ms;
  margin: 0 2px;
  position: relative;

  :hover ~ div {
    transform: translateX(25%);
  }
  :hover {
    transform: scale(1.5) !important;
  }
  img {
    height: 100%;
    width: 100%;
    vertical-align: top;
  }
`;

export default ({ movie }) => {
  return (
    <CarouselContext.Consumer>
      {({ currentCarousel, elementRef }) => {
        return (
          <Item ref={elementRef}>
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            />
          </Item>
        );
      }}
    </CarouselContext.Consumer>
  );
};
