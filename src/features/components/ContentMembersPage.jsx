import React from 'react';
import styled from 'styled-components';
import Avatar from '../pages/Avatar';

const ContainerWrap = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 645px;
  margin: 0 auto;
  padding: 40px 20px;
  border-bottom: 1px solid ;
  font-size: 16px;
  font-family: sans-serif;
  color: #333333;
`;

const Block = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 20px 20px;
  font-size: 16px;
  font-family: sans-serif;
  border-bottom: 1px solid #F2F2F2;
`;

class ContentMembersPage extends React.Component {
  render() {
    const {recipes} = this.props;
    return (
      <ContainerWrap className="theme-color">
        
        {recipes && recipes.map((recipe, index) => (
         
          <Block key={index} recipe={recipe}>
            {recipe.author && Object.values(recipe.author).map((author, index) => (
              <Avatar key={index}  author={author}/>
            ))}
          </Block>
        ))}
      </ContainerWrap>
    );
  }
}

export default ContentMembersPage;
