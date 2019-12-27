import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SocialBox from "./SocialBox";
import AuthBar from "./AuthBar";

const Header = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 280px;
  height: 100vh;
  overflow: auto;
  font-family: "Circular", sans-serif;
  border-right: 1px solid #eaeaea;
  background-color: #ffffffb3;
`;

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px 50px 92px;
`;
const ContentBox = styled.div``;
const LogoLink = styled(Link)`
  display: inline-block;
  max-height: 50px;
  display: flex;
`;
const LogoBox = styled.div`
  margin-bottom: 35px;
  img {
    max-height: 50px;
    border: 0;
    max-width: 100%;
    height: auto;
  }
`;
const Nav = styled.nav`
  display: flex;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0.05em;
  width: 100%;
  align-items: center;
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
            <LogoBox>
              <LogoLink to="/">
                <img src={require("../../assets/nolec.png")} />
              </LogoLink>
            </LogoBox>
            <Nav>
              <Ul>
                <Li>
                  <Alink to="/">Home</Alink>
                </Li>
                <Li>
                  <Alink to="/">Job</Alink>
                </Li>
                <Li>
                  <Alink to="/">Holly</Alink>
                </Li>
              </Ul>
            </Nav>
            <AuthBar></AuthBar>
            <SocialBox></SocialBox>
          </ContentBox>
        </Wrapper>
      </Container>
    </Header>
  );
};

export default NavBar;
