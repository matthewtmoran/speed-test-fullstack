import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  padding: 1em;
`;

class SpeedTests extends React.Component {
  componentDidMount() {
    this.props.fetchTests(this.props.match.params.id)
  }
  render() {
    const {
      speedtests
    } = this.props;
    return (
      <Container>
        {Object.keys(speedtests).map((key, index) => {
          return <p key={key}>{speedtests[key].results}</p>
        })}
      </Container>
    )
  }
}


export default SpeedTests;