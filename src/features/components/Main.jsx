import React, {Component} from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import ImageWrap from '../../features/components/ImageWrap';
import MainContent from '../pages/MainContent';
import { deleteRecipe } from '../../app/actions/recipeActions/recipeActions';
import LoadingComponent from '../../app/layout/LoadingComponent';

const mapState = state => ({
  recipes: state.firestore.ordered.recipes,
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
    const {recipes, loading} = this.props;
    if (loading) return <LoadingComponent />
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

export default connect(mapState, actions)(
  firestoreConnect([{ collection: 'recipes' }])(Main)
);
