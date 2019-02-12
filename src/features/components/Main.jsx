import React, {Component} from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import cuid from 'cuid';
import ImageWrap from '../../features/components/ImageWrap';
import MainContent from '../pages/MainContent';
import RecipeForm from '../pages/RecipeForm';
import { createRecipe, deleteRecipe, updateRecipe} from '../../app/actions/recipeActions/recipeActions';

const Button = styled.button`
  text-decoration: none;
  text-align: center; 
  padding: 8px 11px; 
  border: solid 1px #998d8d; 
  border-radius: 5px; 
  color: #9e8d8d; 
  background-color: #ffffff; 
  display: inline-block;
  margin: 10px 6px;
  position: relative;
  overflow: hidden;
  font-family: 'Montserrat', sans-serif; 
  transition: .2s ease-in-out;
  &:before {
    content: "";
    background: linear-gradient(to right, #d8e0de 0%,#aebfbc 22%,#99afab 33%,#8ea6a2 50%,#829d98 67%,#4e5c5a 100%,#0e0e0e 100%);
    height: 50px;
    width: 50px;
    position: absolute;
    top: -8px;
    left: -75px;
    transform: skewX(-45deg);
  }
  &:hover {
    background: #CAD5D2;
    color: #fff;
  }
  &:hover:before {
    left: 150px;
    transition: .9s ease-in-out;
  }
  @media(max-width: 850px) {
    padding: 10px;
  }
  @media(max-width: 320px) {
    padding: 20px;
    margin: 0 15px;
  }
`;

const mapState = state => ({
  recipes: state.recipes
});

const actions = {
  createRecipe,
  deleteRecipe,
  updateRecipe
}

class Main extends Component {

  state = {
    isOpen: false,
    selectedRecipe: null
  };

  handleFormOpen = () => {
    this.setState({
      selectedRecipe: null,
      isOpen: true
    });
  };

  handleCancel = () => {
    this.setState({
      isOpen: false
    });
  };

  handleUpdateRecipe = updatedRecipe => {
    this.props.updateRecipe(updatedRecipe)
    this.setState({
      isOpen: false,
      selectedRecipe: null
    })
  }

  handleOpenRecipe = (recipeToOpen) => () => {
    this.setState({
      selectedRecipe: recipeToOpen,
      isOpen: true
    });
  };

  handleCreateRecipe = newRecipe => {
    newRecipe.id = cuid();
    newRecipe.image = '/assets/photo.jpg';
    this.props.createRecipe(newRecipe)
    this.setState({
      isOpen: false,
    });
  };

  handleDeleteRecipe = (recipeId) => () => {
    this.props.deleteRecipe(recipeId);
  }

  render(){
    const {selectedRecipe} = this.state;
    const {recipes} = this.props;
    return(
      <React.Fragment>
    {/* <ImageWrap /> */}
        <MainContent 
          deleteRecipe={this.handleDeleteRecipe} 
          onRecipeOpen={this.handleOpenRecipe} 
          recipes={recipes} 
        />
        <div>
          <Button onClick={this.handleFormOpen}>Create</Button>
          {this.state.isOpen &&
            <RecipeForm 
              updatedRecipe={this.handleUpdateRecipe} 
              selectedRecipe={selectedRecipe} 
              createRecipe={this.handleCreateRecipe} 
              handleCancel={this.handleCancel}
            />
          }
        </div>
      </React.Fragment>
    );
  }
};

export default connect(mapState, actions)(Main);
