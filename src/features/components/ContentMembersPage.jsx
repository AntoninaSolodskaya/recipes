import React from 'react';
import styled from 'styled-components';

const ContainerWrap = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 645px;
  margin: 0 auto;
  padding: 20px 20px;
  border-bottom: 1px solid #F2F2F2;
  font-size: 16px;
  font-family: sans-serif;
  color: #333333;
`;

const Block = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-top: 20px ;
  font-size: 16px;
  font-family: sans-serif;
`;

const Avatar = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  margin-right: 15px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.span`
  font-weight: bold;
  padding-bottom: 5px;
  border-bottom: 1px solid #CD8D5F;
`;

const Recipes = styled.div`
  margin-top: 5px;
`;

class ContentMembersPage extends React.Component {
  render() {
    const {recipe} = this.props;
    return (
      <ContainerWrap className="theme-color">
        <Block>
          <Avatar style={{ background: `url(${recipe.author.avatar})no-repeat center/cover` }} />
          <Section>
            <Title>{recipe.author.name}</Title>
            <Recipes>{recipe.likes}</Recipes>
          </Section>
        </Block>
      </ContainerWrap>
    );
  }
}

export default ContentMembersPage;
