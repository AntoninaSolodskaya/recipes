import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ImageWrap = styled.div`
  height: 100%;
  max-height: 175px;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  position: relative;
`;

const ImageLink = styled(Link)`
  display: block;
  height: 100%;
  min-width: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  vertical-align: middle;
  transition: all 0.5s ease-in-out;
  :hover {
    -webkit-transform: scale(1.05);
    -ms-transform: scale(1.05);
    transform: scale(1.05);
  }
`;

class Image extends React.Component {

  render() {
    const { images, recipe } = this.props;
    // let first = images[0];
    // console.log(first, first.id)
    return ( 
      <ImageWrap>
        {images && images.map(image => ( 
          <ImageLink
            key={image.id}
            style={{ background: `url(${image.downloadURL})no-repeat center/cover` }}
            to={`/recipes/${recipe.id}`} 
          />
        ))}   
      </ImageWrap>    
    )   
  }
}
export default Image;

