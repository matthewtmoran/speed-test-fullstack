import React from 'react';
import styled from 'styled-components';
import firebase, { auth } from './../../firebase.js';

const Container = styled.div`
  flex: 1;
  padding: 1em;
`;


class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this); // <-- add this line
    this.logout = this.logout.bind(this); // <-- add this line

    this.state = {
      email: '',
      password:'',
      errorMessage: null,
    };
  }


  handleChange = (e) => {
    const value = e.target.value;
    const field = e.target.name;
    this.setState({
      [field]: value
    })
  };

  handleSubmit = (e) => {
    console.log('handling submit');
    e.preventDefault();

    auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((user) => {
        console.log('created success?? ', user);
        this.setState({
          email:'',
          password: '',
          errorMessage: null
        })
      })
      .catch((error) => {
      console.log('error', error);
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      this.setState({
        errorMessage: error.message ? error.message : null
      })
    });
  };

  signout() {
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });
  }


  render() {
    return (
      <Container>
        <h1>Sign up</h1>
        <input onChange={this.handleChange} type="email" name='email'/>
        {this.state.errorMessage && <p>{this.state.errorMessage}</p>}
        <input onChange={this.handleChange} name="password" type="password"/>
        <button onClick={this.handleSubmit}>Submit</button>
      </Container>
    )
  }
}

export default Signup;