import uuid from 'uuid' ;
import { SET_ALERT } from './actionTypes';

export const setAlert = (msg, alertType) => {
  return (dispatch) => {
    const id = uuid.v4() ;
    dispatch({
        type: SET_ALERT,
        payload: {msg ,alertType , id}
    }) ;
  };
};
