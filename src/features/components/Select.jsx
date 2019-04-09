import React from "react";
import styled from 'styled-components';

const SelectWrap = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 50%;
  border: 1px solid #b7b7b7;
  border-radius: 4px;
  @media(max-width: 550px) {
    width: 100%;
  }
  @media(max-width: 450px) {
    width: 100%;
  }
`;

const BtnSelected = styled.label`
  display: flex;
  justify-content: flex-start;
  min-height: 35px;
  line-height: 35px;
  background-color: initial;
  border: ${props => (props.error ? '#f20943' : '#b7b7b7')};
  position: relative;
  padding-left: 10px;
  font-family: Arial,sans-serif;
  font-size: 17px;
  color: #ffffff;
  @media(max-width: 450px) {
    width: 100%;
  }
  &:hover{
    cursor: pointer;
    background-color: rgba(0.1, 0.1, 0.1, 0.6);
  }
`;

const BtnOption = BtnSelected.withComponent('button');

const SelectOptionWrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: initial;
  max-height: ${props => (props.open ? '1000px' : '0')};
  overflow: hidden;
  transition: max-height 0.3s linear 0s;
`;

const Input = styled.input`
  width: 0;
  height: 40px;
  position: absolute;
  top: 0;
  right: 0;
  &:after {
    content: '\\003E';
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translate(-50%, -50%) rotate(90deg) scaleY(1.65);
    color: #ffffff;
    font-size: 16px;
    pointer-events: none;
    z-index: 2;
    transition: all 250ms cubic-bezier(.4,.25,.3,1);
    opacity: .6;
    display: block;
    margin-left: 5px;
		}
		
		&:hover::after {opacity: 1}

		&:checked::after {
      transform: translate(-50%, -50%) rotate(90deg) scaleX(-1) scaleY(1.75);
		}
`;

const Span = styled.span`
  margin-right: 20px;
  font-family: Arial,sans-serif;
`;

class Select extends React.Component {

  state = {
    value: null,
    isOpen: false
  };

  handleClick = () => {
    this.setState({isOpen: !this.state.isOpen});
  };

  handleChange = (event) =>{
    this.setState({value: event.target.value, isOpen: !this.state.isOpen});
    this.props.changeState(event.target.value);
  };

  render() {
    const selectWrap = this.props.data.map(option => {
      return (
        <BtnOption
          type="button"
          key={option}
          id={option}
          value={option}
          onClick={this.handleChange}
        >
          {option}
        </BtnOption>
      )
    });
    return (
      <SelectWrap>
        <BtnSelected
          error={this.props.error}
        >
          <Span>{this.state.value || 'Choose...'}</Span>
          <Input
            type="checkbox"
            name="menu"
            onChange={this.handleClick}
            checked={this.state.isOpen}
          />
        </BtnSelected>
        <SelectOptionWrap
          open={this.state.isOpen}
        >
          {selectWrap}
        </SelectOptionWrap>
      </SelectWrap>
    );
  }
};

export default Select;