import * as types from '../types';

const initialState = {
  user: [],
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SAVE_INFO_USER:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};
