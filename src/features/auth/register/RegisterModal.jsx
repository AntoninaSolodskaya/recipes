import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {closeModal} from '../../../app/actions/modalActions/modalsActions';
import RegisterForm from './RegisterForm';

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

const Modal = styled.div`
  max-width: 430px;
  max-height: 335px;
  height: 100%;
  width: 100%;
  background: #CD8D5F;
  display: flex;
  flex-direction: column;
  margin: 0 20px;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 6px 15px;
`;

const Button = styled.button`
  padding: 7px 10px;
`;

const Title = styled.h1`
  font-family: sans-serif;
  font-size: 25px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 20px;
`;

const actions = { closeModal };

class RegisterModal extends React.Component {
  render() {
    return (
      <ModalWrap isOpen={true}>
        <Modal>
          <Wrap>
            <Button onClick={this.props.closeModal}>X</Button>
          </Wrap>
          <Title>Register</Title>
          <RegisterForm />
        </Modal>
      </ModalWrap>
    );
  }
}

export default connect(null, actions)(RegisterModal);
