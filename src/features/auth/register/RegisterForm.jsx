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

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const WrapField = styled(Block)`
  display: flex;
  flex-direction: column;
  padding: 5px 40px;
  min-width: 100%;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
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
  align-items: center;
`;

const LabelError = styled.label`
  background: #FF3249;
  color: #ffffff;
  font-size: 14px;
  font-family: Arial,sans-serif;
  padding: 6px 10px;
  margin-top: 5px;
  border-radius: 4px;
`;

const Input = styled.input`
  min-height: 35px;
  width: 100%;
  @media(max-width: 450px) {
    width: 100%;
  }
`;

const actions = {
  registerUser
}

const customInput = ({ input, label, type, placeholder, meta: { touched, error } }) => (
  <WrapField>
    <Section>
      <Label>{label}</Label>
      <Input {...input} placeholder={placeholder} type={type} />
    </Section>  
    {touched && error && 
      <Wrap>
        <LabelError>{error}</LabelError> 
      </Wrap>
    }
  </WrapField>
);

const validate = combineValidators({
  name: isRequired('name'),
  email: isRequired('email'),
  password: isRequired('password')
})

const RegisterForm = ({ handleSubmit, registerUser, error, invalid, submitting }) => {
  return (
    <Block>
      <Form onSubmit={handleSubmit(registerUser)}>
        <Field
          name="displayName"
          type="text"
          label="Known Us:"
          placeholder="Known Us"
          component={customInput}
        />
        <Field
          name="email"
          type="email"
          label="Email:"
          placeholder="Email"
          component={customInput}
        /> 
        <Field
          name="password"
          type="password"
          label="Password:"
          placeholder="Password"
          component={customInput}
        />
        <ButtonWrap>
          <ButtonSubmit disabled={invalid || submitting} type="submit">Register</ButtonSubmit>
        </ButtonWrap>
      </Form>
    </Block>
  );
}

export default connect(null, actions)(reduxForm({ form: 'registerForm', validate })(RegisterForm));
