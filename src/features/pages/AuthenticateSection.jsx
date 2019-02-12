import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const Avatar = styled.div`
  height: 45px;
  width: 45px;
  border-radius: 50%;
  margin: 0 12px;
`;

const Title = styled.p`
  font-size: 12px;
  font-family: sans-serif;
  color: #CD8D5F;
  font-weight: bold;
  margin-right: 10px;
`;

const Button = styled(Link)`
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

const AuthenticateSection = ({signOut}) => {
  return (
    <Container>
      <Button onClick={signOut} to="/">Sign Out</Button>
      <Avatar style={{ background: 'url(/assets/user.png) no-repeat center/cover' }} />
      <Title>Name</Title>
    </Container>
  )
}

export default AuthenticateSection;
