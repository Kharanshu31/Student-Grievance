import {
  COMPLAINTPOST_SUCCESS,
  COMPLAINTPOST_FAILURE,
  GETCOMPLAINT_SUCCESS,
  GETCOMPLAINT_FAILURE,
} from "../actions/actionTypes";

const initialState = {
  complaints: [],
  departments: ["Admin"],
  err: null,
};

export default function complaint(state = initialState, action) {
  switch (action.type) {
    case COMPLAINTPOST_SUCCESS:
    case COMPLAINTPOST_FAILURE:
    case GETCOMPLAINT_FAILURE:
      return {
        ...state,
      };

    case GETCOMPLAINT_SUCCESS:
      return {
        ...state,
        complaints: action.payload,
      };

    default:
      return state;
  }
}
