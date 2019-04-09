import React from 'react';
import {blog} from "../../data";
import styled from 'styled-components';
import PropTypes from "prop-types";
import ContentBlogPage from "../components/ContentBlogPage";

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

class BlogPage extends React.Component {
  state = {
    article: null,
  };

  setBlog = (idBlog) => {
    blog.forEach((item, i) => {
      if (idBlog === item.id) {
        this.setState({ article: item });
      }
    });
  };

  componentDidMount() {
    this.setBlog(this.props.match.params.blogId);
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.recipeId !== nextProps.match.params.recipeId) {
      this.setBlog(nextProps.match.params.recipeId);
    }
  };

  render() {
    const { article } = this.state;
    return (
      <Wrapper className="theme-bg">
        <TitleBlog className="theme-color">Blog</TitleBlog>
          <ContainerBlock className="light-color">
            {article && (
              <ContentBlogPage article={article} isFullArticle={true} />
            )}
          </ContainerBlock>
      </Wrapper>
    );
  }
}

BlogPage.contextTypes = {
  router: PropTypes.shape({
    history: PropTypes.object.isRequired,
  }),
};

export default BlogPage;
