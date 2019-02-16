import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { login, socialLogin } from '../authActions';
import { google, facebook } from '../../../icons';

const Block = styled.div`
  display: flex;
  height: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15px 15px;
  min-width: 270px;
  margin: auto;
`;

const ButtonSubmit = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  color: #CD8D5F;
  padding: 10px 30px;
  font-size: 17px;
  border: 0;
  border-radius: 4px;
  margin: 7px auto;
  width: 100%;
`;

const BtnFacebook = styled(ButtonSubmit)`
  justify-content: space-between;
  background-color: #0d47a1;
  color: #ffffff;
`;

const BtnGoogle = styled(BtnFacebook)`
  background-color: #d32f2f;
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

const Span = styled.h4`
  color: #ffffff;
  display: flex;
  justify-content: center;
`;

const actions = {
  login,
  socialLogin
}

const LoginForm = ({ login, handleSubmit, error, socialLogin }) => {
  return (
    <Block>
      <form onSubmit={handleSubmit(login)} style={{ width: '100%'}}>
        <Container>
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
            <ButtonSubmit type="submit">Log In</ButtonSubmit>
            <Span>Or</Span>
            <BtnFacebook onClick={() => socialLogin('facebook')}>{facebook}Login with Facebook</BtnFacebook>
            <BtnGoogle onClick={() => socialLogin('google')}>{google}Login with Google</BtnGoogle>
          </ButtonWrap>
        </Container>
      </form>
    </Block>
  );
}

export default connect(null, actions)(reduxForm({ form: 'loginForm'})(LoginForm));
