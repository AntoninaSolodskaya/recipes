import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import moment from 'moment';
import AvatarBlock from './AvatarBlock';

const ContentBlock = styled.div`
  max-width: 630px;
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-family: sans-serif;
`;

const Data = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const Line = styled.span`
  width: 50px;
  border-bottom: 4px solid #B67D54;
  margin: 0 auto;
`;

const Title = styled.div`
  font-family: sans-serif;
  text-align: center;
  font-size: 16px;
  padding: 20px 10px;
`;

const Image = styled.div`
  max-width: 575px;
  width: 100%;
  position: relative;
  margin: 0 25px;
   &:before {
    content: "";
    display: block;
    padding-top: 50%;
  }
    @media(max-width: 450px) {
    width: 90%;
    margin: 0 auto;
  }
`;

const PreviewText = styled.div`
  font-family: sans-serif;
  font-size: 18px;
  margin: 20px 28px;
  padding-right: 10px;
`;

const StyledLink = styled(Link)`
  padding: 20px 0;
  color: #CD8D5F;
`;

class ContentBlogPage extends React.Component {
  render() {
    const { article, isFullArticle } = this.props;
    return (
      <ContentBlock className="light-color">
        <Data>{moment(article.data).format('LL')}</Data>
        <Line />
        <Title>{article.title}</Title>
        <Image style={{ background: `url(${article.image})no-repeat center/cover` }} />
        {isFullArticle ? (
          <div dangerouslySetInnerHTML={{ __html: article.text }} style={{ maxWidth: 600, fontSize: 17, lineHeight: 2, paddingLeft: 25, marginTop: 20, marginBottom: 20 }}>
          </div>
        ) : (
          <PreviewText>{article.previewText}
            <StyledLink to={`/blog/${article.id}`}>Read More</StyledLink>
          </PreviewText>
        )}
        {isFullArticle ? (
          <AvatarBlock tags={article.tags} author={article.author} title="Author" />
        ) : (
          <div></div>
        )}
      </ContentBlock>
    );
  }
};

export default ContentBlogPage;
