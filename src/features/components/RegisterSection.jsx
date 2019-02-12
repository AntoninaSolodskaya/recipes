import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  text-decoration: none;
  color: #fff;
  font: normal 16px/2 "varela-round", Helvetica, sans-serif;
  text-align: center;
  text-overflow: ellipsis;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.2) ;
  margin: 10px 10px;
  :hover {
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
    color: #CD8D5F;
  }
`;

const List = styled.li`
  display: flex;
  align-items: center;
  padding: 0 10px;
  &:hover{
    align-items: center;
    cursor: pointer;
    height: 100%;
  }
  @media (max-width: 414px) {
  width: 100%;
`;

const RegisterSection = ({signIn}) => {
  return (
    <SocialLinks>
      <List>
        {/* <StyledLink to="/login" onClick={signIn}>Login</StyledLink> */}
        <Button onClick={signIn}>Login</Button>
      </List>
      <List>
        <Button>Register</Button>
      </List>
    </SocialLinks>
  )
}

export default RegisterSection
