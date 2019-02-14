import React, {Component} from 'react';
import { connect } from 'react-redux';
import ImageWrap from '../../features/components/ImageWrap';
import MainContent from '../pages/MainContent';
import { deleteRecipe } from '../../app/actions/recipeActions/recipeActions';

const mapState = state => ({
  recipes: state.recipes
});

const actions = {
  deleteRecipe
}

class Main extends Component {

  handleDeleteRecipe = (recipeId) => () => {
    this.props.deleteRecipe(recipeId);
  }

  render(){
    const {recipes} = this.props;
    return(
      <React.Fragment>
        <ImageWrap /> 
        <MainContent 
          deleteRecipe={this.handleDeleteRecipe} 
          recipes={recipes} 
        />
      </React.Fragment>
    );
  }
};

export default connect(mapState, actions)(Main);
