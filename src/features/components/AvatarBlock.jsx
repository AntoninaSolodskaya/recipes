import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const ContentBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

const Span = styled.span`
  color: #CD8D5F;
  font-weight: bold;
  margin: 0 20px;
`;

const AvatarSection = styled.div`
  height: 70px;
  width: 70px;
  border-radius: 50%;
  margin: 0 20px 0 12px;
`;

const ContextList = styled.span`
  margin: 8px 5px 8px 0;
  color: #CD8D5F;
  font-family: sans-serif;
  font-size: 18px;
`;

class AvatarBlock extends React.Component {
  render() {
    const { author } = this.props;
    let newDate = author.joinDate;

    return (
      <ContentBlock>
        <AvatarSection style={{ background: `url(${author.photoURL})no-repeat center/cover` }} />
        <Span>{author.displayName}</Span>
        <ContextList>{moment(newDate, 'DD.MM.YYYY').format('YYYY/MM/DD')}</ContextList>
      </ContentBlock>
    );
  }
}

export default AvatarBlock;
