import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { instagram, facebook, twitter } from '../../icons';
import Header from '../../features/components/Header';
import Footer from '../../features/components/Footer';
import Main from '../../features/components/Main';
import Blog from '../../features/pages/Blog';
import BlogPage from '../../features/pages/BlogPage';
import RecipePage from '../../features/pages/RecipePage';
import Members from '../../features/pages/Members';
import MainContent from '../../features/pages/MainContent';
import ModalWindow from '../../features/pages/ModalWindow';
import RecipeForm from '../../features/pages/RecipeForm';
import ModalManager from '../../features/pages/ModalManager';

class App extends Component {
  render() {
    return (
      <div id="main-wrap">
      <ModalManager />
        <div className="main-bg"></div>
        <div className="content-width">
          <Header
            facebook={facebook}
            instagram={instagram}
            twitter={twitter}
          />
          <main>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/recipes" component={MainContent} />
              <Route exact path="/recipes/:id" component={RecipePage} />
              <Route exact path="/manage/:id" component={RecipeForm} />
              <Route exact path="/manage" component={RecipeForm} />
              <Route exact path="/members" component={Members} />
              <Route exact path="/blog" component={Blog} />
              <Route exact path="/blog/:blogId" component={BlogPage} /> 
              <Route exact path="/login" component={ModalWindow} />
            </Switch>
          </main>
          <Footer /> 
        </div>
      </div>
    );
  }  
}

export default App;
