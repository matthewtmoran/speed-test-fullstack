import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import styled from 'styled-components';
import {Navbar, Footer} from '../views/components'

const Container = styled.div`
  height: 100%;  
  display: flex;
  flex-direction: column;
  flex: 1;
`;


const PrivateRoute = ({component: Component, authed, logout, ...rest}) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Container>
          <Navbar logout={logout}/>
          {authed ? (<Component {...props} />) : (<Redirect to={'/'}/>)}
          <Footer/>
        </Container>
      )}
    />
  )
};

export default PrivateRoute;