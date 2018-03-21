import * as types from './types';

const create = (data) => {
  return {
    type: types.CREATE,
    payload: {
    }
  }
};

const remove = (data) => {
  return {
    type: types.REMOVE,
    payload: {
      ...data
    }
  }
};


const update = (data) => {
  return {
    type: types.UPDATE,
    payload: {
      ...data
    }
  }
};


export {
  create,
  remove,
  update
}