import React from 'react';
import styled from 'styled-components';
import Recipe from '../components/Recipe';

const RecipesWrap = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const RecipeBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px 5px;
`;

class MainContent extends React.Component {
  render() {
    const { recipes } = this.props;
    return(
      <RecipesWrap>
        <RecipeBlock> 
          {recipes &&
            recipes.map((recipe, index) => (
              <Recipe  
                key={index}
                id={recipe.id}
                recipe={recipe}
              />    
          ))}  
        </RecipeBlock>
      </RecipesWrap>
    );
  }
};
     
export default MainContent;
