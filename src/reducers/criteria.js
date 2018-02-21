import { handleActions } from 'redux-actions';

const defaultState = {
  time: 0,
  category: 0,
  group: 0
};

export default handleActions({
  UPDATE_TIME: (state, { payload: { value } }) => {
    return {
      ...state,
      time: value,
    }
  },
  UPDATE_CATEGORY: (state, { payload: { value } }) => {
    return {
      ...state,
      category: value,
    }
  },
  UPDATE_GROUP: (state, { payload: { value } }) => {
    return {
      ...state,
      group: value,
    }
  }
}, defaultState);