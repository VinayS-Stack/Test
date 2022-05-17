import * as Types from "../Types";

const initialState = {
  loading: false,
  userDetails: [],
  error: null,
};

export const UserLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.USER_DATA_REQUEST:
      return { ...state, loading: true };
    case Types.USER_DATA_SUCCESS:
      return { ...state, loading: false, userDetails: action.userDetails };
    case Types.USER_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    default:
      return state;
  }
};
