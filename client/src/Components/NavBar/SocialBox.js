import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookSquare,
  faGithubSquare
} from "@fortawesome/free-brands-svg-icons";

const SocialBox = styled.div`
  position: fixed;
  bottom: 0;
  width: 279px;
  left: 0;
  display: flex;
  padding: 25px 50px 45px;
`;
const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`;

const Li = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const Alink = styled(Link)`
  font-size: 20px;
`;
export default () => {
  return (
    <SocialBox>
      <Ul>
        <Li>
          <Alink to="#">
            <FontAwesomeIcon icon={faInstagram} />
          </Alink>
          <Alink to="#">
            <FontAwesomeIcon icon={faFacebookSquare} />
          </Alink>
          <Alink to="#">
            <FontAwesomeIcon icon={faGithubSquare} />
          </Alink>
        </Li>
      </Ul>
    </SocialBox>
  );
};
