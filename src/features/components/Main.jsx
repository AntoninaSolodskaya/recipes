import React, {Component} from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import ImageWrap from '../../features/components/ImageWrap';
import MainContent from '../pages/MainContent';
import { deleteRecipe, getRecipe } from '../../app/actions/recipeActions/recipeActions';
import LoadingComponent from '../../app/layout/LoadingComponent';

const mapState = state => ({
  recipes: state.recipes,
  loading: state.async.loading
});

const actions = {
  deleteRecipe,
  getRecipe
}

class Main extends Component {

  state = {
    moreRecipes: false,
    loadingInitial: true,
    loadedRecipes: []
  }

  async componentDidMount() {
    let next = await this.props.getRecipe();
    console.log(next);

    if (next && next.docs && next.docs.length > 1) {
      this.setState({
        moreRecipes: true,
        loadingInitial: false
      })
    }
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.recipes !== nextProps.recipes) {
      this.setState({
        loadedRecipes: [...this.state.loadedRecipes, ...nextProps.recipes]
      });
    }
  };

  getNextRecipes = async () => {
    const { recipes } = this.props;
    let lastRecipe = recipes && recipes[recipes.length - 1];
    console.log(lastRecipe);
    let next = await this.props.getRecipe(lastRecipe);
    console.log(next);
    if (next && next.docs && next.docs.length <= 7) {
      this.setState({
        moreRecipes: false
      });
    }
  };

  handleDeleteRecipe = (recipeId) => () => {
    this.props.deleteRecipe(recipeId);
  };

  render(){
    const { loading } = this.props;
    const { moreRecipes, loadedRecipes } = this.state;
    if (this.state.loadingInitial) return <LoadingComponent />

    return(
      <React.Fragment>
        <ImageWrap />  
        <MainContent 
          loading={loading}
          moreRecipes={moreRecipes}
          getNextRecipes={this.getNextRecipes}
          deleteRecipe={this.handleDeleteRecipe} 
          recipes={loadedRecipes}  
        />
        <button onClick={this.getNextRecipes} disabled={!this.state.moreRecipes}>More</button>
      </React.Fragment>
    );
  }
};

export default compose(connect(mapState, actions)(
  firestoreConnect([
    { collection: 'recipes' }  
  ])(Main))
);
