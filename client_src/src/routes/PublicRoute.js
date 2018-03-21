import React from 'react';
import styled from 'styled-components';
import {Route, Redirect} from 'react-router-dom';
import {Navbar, Footer} from '../views/components';


const Container = styled.div`
  height: 100%;  
  display: flex;
  flex-direction: column;
  flex: 1;
`;


const PublicRoute = ({component: Component, authed, ...rest}) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Container>
          <Navbar/>
          {!authed ? <Component {...props} /> : <Redirect to='/dashboard'/>}
          <Footer/>
        </Container>
      )}
    />
  )
};

export default PublicRoute;