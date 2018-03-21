import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

const Nav = styled.nav`
  display: flex;
  background: ${props => props.theme.colors.primary};
  padding: 20px;
`;

const NavLeft = styled.div`
  margin-right: auto;
`;

const NavRight = styled.div`
  margin-left: auto;
`;

const TitleButton = styled(Link)`
    color: ${props => props.theme.colors.base};
    padding: 0 20px;
`;

const Button = styled.button`
    color: ${props => props.theme.colors.base};
    padding: 0 20px;
`

const Navbar = ({logout}) => {
  return (
    <Nav>
      <NavLeft>
        <TitleButton to={'/'}>Home</TitleButton>
      </NavLeft>
      <NavRight>
        <Button onClick={(e) => logout()}>Log out</Button>
        <TitleButton to={'/login'}>Log In</TitleButton>
        <TitleButton to={'/signup'}>Sign Up</TitleButton>
        <TitleButton to={'/profile'}>Profile</TitleButton>
      </NavRight>
    </Nav>
  )
};

export default Navbar;