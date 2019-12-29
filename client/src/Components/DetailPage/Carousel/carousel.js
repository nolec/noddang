import React from "react";
import styled from "styled-components";
import CarouselContext from "./context";
import useSliding from "./useSliding";
import SlideButton from "./SlideButton";

const Carousel = styled.div``;
const CarouselWrapper = styled.div`
  display: flex;
  :hover > div {
    transform: translateX(-25%);
  }
`;
export default ({ children }) => {
  console.log(CarouselWrapper, "-----------");
  const width = 200;
  const {
    handlePrev,
    handleNext,
    slideProps,
    containerRef,
    hasNext,
    hasPrev
  } = useSliding(width, React.Children.count(children));

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
