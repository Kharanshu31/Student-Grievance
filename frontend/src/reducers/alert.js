import { REMOVE_ALERT, SET_ALERT } from "../actions/actionTypes";

const initialAlertState = [];

export default function(state = initialAlertState, action) {
  switch (action.type) {

    case SET_ALERT:
      return [...state, action.payload];

    case REMOVE_ALERT:
      // here payload is id
      return state.filter((alert) => alert.id !== action.payload);

    default:
      return state;
      
  }
}
