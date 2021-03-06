import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import {
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADED,
  LOGOUT
} from "./actionTypes";

// Load user
export const loadUser = () => {
  return async (dispatch) => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    try {
      const res = await axios.get("/api/auth");

      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: AUTH_ERROR,
      });
    }
  };
};

// add alert for each error later
// Register User
export const register = ({ name, email, password , college, city, address}) => {
  return async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ name, email, password , college, city, address});

    try {
      const res = await axios.post("/api/users", body, config);
      
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });

      dispatch(loadUser());
    } catch (err) {
      // const errors = err.response.data.errors;
      // if(errors){
      // dispatch alert for each error
      // }
      dispatch({
        type: REGISTER_FAIL,
      });
    }
  };
};

// Login User
export const login = (email, password ) => {
  return async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ email, password });

    try {
      const res = await axios.post("/api/auth", body, config);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });

      dispatch(loadUser());
    } catch (err) {
      // const errors = err.response.data.errors;
      // if(errors){
      // dispatch alert for each error
      // }
      dispatch({
        type: LOGIN_FAIL,
      });
    }
  };
};

export const logout = () => (dispatch) => {
  setAuthToken(null);
  dispatch({ type: LOGOUT });
};
