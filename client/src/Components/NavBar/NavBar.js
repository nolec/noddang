import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 280px;
  height: 100vh;
  overflow: auto;
  font-family: "Circular", sans-serif;
  border-right: 1px solid #eaeaea;
`;

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px 50px 92px;
`;
const ContentBox = styled.div``;
const Nav = styled.nav`
  display: flex;
  width: 100%;
`;
const Ul = styled.ul`
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  position: initial;
  margin: 0;
  opacity: 1;
  visibility: visible;
  border: none;
  transform: initial;
  width: 100%;
  transition: initial;
  background-color: transparent;
`;
const Li = styled.li`
  width: 100%;
  margin-bottom: 10px;
  height: 30px;
`;
const Alink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 4px 0;
  height: 100%;
`;
const NavBar = () => {
  return (
    <Header>
      <Container>
        <Wrapper>
          <ContentBox>
            <Nav>
              <Ul>
                <Li>
                  <Alink>Home</Alink>
                </Li>
                <Li>
                  <Alink>Job</Alink>
                </Li>
                <Li>
                  <Alink>Holly</Alink>
                </Li>
              </Ul>
            </Nav>
          </ContentBox>
        </Wrapper>
      </Container>
    </Header>
  );
};

export default NavBar;
