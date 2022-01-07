import { combineReducers } from "redux";
import userSignupReducer from "./UserSignupReducer";

const rootReducer = combineReducers({
  userSignupReducer,
});

export default rootReducer;
