import { combineReducers } from "redux";
import auth from "./auth";
import complaint from './complaint';
export default combineReducers({
  auth,complaint
});
