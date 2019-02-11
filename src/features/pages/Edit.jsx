import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Select from '../components/Select';
import { course, cuisine, skill } from '../../data';

const TitleWrap = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #A9A9A9;
  background-color: rgba(0, 0, 0, 0.6);
`;

const Title = styled.div`
  padding: 30px 0;
  box-sizing: content-box;
  overflow: hidden;
  font: normal 32px/2 "varela-round", Helvetica, sans-serif;
  text-overflow: ellipsis;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.2);
  color: #CD8D5F;
`;

const Wrapper = Title.extend`
  display: flex;
  flex-direction: column;
  padding: 20px 20px;
  color: rgba(255,247,247,1);
  font-size: 16px;
  background-color: rgba(0, 0, 0, 0.6);
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

const Button = SubmitBtn.extend`
  font-size: 16px;
  padding: 4px 10px;
  margin-bottom: 20px;
  color: #ffffff;
`;

const TitleSection = styled.div`
  width: 30%;
  min-width: 110px;
  @media(max-width: 450px) {
    width: 100%;
    text-align: center;
  }
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  flex: 1;
`;

const NumSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 30%;
  @media(max-width: 450px) {
    width: 100%;
    text-align: center;
  }
`;

const AmountBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ParagraphIngred = styled.div`
  width: 65%;
`;

const ParagraphAmount = styled.div`
  width: 30%;
`;

const IngredientsBlock = styled.div`
  display: flex;
  flex: 1 ;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: column;
`;

const FormBlock = IngredientsBlock.extend`
  border-bottom: 1px solid #A9A9A9;
  padding-top: 20px;
  max-width: 600px;
  margin: 0 auto;
  flex-direction: unset;
`;

const Paragraph = styled.p`
  margin-bottom: 10px;
  border: none;
  font: normal 16px/2 "varela-round", Helvetica, sans-serif;
  color: rgba(255,247,247,1);
  text-overflow: ellipsis;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.2) ;
`;

const Input = Paragraph.withComponent('input');

const InputRight = Input.extend`
  min-height: 35px;
  margin: 6px 0 10px 0;
  padding: 0 15px;
  width: 65%;
  background-color: initial;
  border: 1px solid ${props => (props.error ? '#f20943' : '#b7b7b7')};
  border-radius: 4px;
`;

const InputLeft = InputRight.extend`
  width: 30%;
`;

const DescriptionBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const AddBtn = styled.button`
  border: none;
  background: inherit;
  padding: 20px 0;
  color: #B67D54;
  text-align: left;
`;

const InputText = InputRight.extend`
  margin-bottom: 10px;
  width: 100%;
`;

const TextArea = InputText.withComponent('textarea');

const StyledTextArea = TextArea.extend`
  resize: none;
  max-height: 190px;
`;

const InputNumber = InputRight.extend`
  width: 50%;
  min-width: 210px;
  @media(max-width: 450px) {
    width: 100%;
  }
`;

const InputFile = InputText.extend`
  @media(max-width: 450px) {
    width: 100%;
  }
`;


const FormItem = ({title, type, isFullWith, hint, data, value = '', changeState = () => {}, isError}) => {

  const onChangeImage = (e) => {
    e.persist();
    console.log(e.target.files[0]);
    const file = e.target.files[0];

    if (file) {
      let _URL = window.URL || window.webkitURL;
      let img = new Image();

      img.onload = function() {
        if(this.width > this.height){
          if (file.size > 2000000) {
            return alert("File is too big");
          }
          changeState(file);
        }
        else {
          alert('vertical image');
        }
        alert(this.width + " " + this.height);
      };

      img.onerror = function() {
        alert( "not a valid file: " + file.type);
      };

      img.src = _URL.createObjectURL(file);

    }
  };

  return(
    <FormBlock>
      <NumSection>
        <TitleSection>{title}</TitleSection>
      </NumSection>
      <TextBlock>
        {type === 'input-file' && (
        <InputFile
          type="file"
          error={isError}
          onChange={onChangeImage}
        />
        )}
        {type === 'input-number' && (
        <InputNumber
          type="text"
          pattern="\d*"
          error={isError}
          value={value}
          onInput={(e) => changeState((e.target.validity.valid) ? e.target.value : value)}
        />
        )}
        {type === 'input' && (
         <InputText
            error={isError}
            type="text"
            value={value}
            onChange={(e) => changeState(e.target.value)}
          />
          )}
        {type === 'textarea' && (
        <StyledTextArea
          rows="10"
          colls="40"
          type="textarea"
          error={isError}
          value={value}
          onChange={(e) => changeState(e.target.value)}
        />
        )}
        {type === 'select' && (
        <Select
          data={data}
          changeState={changeState}
          error={isError}
        />
        )}
        {hint && (<Paragraph>{hint}</Paragraph>
        )}
      </TextBlock>
    </FormBlock>
  )
};


class Edit extends React.Component {
  state = {
    title: '',
    description: '',
    number: '',
    steps: [],
    ingredients: [],
    tags: '',
    isOpen: false,
  };

  handleDeleteRecipe = recipeId => () => {
    this.props.deleteRecipe(recipeId);
  };

  changeStep = (index, value) => {
    let changedSteps = this.state.steps;

    changedSteps[index] = value;

    this.setState({ steps: changedSteps });
  };

  addStep = () => {
    let changedSteps = this.state.steps;

    changedSteps.push('');

    this.setState({ steps: changedSteps });
  };

  addIngredient = () => {
    let changedIngrs = this.state.ingredients;

    changedIngrs.push({title: '', amount: ''});

    this.setState({ ingredients: changedIngrs });
  };

  changeIngredient = (index, name, value) => {
    let changedIngrs = this.state.ingredients;

    changedIngrs[index][name] = value;

    this.setState({ ingredients: changedIngrs, ingredientsErr: false });
  };

  changeState = (name, value) => {
    this.setState({ [name]: value, [`${name}Err`]: false });
    const localStorageRef = localStorage.getItem(`${name}`);
    if (localStorageRef) {
      this.setState({ name: JSON.parse(localStorageRef) });
    }
    console.log(localStorageRef);

    const data = JSON.parse(localStorage.getItem(`${name}`));
    console.log(data);

    localStorage.setItem(`${name}`, JSON.stringify({ [name]: value }));
    console.log(localStorage);
    this.setState({isOpen: true});

  };


  submitRecipe = () => {
    let dataForSave = {};

    if (this.state.title.trim().length > 0) {
      dataForSave.title = this.state.title.trim();
    }
    else {
      this.setState({ titleErr: true });
    }

    if (this.state.description.trim().length > 0) {
      dataForSave.description = this.state.description.trim();
    }
    else {
      this.setState({ descriptionErr: true });
    }

    if (this.state.prepTime > 0) {
      dataForSave.prepTime = this.state.prepTime;
    }
    else {
      this.setState({ prepTimeErr: true });
    }

    if (this.state.cookTime > 0) {
      dataForSave.cookTime = this.state.cookTime;
    }
    else {
      this.setState({ cookTimeErr: true });
    }

    if (this.state.servings > 0) {
      dataForSave.servings = this.state.servings;
    }
    else {
      this.setState({ servingsErr: true });
    }

    if (this.state.tags.trim().length > 0) {
      dataForSave.tags = this.state.tags
        .split(',')
        .map(tag => tag.trim())
        .filter(tag => tag.trim().length > 0);
    }
    else {
      this.setState({ tagsErr: true });
    }

    if (this.state.steps.length > 0) {
      dataForSave.steps = this.state.steps;
    }

    const filteredIngrs = this.state.ingredients
      .filter(ingr => (ingr.amount.length !== 0 && ingr.title.length !== 0));
    const partyallyFilled = this.state.ingredients
      .filter(ingr => ((ingr.title.length > 0 && ingr.amount.length === 0) || (ingr.title.length === 0 && ingr.amount.length > 0)) );

    if (filteredIngrs.length > 0 && (partyallyFilled.length === 0)) {
      dataForSave.ingredients = filteredIngrs;
    }
    else {
      this.setState({ ingredientsErr: true });
    }

    if (this.state.course) {
      dataForSave.course = this.state.course;
    }
    else {
      this.setState({ courseErr: true });
    }

    if (this.state.cuisine) {
      dataForSave.cuisine = this.state.cuisine;
    }
    else {
        this.setState({ cuisineErr: true });
    }

    if (this.state.skill) {
      dataForSave.skill = this.state.skill;
    }
    else {
      this.setState({ skillErr: true });
    }


    let reader = new FileReader();

    reader.onloadend = function () {
      dataForSave.image = reader.result;
    };

    if (this.state.image) {
      reader.readAsDataURL(this.state.image);
    }
    else {
      this.setState({ imageErr: true });
    }

    if (dataForSave.title
      && dataForSave.description
      && dataForSave.prepTime
      && dataForSave.cookTime
      && dataForSave.servings
      && dataForSave.tags
      && dataForSave.steps
      && dataForSave.ingredients
      && dataForSave.image
      && dataForSave.course
      && dataForSave.cuisine
      && dataForSave.skill)
    {
      this.context.router.history.goBack();
    }
    console.log(dataForSave);
  };

  clearForm = () => {
    localStorage.clear();
  };

  render() {
  
    const btn = this.state.isOpen && <Button onClick={this.clearForm}>Clear Form</Button>;

    return (
      <React.Fragment>
        <TitleWrap>
          <Title>
            Submit a Recipe
          </Title>
        </TitleWrap>
        <Wrapper>
          <form>
            <FormItem
              isFullWith
              title="Recipe Title"
              type="input"
              hint="Keep it short and descriptive"
              value={this.state.title}
              changeState={(value) => this.changeState('title', value)}
              isError={this.state.titleErr}
              updateProfile={this.updateProfile}
            />
            <FormItem
              isFullWith
              title="Description"
              type="textarea"
              value={this.state.description}
              changeState={(value) => this.changeState('description', value)}
              isError={this.state.descriptionErr}
            />
            <FormBlock>
              <TitleSection>Directions</TitleSection>
              <TextBlock>
                <Paragraph>Steps:</Paragraph>

                {this.state.steps.map((step, i) => (
                  <InputText
                    type="text"
                    key={i}
                    value={this.state.steps[i]}
                    onChange={(event) => this.changeStep(i, event.target.value)}
                  />)
                )}

                <AddBtn type="button" onClick={this.addStep}>AddField</AddBtn>
              </TextBlock>
            </FormBlock>
            <FormBlock>
              <TitleSection>Ingredients</TitleSection>
              <IngredientsBlock>
                <DescriptionBlock>
                  <ParagraphIngred>Ingredient:</ParagraphIngred>
                  <ParagraphAmount>Amount:</ParagraphAmount>
                </DescriptionBlock>

                 {this.state.ingredients.map((ingr, i) => {
                   const { title, amount } = this.state.ingredients[i];
                   return (
                     <AmountBlock key={i}>
                       <InputRight
                         error={this.state.ingredientsErr &&
                         ((title.length > 0 && amount.length === 0) || (title.length === 0 && amount.length > 0)) && title.length === 0}
                         type="text"
                         value={title}
                         onChange={(event) => this.changeIngredient(i,'title', event.target.value)}/>
                       <InputLeft
                         error={this.state.ingredientsErr &&
                         ((title.length > 0 && amount.length === 0) || (title.length === 0 && amount.length > 0)) && amount.length === 0}
                         type="text"
                         value={amount}
                         onChange={(event) => this.changeIngredient(i,'amount', event.target.value)}/>
                     </AmountBlock>)}
                 )}

                  <AddBtn type="button" onClick={this.addIngredient}>AddField</AddBtn>
              </IngredientsBlock>
            </FormBlock>
            <FormItem
              title="Prep Time"
              hint="minutes"
              type="input-number"
              value={this.state.prepTime}
              changeState={(value) => this.changeState('prepTime', value)}
              isError={this.state.prepTimeErr}
            />
            <FormItem
              title="Cook Time"
              hint="minutes"
              type="input-number"
              value={this.state.cookTime}
              changeState={(value) => this.changeState('cookTime', value)}
              isError={this.state.cookTimeErr}
            />
            <FormItem
              title="Servings"
              type="input-number"
              value={this.state.servings}
              changeState={(value) => this.changeState('servings', value)}
              isError={this.state.servingsErr}
            />
            <FormItem
              title="Course"
              type="select"
              data={course}
              changeState={(value) => this.changeState('course', value)}
              isError={this.state.courseErr}
            />
            <FormItem
              title="Cuisine"
              type="select"
              data={cuisine}
              changeState={(value) => this.changeState('cuisine', value)}
              isError={this.state.cuisineErr}
            />
            <FormItem
              title="Skill level"
              type="select"
              data={skill}
              changeState={(value) => this.changeState('skill', value)}
              isError={this.state.skillErr}
            />
            <FormItem
              isFullWith
              title="Tags"
              type="input"
              hint="Separate tags with commas.For example: healthy,paleo,gluten-free"
              value={this.state.tags}
              changeState={(value) => this.changeState('tags', value)}
              isError={this.state.tagsErr}
            />
            <FormItem
              isFullWith
              title="Image"
              type="input-file"
              hint="Required size: 1140px by 500px or larger.Max file size: 2 megabytes"
              changeState={(value) => this.changeState('image', value)}
              isError={this.state.imageErr}
            />
            <SubmitBlock>
              <SubmitBtn
                type="button"
                onClick={this.submitRecipe}
              >
                Submit Recipe
              </SubmitBtn>
            </SubmitBlock>
            <FormBlock>
              {btn}
            </FormBlock>
          </form>
        </Wrapper>
      </React.Fragment>
    )
  }
}

Edit.contextTypes = {
  router: PropTypes.shape({
    history: PropTypes.object.isRequired,
  }),
};

export default Edit;
