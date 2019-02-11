import React from 'react';
import styled from 'styled-components';
import { blog } from '../../data';
import ContentBlogPage from '../components/ContentBlogPage';

const Wrapper = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const TitleBlog = styled.h1`
  padding: 30px 0;
  box-sizing: content-box;
  overflow: hidden;
  font: normal 32px/2 "varela-round", Helvetica, sans-serif;
  text-overflow: ellipsis;
  text-align: center;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.2) ;
`;

const ContainerBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

class Blog extends React.Component {
  render() {
    return (
      <Wrapper className="theme-bg">
        <TitleBlog className="theme-color">Blog</TitleBlog>
        {blog.map((number, i) => (
          <ContainerBlock key={i}>
            <ContentBlogPage article={blog[i]} className="light-color">
              {number}
            </ContentBlogPage>
          </ContainerBlock>
        ))}
      </Wrapper>
    );
  }
}
export default Blog;
