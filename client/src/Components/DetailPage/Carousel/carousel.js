import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import CarouselContext from "./context";
import useSliding from "./useSliding";
import SlideButton from "./SlideButton";

const Carousel = styled.div`
  overflow: hidden;
`;
const CarouselWrapper = styled.div`
  display: flex;
  padding: 0 55px;
  transition: transform 300ms ease 100ms;
  z-index: 3;
  width: 100%;

  :hover > div {
    transform: translateX(-25%);
  }
`;
export default ({ children }) => {
  const PADDINGS = 110;

  const containerRef = useRef(null);
  const elementWidth = 250;
  const countElements = React.Children.count(children);
  const [containerWidth, setContainerWidth] = useState(0);
  const [distance, setDistance] = useState(0);
  const [totalInViewport, setTotalInViewport] = useState(0);
  const [viewed, setViewed] = useState(0);

  const handlePrev = () => {
    setViewed(viewed - totalInViewport);
    setDistance(distance + containerWidth);
  };

  const handleNext = () => {
    setViewed(viewed + totalInViewport);
    setDistance(distance - containerWidth);
    console.log(
      containerRef.current.clientWidth,
      elementWidth,
      containerWidth,
      distance,
      viewed,
      totalInViewport,
      countElements
    );
  };

  const slideProps = {
    style: { transform: `translate3d(${distance}px, 0, 0)` }
  };

  const hasPrev = distance < 0;
  const hasNext = viewed + totalInViewport < countElements;

  useEffect(() => {
    const containerWidth = containerRef.current.clientWidth - PADDINGS;
    console.log(containerWidth, containerRef);
    setContainerWidth(containerWidth);
    setTotalInViewport(Math.floor(containerWidth / elementWidth));
  }, [containerRef.current, handleNext, handlePrev]);

  console.log("-----------", containerRef);
  const CarouselValue = { currentCarousel: 1 };
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
