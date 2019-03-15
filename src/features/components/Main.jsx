import React, {Component} from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import ImageWrap from '../../features/components/ImageWrap';
import MainContent from '../pages/MainContent';
import { deleteRecipe } from '../../app/actions/recipeActions/recipeActions';
import LoadingComponent from '../../app/layout/LoadingComponent';

const mapState = state => ({
  recipes: state.firestore.ordered.recipes,
  // images: state.firestore.ordered.images,
  loading: state.async.loading
});

const actions = {
  deleteRecipe
}

class Main extends Component {
  
  handleDeleteRecipe = (recipeId) => () => {
    this.props.deleteRecipe(recipeId);
  }

  render(){
    const { recipes, loading } = this.props;
    if (loading) return <LoadingComponent />
    
    return(
      <React.Fragment>
        <ImageWrap /> 
        <MainContent 
          deleteRecipe={this.handleDeleteRecipe} 
          recipes={recipes}  
          // images={images}
        />
      </React.Fragment>
    );
  }
};

export default compose(connect(mapState, actions)(
  firestoreConnect([
    { collection: 'recipes' },
    { collection: 'images' }
  ])(Main))
);
