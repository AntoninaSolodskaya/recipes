import React from 'react';
import { connect } from 'react-redux';
import { withFirestore } from 'react-redux-firebase';
import { toastr } from 'react-redux-toastr';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AvatarBlock from '../components/AvatarBlock';

const RecipeWrap = styled.div`
  min-width: 350px;
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`;

const Title = styled.h3`
  display: flex;
  flex-wrap: nowrap;
  text-align: center;
  color: #fff;
  font-family: 'Niconne',cursive;
  font-size: 90px;
  font-weight: 400;
  padding: 20px 20px;
  text-shadow: #474747 3px 5px 2px;
`;

const Image = styled.div`
  position: relative;
  width: 100%;	
  display: flex;
  justify-content: center;
  align-items: center;
  &:before {
    content: "";
    display: block;
    padding-top: 50%; 
  }
`;

const MainContentWrap = styled.div`
  max-width: 700px;
  min-width: 595px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-family: sans-serif;
  color: #333333;
`;

const LikesBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const TimeBlock = LikesBlock.extend`
  justify-content: space-between;
`;

const BlockWrap = TimeBlock.extend`
  flex-direction: unset;
  padding: 8px 0;
  border-bottom: 1px solid #f2f2f2;
`;

const Span = styled.span`
  color: #5E5E5E;
  font-weight: bold;
`;

const ButtonWrap = styled.div`
  display: flex;
  margin-top: 15px;
`;


const ItemSection = styled.p`
  font-size: 12px;
  font-family: sans-serif;
  color: #6C6C6C;
`;

const Button = ItemSection.withComponent('button');

const StyledButton = Button.extend`
  display: flex;
  font-size: 14px;
  font-family: sans-serif;
  padding: 5px 8px;
  margin-right: 5px;
  cursor: pointer;
  background: initial;
  border: 1px solid #E8E8E8;
  border-radius: 3px;
  &:active{
    background: #CD8D5F;
    color: #fff;
    border-color: transparent;
    span{
      color: #fff;
    }
  }
`;

const Item = styled.h1`
  font-size: 20px;
  font-family: sans-serif;
  color: #111111;
  padding: 10px 0;
  @media(max-width: 450px) {
    width: 100%;
    text-align: center;
  }
`;

const Ingredients = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  border-bottom: 1px solid #f2f2f2;
  @media(max-width: 450px) {
    width: 100%;
    align-items: center;
  }
`;
const ListItem = styled.li`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  list-style-type: none;
  padding: 0;
`;

const ListWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 0;
  @media(max-width: 450px) {
    width: 100%;
    text-align: center;
  }
`;

const SpanList = styled.span`
  width: 50%;
  margin: 3px 0;
  text-align: left;
`;

const InputBlock = styled.input`
  display: none;
  &:checked + label {
    text-decoration: line-through;
  }
`;

const LabelBlock = styled.label`
  display: flex;
  width: 90%;
`;

const Description = styled.div`
  white-space: pre-wrap;
  padding: 10px 0;
  border-bottom: 1px solid #f2f2f2;
`;

const Circle = styled.span`
  height: 23px;
  width: 23px;
  border-radius: 50%;
  background: #000;
  margin-right: 10px;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

const StepsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  max-width: 480px;
  margin: 25px 5px;
  border-bottom: 1px solid #E8E8E8;
`;

const ContextList = styled.span`
  margin: 8px 0;
`;

const BtnForm = styled(Link)`
  
`;

const mapState = (state) => {

  let recipe = {};

  if (state.firestore.ordered.recipes && state.firestore.ordered.recipes[0]) {
    recipe = state.firestore.ordered.recipes[0];
  }

  return {
    recipe
  }
}

class RecipePage extends React.Component {

  async componentDidMount() {
    const { firestore, match, history } = this.props;
    let recipe = await firestore.get(`recipes/${match.params.id}`);
    if (!recipe.exists) {
      history.push('/recipes');
      toastr.error('Sorry', 'Recipe not found')
    }
  }

  // async componentWillUnmount() {
  //   const { firestore, match } = this.props;
  //   await firestore.unsetListener(`recipes/${match.params.id}`);
  // }

  render() {
    const { recipe } = this.props;

    if (recipe) {
      const {
        image, title, likes, course, skill, cuisine, dislike, servings, prepTime, cookTime, description
      } = recipe;

      return (
        <RecipeWrap>
          <Image style={{ background: `url(${image})no-repeat center/cover` }}>
            <Title>{title}</Title>
          </Image>
          <MainContentWrap>
            <BlockWrap>
              <TimeBlock>
                <ItemSection>Servings</ItemSection>
                <Span>{servings}</Span>
              </TimeBlock>
              <TimeBlock>
                <ItemSection>Prep</ItemSection>
                <Span>{prepTime}</Span>
              </TimeBlock>
              <TimeBlock>
                <ItemSection>Cook</ItemSection>
                <Span>{cookTime}</Span>
              </TimeBlock>
              <LikesBlock>
                <ItemSection>Vote</ItemSection>
                <ButtonWrap>
                  <StyledButton>Like
                    <Span>{likes}</Span>
                  </StyledButton>
                  <StyledButton>Dislike
                    <Span>{dislike}</Span>
                  </StyledButton>
                </ButtonWrap>
              </LikesBlock>
            </BlockWrap>
            <Description>
              {description}
            </Description>
            <Description>
              <Span style={{marginRight: '8px'}}>{course}</Span>
              <Span style={{marginRight: '8px'}}>{skill}</Span>
              <Span style={{marginRight: '8px'}}>{cuisine}</Span>
            </Description>
            <Ingredients>
              <Item>Ingredients:</Item>
              <ListWrap>
                {recipe.ingredients &&
                  Object.values(recipe.ingredients).map((ingr, i) => (
                    <ListItem key={i}>
                      <InputBlock type="checkbox" />
                      <LabelBlock htmlFor={`check${i}`}>
                        <SpanList>{`${ingr.title}`}</SpanList>
                        <SpanList>{`${ingr.amount}`}</SpanList>
                      </LabelBlock>
                    </ListItem>
                ))}
              </ListWrap>
            </Ingredients>
            <StepsWrap>
              <Item>Directions:</Item>
              <ListWrap>
                {recipe.steps &&
                  Object.values(recipe.steps).map((number, i) => (
                    <ListItem key={i}>
                      <Circle>
                        {i + 1}
                      </Circle>
                      <ContextList  value={number}>
                        {number}
                      </ContextList>
                    </ListItem>
                ))}
              </ListWrap>
            </StepsWrap>
            {/* <AvatarBlock tags={recipe.tags} author={recipe.author} title="Recipe By" /> */}
              {recipe.author && Object.values(recipe.author).map((author, index) => (
                <AvatarBlock key={index}  author={author}/>
              ))}
            <BtnForm to={`/manage/${recipe.id}`}>Manage Recipe</BtnForm>
          </MainContentWrap>
        </RecipeWrap>
      );
    }
    return (
      <div></div>
    );
  }
}

export default withFirestore(connect(mapState)(RecipePage));
