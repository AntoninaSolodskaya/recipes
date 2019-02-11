import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { instagram, facebook, twitter } from '../../icons';
import Header from '../../features/components/Header';
import Footer from '../../features/components/Footer';
import Main from '../../features/components/Main';
import Blog from '../../features/pages/Blog';
import BlogPage from '../../features/pages/BlogPage';
import RecipePage from '../../features/pages/RecipePage';
import Edit from '../../features/pages/Edit';
import Members from '../../features/pages/Members';
import MainContent from '../../features/pages/MainContent';

class App extends Component {
  render() {
    return (
      <div id="main-wrap">
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
              <Route exact path="/add-recipe" component={Edit} />
              <Route exact path="/recipes/:recipeId" component={RecipePage} />
              <Route exact path="/members" component={Members} />
              <Route exact path="/blog" component={Blog} />
              <Route exact path="/blog/:blogId" component={BlogPage} /> 
            </Switch>
          </main>
          <Footer /> 
        </div>
      </div>
    );
  }  
}

export default App;
