import React from 'react';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 50;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify: content: center;
  align-items: center;
`;

const Span = styled.span`
  color: #ffffff;
  padding-top: 20px;
`;


const LoadingComponent = () => {
  return (
    <Wrapper>
      <Container>
        <Loader 
          type="Oval" 
          color="#ffffff" 
          height={40} width={40} 
        />
        <Span>Loading...</Span>
      </Container>
    </Wrapper>
  )
}

export default LoadingComponent;
