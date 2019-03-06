import React from 'react';
import styled from 'styled-components';

const Block = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 16px;
  font-family: sans-serif;
`;

const AvatarImg = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  margin-right: 15px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.span`
  font-weight: bold;
  padding-bottom: 5px;
  border-bottom: 1px solid #CD8D5F;
  color: #CD8D5F;
`;


class Avatar extends React.Component {
  render() {
    const {author} = this.props;
    return (
      <Block>
        <AvatarImg style={{ background: `url(${author.photoURL || "/assets/user.png"})no-repeat center/cover` }} />
        <Section>
          <Title>{author.displayName}</Title>
        </Section>
      </Block>
    );
  }
}

export default Avatar;
