import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import routes from "../routes/index";
import firebase, {auth} from '../firebase.js';
import {PrivateRoute, PublicRoute} from '../routes';
import {Login, Dashboard, Home} from './pages'
import styled from 'styled-components';
const Container = styled.div`
  height: 100%;  
  display: flex;
  flex-direction: column;
  flex: 1;
`;


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      authed: false,
      loading: true,
    }
  }

  componentDidMount() {
    this.removeListener = auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          user: user,
          authed: true,
          loading: false,
        })
      } else {
        this.setState({
          user: null,
          authed: false,
          loading: false
        })
      }
    })
  }

  componentWillUnmount() {
    this.removeListener()
  }

  logout() {
    firebase.auth().signOut()
      .then(() => {
        console.log('signout success..');
      // Sign-out successful.
      })
      .catch((error) => {
        console.log('signout failed..');
      // An error happened.
    });
  }

  login() {

  }

  render() {
    return (
      !this.state.loading ?
      <Switch>
        {routes.map(({layout: Component, ...route}) => (
          <Component key={route.path}
                     path={route.path}
                     user={this.state.user}
                     authed={this.state.authed}
                     login={this.login.bind(this)}
                     logout={this.logout.bind(this)}
                     component={route.component}
                     exact={route.exact}/>
        ))}
      </Switch> : <div>loading</div>
    )
  }
};
export default App;