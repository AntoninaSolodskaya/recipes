import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, FieldArray } from 'redux-form';
import cuid from 'cuid';
import styled from 'styled-components';
import { createRecipe, updateRecipe } from '../../app/actions/recipeActions/recipeActions';
import { validate } from '../components/validation/index';
import { renderField, SelectInput, renderTextarea, renderNumberField, ingredients, step } from "../components/fields";
import Dropzone from 'react-dropzone';

const MainContainer = styled.div`
  padding: 20px 20px;
  background-color: rgba(0, 0, 0, 0.6);
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 20px;
  font-size: 16px;
  font-family: Helvetica, sans-serif;
  margin: 0 auto;
  text-overflow: ellipsis;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.2) ;
`;

const TitleWrap = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #A9A9A9;
`;

const Title = styled.div`
  padding: 30px 0;
  box-sizing: content-box;
  overflow: hidden;
  color: #CD8D5F;
  font: normal 32px/2 "varela-round", Helvetica, sans-serif;
  text-overflow: ellipsis;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.2) ;
`;

const Block = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  @media(max-width: 450px) {
    width: 100%;
    justify-content: center;
`;

const Label = styled.label`
  width: 30%;
  min-width: 110px;
  color: #ffffff;
  @media(max-width: 450px) {
    width: 100%;
    text-align: center;
    padding: 10px 0;
  }
`;

const SubmitBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  @media(max-width: 450px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
  }
`;

const Button = styled.button`
  border: 1px solid #E8E8E8;
  border-radius: 5px;
  padding: 8px 27px;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  background-color: initial;
  &:active {
    border: 1px solid #B67D54;
    background-color: #B67D54;
  }
  @media(max-width: 450px) {
    padding: 10px;
    margin: 10px;
  }
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 55%;
  @media(max-width: 450px) {
    flex-wrap: wrap;
    width: 100%;
  }
`;
const BlockWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const WrapSelect = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
  @media(max-width: 450px) {
    flex-wrap: wrap;
    width: 100%;
  }
`;

const Item = styled.p`
  display: flex;
  justify-content: center;
`;

const course = [
  { key: 'choose...', text: 'Choose...', value: 'choose...' },
  { key: 'beverage', text: 'Beverage', value: 'beverage' },
  { key: 'bread', text: 'Bread', value: 'bread' },
  { key: 'breakfast and brunch', text: 'Breakfast and Brunch', value: 'breakfast and brunch' },
  { key: 'desert', text: 'Desert', value: 'desert' },
  { key: 'lunch and snack', text: 'Lunch and Snack', value: 'lunch and snack' },
  { key: 'main dish', text: 'Main Dish', value: 'main dish' }
];

const cuisine = [
  { key: 'choose...', text: 'Choose...', value: 'choose...' },
  { key: 'american', text: 'American', value: 'american' },
  { key: 'chinese', text: 'Chinese', value: 'chinese' },
  { key: 'french', text: 'French', value: 'french' },
  { key: 'german', text: 'German', value: 'german' },
  { key: 'italian', text: 'Italian', value: 'italian' },
  { key: 'mediterranean', text: 'Mediterranean', value: 'mediterranean' },
  { key: 'thai', text: 'Thai', value: 'thai' }
];

const skill = [
  { key: 'choose...', text: 'Choose...', value: 'choose...' },
  { key: 'easy', text: 'Easy', value: 'easy' },
  { key: 'hard', text: 'Hard', value: 'hard' },
  { key: 'medium', text: 'Medium', value: 'medium' }
];

const mapState = (state, ownProps) => {
  const recipeId = ownProps.match.params.id;

  let recipe = {};

  if (recipeId && state.recipes.length > 0) {
    recipe = state.recipes.filter(recipe => recipe.id === recipeId)[0];
  }

  return {
    initialValues: recipe
  }
}

const actions = {
  createRecipe,
  updateRecipe
}

class RecipeForm extends Component {

  onFormSubmit = values => {
    console.log(values);
    if (this.props.initialValues.id) {
      this.props.updateRecipe(values);
      this.props.history.goBack();
    } else {
      const newRecipe = {
        ...values,
        id: cuid().toString(),
        // image: `${values.image}` || '/assets/photo.jpg',
      };
      this.props.createRecipe(newRecipe);
      this.props.history.push('/');
    }
  }
  
  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    return (
      <React.Fragment>
        <MainContainer>
          <TitleWrap>
            <Title>
              Submit a Recipe
            </Title>
          </TitleWrap>
          <form onSubmit={handleSubmit(this.onFormSubmit)}>
            <Wrapper>
              <Field
                name="title"
                component={renderField}
                type="text"
                label="Recipe Title"
              />
              <Block>
                <Field
                  name="description"
                  component={renderTextarea}
                  type="textarea"
                  label="Description"
                />
              </Block>
              <BlockWrap>
                <Label>Direction</Label>
                <Wrap>
                  <FieldArray name="steps" component={step} />
                </Wrap>
              </BlockWrap>
              <BlockWrap>
                <Label>Ingredients</Label>
                <Wrap>
                  <FieldArray name="ingredients" component={ingredients} /> 
                </Wrap>
              </BlockWrap>   
                <Field
                  name="prepTime"
                  component={renderNumberField}
                  label="Prep Time"
                  type="input-number"
                  hint="minutes"
                />
                <Field
                  name="cookTime"
                  component={renderNumberField}
                  label="Cook Time"
                  type="input-number"
                  hint="minutes"
                />
                <Field
                  name="servings"
                  component={renderNumberField}
                  label="Servings"
                  type="input-number"
                />
              <WrapSelect>
                <Label>Course</Label>
                <Field
                  name="course"
                  component={SelectInput}
                  label="Choose..."
                > 
                  {course.map(option =>
                    <option key={option.key} value={option.value}>{option.text}</option>
                  )}
                </Field>
              </WrapSelect>
              <WrapSelect>
                <Label>Skill</Label>
                <Field
                  name="skill"
                  component={SelectInput}
                  label="Choose..."
                > 
                  {skill.map(option =>
                    <option key={option.key} value={option.value}>{option.text}</option>
                  )}
                </Field>
              </WrapSelect>
              <WrapSelect>
                <Label>Cuisine</Label>
                <Field
                  name="cuisine"
                  component={SelectInput}
                  label="Choose..."
                > 
                  {cuisine.map(option =>
                    <option key={option.key} value={option.value}>{option.text}</option>
                  )}
                </Field>
              </WrapSelect>
              <Field 
                name="tags"
                component={renderField}
                type="text"
                label="Tags"
                hint="Separate tags with commas.For example: healthy, paleo, gluten-free"
              />
              <Block style={{ justifyContent: 'center', minWidth: '500px'}}>
                <Field name="image" component={props =>
                  <Dropzone
                    {...props.input}
                    multiple={false}
                    onDrop = {() => props.input.onChange}
                    style={{width : '500px', height : '65px', border : '2px dashed rgb(102, 102, 102)', borderRadius: '5px' }}>
                  >
                    <Item style={{ color: '#fff'}}>Try dropping a file here, or click to select file to upload.</Item>
                  </Dropzone>
                  } type="file"
                />
              </Block>
              <SubmitBlock>
                <Button type="submit" disabled={pristine || submitting}>Submit Recipe</Button>
                <Button type="button" onClick={this.props.history.goBack}>Cancel</Button>
              </SubmitBlock>
            </Wrapper>
          </form>
        </MainContainer>   
      </React.Fragment>
    )
  }
}

export default connect(mapState, actions)(reduxForm({ form: 'recipeForm', enableReinitialize: true, validate })(RecipeForm));
