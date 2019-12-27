import React from "react";
import styled from "styled-components";

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
`;
const Cover = styled.div`
  min-width: 30%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  border-radius: 4px;
  background-color: black;
`;
const Data = styled.div`
  margin-left: 20px;
`;
const Title = styled.h3`
  font-size: 32px;
  margin-bottom: 20px;
`;
const ItemContainer = styled.div`
  margin: 20px 0;
`;
const Item = styled.span``;
const Divider = styled.span`
  margin: 0 10px;
`;
const Overview = styled.p`
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
  width: 50%;
`;
const MovieDetail = ({ children }) => {
  console.log(children);
  return (
    <Content>
      <Cover
        bgImage={`https://image.tmdb.org/t/p/original${children.poster_path}`}
      />
      <Data>
        <Title>
          {children.original_title
            ? children.original_title
            : children.original_name}
        </Title>
        <ItemContainer>
          <Item></Item>
          <Item>{children.runtime}</Item>
          <Divider>·</Divider>
          <Item>
            {children.genres &&
              children.genres.map((genre, index) =>
                index === children.genres.length - 1
                  ? genre.name
                  : `${genre.name}/`
              )}
          </Item>
        </ItemContainer>
      </Data>
    </Content>
  );
};

export default MovieDetail;
