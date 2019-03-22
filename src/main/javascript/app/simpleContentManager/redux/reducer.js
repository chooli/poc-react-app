import {CMActionTypes} from './actions';

const initialState = {};

export const contentReducer = ((state = initialState, action) => {
  switch (action.type) {
    case CMActionTypes.NEW_CONTENT:
      return state.concat([action.content]);

    default: return state;
  }
});

export default contentReducer;
