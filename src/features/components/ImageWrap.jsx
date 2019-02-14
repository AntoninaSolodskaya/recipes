import React from 'react';
import styled from 'styled-components';

const PictureBlock = styled.div`
  background: url("https://shkolazhizni.ru/img/content/i156/156532_or.jpg") no-repeat center;
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 13px 20px 13px;
  &:before {
    content: "";
    display: block;
    padding-top: 50%;
  }
`;

const Item = styled.h1`
  display: flex;
  flex-wrap: nowrap;
  text-align: center;
  color: #fff;
  font-family: 'Niconne', cursive;
  font-size: 90px;
  font-weight: 400;
  padding: 20px 20px;
  text-shadow: #474747 3px 5px 2px;
`;

const ImageWrap = () => (
  <PictureBlock>
    <Item>Welcome to the Recipes</Item>
  </PictureBlock>
);

export default ImageWrap;
