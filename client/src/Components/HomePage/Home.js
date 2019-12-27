import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import Poster from "./Sections/Poster";
import { nowPlaying } from "../../actions/movie";

const Main = styled.main``;

const Container = styled.div``;

const Wrapper = styled.div``;

const ContentBox = styled.div``;

const Home = () => {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movie);
  console.log(movies);
  useEffect(() => {
    dispatch(nowPlaying());
  }, []);
  return (
    <Main>
      <Container>
        <Wrapper>
          <ContentBox>
            <Poster children={movies} />
          </ContentBox>
        </Wrapper>
      </Container>
    </Main>
  );
};

export default Home;
