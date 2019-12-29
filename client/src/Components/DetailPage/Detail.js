import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { detail, nowPlaying } from "../../actions/movie";
import MovieDetail from "./MovieDetail";
import Carousel from "./Carousel";

const Main = styled.main`
  max-height: 100vh;
`;

const Container = styled.div``;

const Wrapper = styled.div``;

const ContentBox = styled.div`
  height: calc(100vh);
  width: 100%;
  padding: 50px;
`;
const Bimage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.back});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: -1;
`;
const SlideBox = styled.div`
  position: relative;
  display: flex;
`;
const Detail = ({ match }) => {
  const dispatch = useDispatch();
  const movie = useSelector(state => state.movie.movie);
  const movies = useSelector(state => state.movie.movies);

  useEffect(() => {
    dispatch(nowPlaying());
    dispatch(detail(match));
  }, []);
  return (
    <Main>
      {console.log(movies, "detail-children")}
      <Container>
        <Wrapper>
          <ContentBox>
            <Bimage
              back={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            />
            <SlideBox>
              <Carousel children={movies}>
                {movies.map(movie => (
                  <Carousel.Item movie={movie} key={movie.id}></Carousel.Item>
                ))}
              </Carousel>
            </SlideBox>
            <MovieDetail children={movie} />
          </ContentBox>
        </Wrapper>
      </Container>
    </Main>
  );
};

export default Detail;
