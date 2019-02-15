import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { combineValidators, isRequired } from 'revalidate';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { registerUser } from '../authActions';

const Block = styled.div`
  display: flex;
  flex-direction: column;
`;

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
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

const Wrap = styled.div`
  display: flex;
  justify-content: center;
`;

const LabelError = styled.label`
  background: #FF3249;
  color: #ffffff;
  font-size: 14px;
  font-family: Arial,sans-serif;
  padding: 6px 10px;
  border-radius: 4px;
`;


const actions = {
  registerUser
}

const validate = combineValidators({
  name: isRequired('name'),
  email: isRequired('email'),
  password: isRequired('password')
})

const RegisterForm = ({ handleSubmit, registerUser, error, invalid, submitting }) => {
  return (
    <Block>
      <form onSubmit={handleSubmit(registerUser)}>
        <Section>
          <Label>Known Us:</Label>
          <Field
            name="name"
            type="text"
            placeholder="Known Us"
            component="input"
          />
        </Section>
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
        {error && 
          <Wrap>
            <LabelError>{error}</LabelError> 
          </Wrap>
        }
        <ButtonWrap>
          <ButtonSubmit disabled={invalid || submitting} type="submit">Register</ButtonSubmit>
        </ButtonWrap>
      </form>
    </Block>
  );
}

export default connect(null, actions)(reduxForm({ form: 'loginForm', validate })(RegisterForm));
