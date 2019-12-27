import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { detail, nowPlaying } from "../../actions/movie";
import MovieDetail from "./MovieDetail";
import Slide from "./Slide";

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
`;
const Detail = ({ match }) => {
  const dispatch = useDispatch();
  const movie = useSelector(state => state.movie.movie);
  const movies = useSelector(state => state.movie.movies);

  console.log(`https://image.tmdb.org/t/p/original${movie.backdrop_path}`);

  useEffect(() => {
    dispatch(detail(match));
    dispatch(nowPlaying());
  }, []);
  return (
    <Main>
      <Container>
        <Wrapper>
          <ContentBox>
            <Bimage
              back={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            />
            <SlideBox>
              <Slide children={movies} />
            </SlideBox>
            <MovieDetail children={movie} />
          </ContentBox>
        </Wrapper>
      </Container>
    </Main>
  );
};

export default Detail;
