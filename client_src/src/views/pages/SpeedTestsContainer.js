import React from 'react';
import {connect} from 'react-redux';
import {speedtestOperations}from '../../state/ducks/speedtests'
import SpeedTests from './SpeedTests';

const mapStateToProps = state => {
  return {
   speedtests: state.speedtests
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTests: (id) => speedtestOperations.fetchTests(id),
  }
};

const SpeedTestsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SpeedTests);

export default SpeedTestsContainer;