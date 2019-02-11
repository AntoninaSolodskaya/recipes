import React, { Component } from 'react';
import { connect } from 'react-redux'
import cuid from 'cuid';
import styled from 'styled-components';
import { createRecipe, updateRecipe } from '../../app/actions/recipeActions/recipeActions';


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 20px;
  color: rgba(255,247,247,1);
  font-size: 16px;
  background-color: rgba(0, 0, 0, 0.6);
`;

const Title = styled.h1`
  padding: 30px 0;
  box-sizing: content-box;
  overflow: hidden;
  font: normal 32px/2 "varela-round", Helvetica, sans-serif;
  text-overflow: ellipsis;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.2);
  color: #CD8D5F;
`;

const TitleWrap = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #A9A9A9;
  background-color: rgba(0, 0, 0, 0.6);
`;

const Section = styled.div`
  display: flex;
  width: 100%;
`;

const SubmitBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const SubmitBtn = styled.button`
  border: 1px solid #E8E8E8;
  padding: 8px 27px;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  background-color: initial;
  &:active {
    border: 1px solid #B67D54;
    background-color: #B67D54;
  }
`;

const Button = styled.button`
  font-size: 16px;
  padding: 4px 10px;
  margin-bottom: 20px;
  color: #ffffff;
`;

const mapState = (state, ownProps) => {
  const recipeId = ownProps.match.params.id;

  let recipe = {
    title: '',
    description: '',
    servings: '',
    prepTime: '',
    cookTime: '',
    tags: '',
    ingredients: [],
    likes: '',
    dislike: '',
    steps: []
  }

  if (recipeId && state.recipes.length > 0) {
    recipe = state.recipes.filter(recipe => recipe.id === recipeId)[0]
  }

  return {
    recipe
  }
}

const actions = {
  createRecipe,
  updateRecipe
}

class RecipeForm extends Component {

  state = {
    recipe: Object.assign({}, this.props.recipe)
  }

  onFormSubmit = (evt) => {
    evt.preventDefault();
    if (this.state.recipe.id) {
      this.props.updateEvent(this.state.recipe);
      this.props.history.goBack();
    } else {
      const newRecipe = {
        ...this.state.recipe,
        id: cuid(),
        avatar: '/assets/user.png'
      }
      this.props.createRecipe(newRecipe)
      this.props.history.push('/recipes')
    }

  }

  onInputChange = (evt) => {
    const newRecipe = this.state.recipe;
    newRecipe[evt.target.name] = evt.target.value
    this.setState({
      recipe: newRecipe
    })
  }

  render() {

    const {handleCancel} = this.props;
    const {recipe} = this.state;
    return (

      <React.Fragment>
        <TitleWrap>
          <Title>
            Submit a Recipe
          </Title>
        </TitleWrap>
        <Wrapper>
          <form onSubmit={this.onFormSubmit}>
            <SubmitBlock>
              <Section>
                <label>Recipe Title</label>
                <input name='title' type="text" onChange={this.onInputChange} value={recipe.title} placeholder="Recipe Title" />
              </Section>
              <Section>
                <label>Description</label>
                <input name='description' type="text" onChange={this.onInputChange} value={recipe.description} placeholder="Description" />
              </Section>
              <Section>
                <label>Servings:</label>
                <input name='servings' type="date" onChange={this.onInputChange} value={recipe.servings} placeholder="Description" />
              </Section>
              <Section>
                <label>Previous Time:</label>
                <input name='prepTime' type="date" onChange={this.onInputChange} value={recipe.prepTime} placeholder="Previous Time" />
              </Section>
              <Section>
                <label>Cooking Time:</label>
                <input name='cookTime' type="date" onChange={this.onInputChange} value={recipe.cookTime} placeholder="Cooking Time" />
              </Section>
              <Section>
                <label>Tags</label>
                <input name='tags' type="date" onChange={this.onInputChange} value={recipe.tags} placeholder="Tags" />
              </Section>
              <Section>
                <label>Likes</label>
                <input name='likes' type="date" onChange={this.onInputChange} value={recipe.likes} placeholder="Likes" />
              </Section>
              <Section>
                <label>Dislikes</label>
                <input name='dislike' type="date" onChange={this.onInputChange} value={recipe.dislike} placeholder="Dislikes" />
              </Section>
              <Section>
                <label>Ingredients</label>
                <input name='ingredients' type="text" onChange={this.onInputChange} value={recipe.ingredients} placeholder="Ingredients" />
              </Section>
              <Section>
                <label>Steps</label>
                <input name='steps' type="text" onChange={this.onInputChange} value={recipe.steps} placeholder="Steps" />
              </Section>
              <SubmitBtn
                type="button"
                onClick={this.submitRecipe}
              >
                Submit Recipe
              </SubmitBtn>
              <Button onClick={this.props.history.goBack} type="button">Cancel</Button>
            </SubmitBlock>
          </form>
        </Wrapper>
      </React.Fragment>
    )
  }
}

export default connect(mapState, actions)(RecipeForm);
