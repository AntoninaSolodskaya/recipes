import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import ModalWindow from '../pages/ModalWindow';
import AuthenticationSection from '../pages/AuthenticateSection';
import RegisterSection from './RegisterSection';

const HeaderBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: initial;
  min-height: 100px;
  margin: 0 20px;
  padding: 20px 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font: normal 16px/2 "varela-round", Helvetica, sans-serif;
  text-align: center;
  text-overflow: ellipsis;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.2) ;
  margin: 10px 10px;
  :hover {
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
    color: #CD8D5F;
  }
`;

const Wrap = styled.div`
  min-width: 350px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  @media(max-width: 414px) {
    align-items: flex-end;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #CD8D5F;
  font-family: 'Niconne', cursive;
  font-weight: 400; 
  font-size: 40px;
`;

const NavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  @media(max-width: 414px) {
    list-style:none;
    padding: 0;
    height: 100%;
    overflow: hidden;
    transition: max-height 0.5s linear 0s;
  }
`;

const Nav = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 414px) {
     > ${NavList} {
    max-height: 0;
    }
  }
`;

const StyledSocialLinks  = styled(StyledLink)`
  line-height: 0;
`;

const Span = styled.span`
  position: relative;
  height: 4px;
  width: 25px;
  top: -2px;
  right: -13px;
  background-color: #fff;
  display: block;
  margin: 6px 0;
  transition: .5s;
  transform: translate(-50%,-50%);
`;

const Label = styled.label`
  display: none; 
  cursor: pointer;
  @media (max-width: 414px){
    display: block;
    position: absolute;
    top: 26px;
    right: 3px;
    transform: translate(-50%,-50%);
    width: 30px;
    height: 30px;
    cursor: pointer;
    transition: .5s;
    outline: none;
    &:hover{
      border: none;
    }
  }
`;

const Input = styled.input`
  display: none;
  @media (max-width: 414px) {
    &:checked ~ ${Label} + ${NavList}{
      max-height: 1000px;
      display: flex;
      justify-content: flex-start;
    }
    &:checked ~ ${Label} {
      ${Span}:nth-child(1){
        left: 3px;
        transform: translateY(12px) rotate(-45deg);
      }
      ${Span}:nth-child(3){
        left: 3px;
        transform: translateY(-8px) rotate(45deg);
      }
      ${Span}:nth-child(2){
        opacity: 0;
      }
    }
  }
`;

const List = styled.li`
  display: flex;
  align-items: center;
  padding: 0 10px;
  &:hover{
    align-items: center;
    cursor: pointer;
    height: 100%;
  }
  @media (max-width: 414px) {
  width: 100%;
`;

const ButtonLogin = StyledLink.withComponent('button');

const StyledButton = styled(ButtonLogin)`
  background-color: initial;
  border: none;
  outline: none;
  position: relative;
`;

class Header extends React.Component {

  state = {
    authenticated: false
  };

  handleSignIn = () => {
    this.setState({
      authenticated: true
    })
  }

  handleSignOut = () => {
    this.setState({
      authenticated: false
    });
    this.props.history.push('/')
  }

  render() {

   const { authenticated } = this.state;

    return (
      <HeaderBlock>
        <Wrap>
          <Logo>Recipes</Logo>
          <Nav>
            <Input type="checkbox" name="menu" id="btn-menu" />
            <Label htmlFor="btn-menu">
              <Span></Span>
              <Span></Span>
              <Span></Span>
            </Label>
            <NavList>
              <List>
                <StyledLink to="/">Home</StyledLink>
              </List>
              <List>
                <StyledLink to="/members">Members</StyledLink>
              </List>
              <List>
                <StyledLink to="/blog">Blog</StyledLink>
              </List>
              {authenticated &&
              <List>
                <StyledLink to="/add-recipe">Submit</StyledLink>
              </List>}
            </NavList>
          </Nav>
          {authenticated ? (
            <AuthenticationSection signOut={this.handleSignOut} /> 
          ):( 
            <RegisterSection signIn={this.handleSignIn} />
          )}
        </Wrap>
      </HeaderBlock>
    );
  }
}

export default withRouter(Header);
