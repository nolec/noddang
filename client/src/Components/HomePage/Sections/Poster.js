import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import Masonry from "react-masonry-component";
import { Link } from "react-router-dom";
import { TimelineMax, TweenLite } from "gsap";

const Box = styled.div`
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  overflow: hidden;
  img {
    width: 100%;
  }
`;
const Alink = styled(Link)`
  display: flex;
  position: relative;
`;
const Sub = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 101;
  background-color: #0000008c;
  opacity: 0;
`;
const Adult = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #ffa500;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  position: absolute;
  left: 5px;
  top: 5px;
  color: #fff;
  font-weight: bold;
`;
const Title = styled.div`
  width: 100%;
  position: absolute;
  top: 10px;
  min-height: 20px;
  h3 {
    height: 100%;
    display: flex;
    color: #fff;
    justify-content: center;
    font-size: 16px;
    font-weight: bold;
  }
`;
export default ({ children }) => {
  const el = useRef();

  const handleEnter = e => {
    TweenLite.to(e.target, 0.5, { opacity: 1 }, 0.2);
  };
  const handleLeave = e => {
    TweenLite.to(e.target, 0.5, { opacity: 0 }, 0.2);
  };
  useEffect(() => {
    console.log("hello");
  }, [el]);
  return (
    <Masonry>
      {children &&
        children.movies.map((movie, i) => (
          <Box key={i}>
            <Alink to={`/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              />
              <Sub
                ref={el}
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
              >
                {movie.adult ? <Adult>19</Adult> : null}
                <Title>
                  <h3>{movie.title}</h3>
                </Title>
              </Sub>
            </Alink>
          </Box>
        ))}
    </Masonry>
  );
};
