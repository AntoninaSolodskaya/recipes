import React from 'react';
import styled from 'styled-components';
import ContentMembersPage from '../components/ContentMembersPage';
import recipes from '../../data';

const BlogWrap = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid #A9A9A9;
`;

const Title = styled.h1`
  padding: 30px 0;
  box-sizing: content-box;
  overflow: hidden;
  font: normal 32px/2 "varela-round", Helvetica, sans-serif;
  text-overflow: ellipsis;
  text-align: center;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.2);
`;

class Members extends React.Component {

  render() {
    return (
      <BlogWrap >
        <Title>Member Directory</Title>
        <ContentMembersPage recipe={recipes[0]} />
        <ContentMembersPage recipe={recipes[1]} />
      </BlogWrap>
    );
  }
}

export default Members;
