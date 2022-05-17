import { combineReducers } from "redux";
import { UserLoginReducer } from "./UserLoginReducer";

export const RootReducer = combineReducers({
  userLoginDetails: UserLoginReducer,
});
