import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import styled from 'styled-components';
import ContentMembersPage from '../components/ContentMembersPage';

const BlogWrap = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  padding: 30px 0;
  box-sizing: content-box;
  overflow: hidden;
  font: normal 32px/2 "varela-round", Helvetica, sans-serif;
  text-overflow: ellipsis;
  text-align: center;
  color: #CD8D5F;
`;

const mapState = state => ({
  recipes: state.firestore.ordered.recipes
});

class Members extends React.Component {

  render() {
    const { recipes } = this.props;
    return (
      <BlogWrap >
        <Title>Member Directory</Title>
        <ContentMembersPage recipes={recipes} />
      </BlogWrap>
    );
  }
}

export default compose(connect(mapState, null)(
  firestoreConnect([
    { collection: 'recipes' }
  ])( Members))
);
