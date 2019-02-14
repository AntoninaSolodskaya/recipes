import React from 'react';
import styled from 'styled-components';

const ModalWrap = styled.div`
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

const Modal = styled.form`
  max-width: 430px;
  max-height: 335px;
  height: 100%;
  width: 100%;
  background: #CD8D5F;
  display: flex;
  flex-direction: column;
  margin: 0 20px;
`;

const Title = styled.h1`
  font-family: sans-serif;
  font-size: 25px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 5px 10px;
  font: bold 16px/2 "varela-round", Helvetica, sans-serif;
  color: #ffffff;
`;

const InputPassword = styled.input`
  min-height: 35px;
  margin: 10px 0;
  padding: 0 15px;
  border-radius: 4px;
  background-color: transparent;
  border: 2px solid #ffffff;
  font: normal 16px/2 "varela-round", Helvetica, sans-serif;
  color: rgba(255,247,247,1);
  ::-webkit-input-placeholder {
    color: #ffffff;
    font-size: 16px;
  }
  ::-moz-placeholder {
    color: #ffffff;
    font-size: 16px;
  }
  :-ms-input-placeholder {
    color: #ffffff;
    font-size: 16px;
  }
  :-moz-placeholder { 
    color: #ffffff;
    font-size: 16px;
  }
`;

const Input = styled(InputPassword)``;


const BtnClose = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 7px 10px;
`;

const Button = styled.button`
  background-color: transparent;
  color: #ffffff;
  cursor: pointer;
  border: 0;
  font-size: 25px;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 38px;
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

class ModalWindow extends React.Component {
 

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
   const {signIn} = this.props;
    return (
      <ModalWrap
        onClick={signIn}
      >
        <Modal
          onSubmit={this.handleSubmit}
        >
          <BtnClose>
            <Button
              onClick={signIn}
            >
              x
            </Button>
          </BtnClose>
          <Title>Logo</Title>
          <Label>Known Us:
            <Input
              type="text"
              placeholder="Known Us"
              required
            />
          </Label>
          <Label>Email:
            <InputPassword
              type="email"
              placeholder="Email"
              required
            />
          </Label>
          <Label>Password:
            <InputPassword
              type="password"
              placeholder="Password"
              required
            />
          </Label>
          <ButtonWrap>
            <ButtonSubmit type="submit">log in</ButtonSubmit>
          </ButtonWrap>
        </Modal>
      </ModalWrap>
    );
  }
}

export default ModalWindow;
