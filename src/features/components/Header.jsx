import React from 'react';
import { connect } from 'react-redux';
import { withFirebase } from 'react-redux-firebase';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import AuthenticationSection from '../pages/AuthenticateSection';
import RegisterSection from './RegisterSection';
import { openModal } from '../../app/actions/modalActions/modalsActions';

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
    align-items: flex-start;
    flex-direction: column;
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

const actions = {
  openModal
};

const mapState = state => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile
})

class Header extends React.Component {

  handleSignIn = () => {
    this.props.openModal('LoginModal')
  };

  handleRegister = () => {
    this.props.openModal('RegisterModal')
  };

  handleSignOut = () => {
    this.props.firebase.logout();
    this.props.history.push('/')
  };

  render() {
   const { auth, profile } = this.props;
   const authenticated = auth.isLoaded && !auth.isEmpty;
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
                <StyledLink to="/manage">Submit</StyledLink>
              </List>}
            </NavList>
          </Nav>
          {authenticated ? (
            <AuthenticationSection 
              profile={profile} 
              signOut={this.handleSignOut} 
            /> 
          ):( 
            <RegisterSection 
              signIn={this.handleSignIn} 
              register={this.handleRegister} 
            />
          )}
        </Wrap>
      </HeaderBlock>
    );
  }
}

export default withRouter(withFirebase(connect(mapState, actions)(Header)));
