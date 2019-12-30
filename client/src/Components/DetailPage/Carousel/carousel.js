import React, { useState, useRef, useEffect, ReactDOM } from "react";
import styled from "styled-components";
import CarouselContext from "./context";
import useSliding from "./useSliding";
import SlideButton from "./SlideButton";

const Carousel = styled.div`
  overflow: hidden;
  padding: 55px;
`;
const CarouselWrapper = styled.div`
  display: flex;
  transition: transform 300ms ease 100ms;
  z-index: 3;
  width: 100%;
  :hover > div {
    transform: translateX(-25%);
  }
`;
export default ({ children }) => {
  //Item--------------------------------------
  const elementRef = useRef(null);
  const [width, setWidth] = useState(0);
  const elementWidth = width;
  //Wrapper--------------------------------------
  const PADDINGS = 110;

  const containerRef = useRef(null);
  const countElements = React.Children.count(children);
  const [containerWidth, setContainerWidth] = useState(0);
  const [distance, setDistance] = useState(0);
  const [totalInViewport, setTotalInViewport] = useState(0);
  const [viewed, setViewed] = useState(0);
  //handlePrev--------------------------------------
  const handlePrev = () => {
    setViewed(viewed - totalInViewport);
    setDistance(distance + containerWidth);
  };
  //handleNext--------------------------------------
  const handleNext = () => {
    setViewed(viewed + totalInViewport);
    setDistance(distance - containerWidth);
    console.log(
      containerRef.current.clientWidth,
      containerWidth,
      distance,
      viewed,
      totalInViewport,
      countElements
    );
  };
  //slideProps--------------------------------------
  const slideProps = {
    style: { transform: `translate3d(${distance}px, 0, 0)` }
  };

  const hasPrev = distance < 0;
  const hasNext = viewed + totalInViewport < countElements;
  //Finish--------------------------------------
  useEffect(() => {
    const containerWidth = containerRef.current.clientWidth - PADDINGS;
    const widthman = async () => {
      await setWidth(elementRef.current.clientWidth);
      console.log("useSize Element", elementRef.current.clientWidth);
    };
    if (elementRef.current) {
      widthman();
      setContainerWidth(containerWidth);
      setTotalInViewport(Math.floor(containerWidth / elementWidth));
    }
  }, [containerRef.current, handleNext, handlePrev]);

  useEffect(() => {}, [elementRef.current]);
  const CarouselValue = { currentCarousel: 1, elementRef };
  return (
    <CarouselContext.Provider value={CarouselValue}>
      <Carousel>
        <CarouselWrapper ref={containerRef} {...slideProps}>
          {children}
        </CarouselWrapper>
        {hasPrev && <SlideButton onClick={handlePrev} type="prev" />}
        {hasNext && <SlideButton onClick={handleNext} type="next" />}
      </Carousel>
    </CarouselContext.Provider>
  );
};
