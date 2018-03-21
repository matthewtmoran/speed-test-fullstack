import React from 'react';
import {Route, Redirect} from "react-router-dom";
// import PropTypes from "prop-types";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// import SideDrawer from "../components/SideDrawer";

import styled from 'styled-components';

const Container = styled.div`
  height: 100%;  
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const CoreLayout = ({component: Component, authed, ...rest}) => {
  console.log('rest', rest);
  return (
    <Route
      {...rest}
      render={props => (
        <Container>
          <Navbar logout={props.logout}/>
          <Component {...props}/>
        </Container>
      )}
    />
  )
};

// CoreLayout.propTypes = {
//   component: PropTypes.func.isRequired
// };

export default CoreLayout;