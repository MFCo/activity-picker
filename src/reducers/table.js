import { handleActions } from 'redux-actions';

const defaultState = {
  table: []
};

export default handleActions({
  UPDATE_TABLE: (state, { payload: { table } }) => {
    return {
      table: table,
    }
  }
}, defaultState);