import * as types  from "../types";

const initialState = {
  data: [],
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SAVE_INFO_USER:
      return {
        ...state,
        data: action.payload,
      };

    default:
     state
  }
};
