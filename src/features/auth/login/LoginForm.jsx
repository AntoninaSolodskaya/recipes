import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { login } from '../authActions';

const Block = styled.div`
  display: flex;
  flex-direction: column;
  
`;

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 20px;
`;

const Label = styled.label`
  margin: 5px 10px;
  font: bold 16px/2 "varela-round", Helvetica, sans-serif;
  color: #ffffff;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 15px;
`;

const ButtonSubmit = styled.button`
  background-color: #ffffff;
  color: #CD8D5F;
  border: 2px solid #ffffff;
  font-size: 20px;
  padding: 7px 10px;
  cursor: pointer;
  border-radius: 3px;
`;

const actions = {
  login
}

const LoginForm = ({login, handleSubmit}) => {
  return (
    <Block>
      <form onSubmit={handleSubmit(login)}>
        <Section>
          <Label>Email:</Label>
          <Field
            name="email"
            type="email"
            placeholder="Email"
            component="input"
          />
        </Section>
        <Section>
          <Label>Password:</Label>
          <Field
            name="password"
            type="password"
            placeholder="Password"
            component="input"
          />
        </Section>
        
        <ButtonWrap>
          <ButtonSubmit type="submit">log in</ButtonSubmit>
        </ButtonWrap>
      </form>
    </Block>
  );
}

export default connect(null, actions)(reduxForm({ form: 'loginForm'})(LoginForm));
