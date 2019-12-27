import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const AuthBar = styled.div`
  display: flex;
  font-size: 15px;
  font-weight: 500;
  margin-top: 20px;
`;

const Ul = styled.ul`
  width: 100%;
  display: flex;
  padding: 10px;
`;

const Li = styled.li`
  height: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  :not(:last-child) {
    margin-right: 10px;
  }
  :hover a {
    background-color: #e8e8e8;
  }
`;

const Alink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  transition: 0.2s linear;
`;

export default () => {
  return (
    <AuthBar>
      <Ul>
        <Li>
          <Alink to="/login">Login</Alink>
        </Li>
        <Li>
          <Alink to="/register">Sign Up</Alink>
        </Li>
      </Ul>
    </AuthBar>
  );
};
