import React from 'react';
import ImageWrap from '../../features/components/ImageWrap';
import MainContent from '../pages/MainContent';
import RecipeForm from '../pages/RecipeForm';

const Main = () => (
  <React.Fragment>
    <ImageWrap />
    <MainContent />
    <RecipeForm />
  </React.Fragment>
);

export default Main;
