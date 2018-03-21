import React from 'react';
import styled from 'styled-components';
import firebase, { auth } from './../../firebase.js';

const Container = styled.div`
  flex: 1;
  padding: 1em;
`;


class Login extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      email: '',
      password:''
    };
  }


  handleChange(e) {
    const value = e.target.value;
    const field = e.target.name;
    this.setState({
      [field]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    auth.signInWithEmailAndPassword(this.state.email, this.state.password).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...

      this.setState({
        email:'',
        password:''
      })
    });

  }
  render() {
    return (
      <Container>
        <h1>Log in</h1>
        <input onChange={this.handleChange} type="email" name='email'/>
        <input onChange={this.handleChange} name="password" type="password"/>
        <button onClick={this.handleSubmit}>Submit</button>
      </Container>
    )
  }
}

export default Login;