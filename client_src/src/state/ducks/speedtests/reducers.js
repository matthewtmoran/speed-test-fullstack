import {combineReducers} from 'redux';
import * as types from './types';


const initialState = {};

const initialAllIds = [];

const speedtest = (state, action) => {
  switch(action.type) {
    case types.CREATE: {
      return {
        ...action.payload,
      }
    }
    default:
      return state;
  }
};

const byId = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE:
      return {
        ...state,
        [action.payload.id]: speedtest(state[action.payload.id], action),
      };
    case types.UPDATE:
      return {
        ...state,
        [action.payload.id]: speedtest(state[action.payload.id], action),
      };
    case types.REMOVE:
      return state;
    default:
      return state;
  }
};

const allIds = (state = initialAllIds, action) => {
  switch (action.type) {
    case types.CREATE: {
      const newId = initialAllIds.length+1;
      return [...state, newId];
    }
    default:
      return state;
  }
};

const getAllSpeedtests = (state) => {
  return state.allIds.map(id => state.byId[id]);
};

export const getVisibleSpeedtests = (state, filter) => {
  const allSpeedtests = getAllSpeedtests(state);
  switch(filter) {
    case 'all':
      return allSpeedtests;
    case 'completed':
      return allSpeedtests.filter(t => t.completed);
    case 'active':
      return allSpeedtests.filter(t => !t.completed);
    default:
      throw new Error(`unknown filter ${filter}.`)
  }
};

const speedtests = combineReducers({
  byId,
  allIds
});

export default speedtests;