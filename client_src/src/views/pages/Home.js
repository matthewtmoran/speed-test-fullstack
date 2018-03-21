import React from 'react';
import {Link} from 'react-router-dom';


import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  padding: 1em;
`;

const ButtonLink = styled(Link)`
    font-size: 1em;
    margin: 1em;
    padding: 1em;
    color: ${props => props.theme.colors.primary};
    border: 2px solid ${props => props.theme.colors.primary};
    background: white;
    &:hover{
        cursor: ${props => props.disabled ? 'default' : 'pointer'};
    }
`;


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: null,
      validId: false,
    };
  }

  handleChange = (e) => {
    const value = e.target.value;
    const isValidId = this.validateUUID(value);
    this.setState({
      inputValue: e.target.value,
      validId: isValidId
    });
  };

  handleClick = (e) => {
    (!this.state.inputValue || !this.state.validId) && e.preventDefault();
  };

  validateUUID = (val) => {
    const uuidRe = /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;
    return uuidRe.test(val);
  };

  render() {
    const inValid =  (!this.state.inputValue || !this.state.validId);
    return (
      <Container>
        <h1>Welcome speed test</h1>
        <h3>Enter your id to view your aggregated data</h3>
        <input type="text" onChange={this.handleChange}/>
        <ButtonLink to={`/speedtests/${this.state.inputValue}`}
                    onClick={this.handleClick}
                    disabled={inValid}>View Data</ButtonLink>
        {(!this.state.validId && this.state.inputValue) && <p>Not a valid ID</p>}
      </Container>
    )
  }
}

export default Home;