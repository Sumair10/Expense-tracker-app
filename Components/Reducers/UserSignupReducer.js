import * as type from "../Actions/ActionTypes";

const initialState = {
  loading: false,
  currentUser: null,
  error: null,
};

// student reducer

const userSignupReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.USER_SIGNUP_START:
      return {
        ...state,
        loading: true,
      };
    case type.USER_SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        currentStudent: action.payload,
      };
    case type.USER_SIGNUP_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return action;
  }
};

export default userSignupReducer;
