import {
  COMPLAINTPOST_SUCCESS,
  COMPLAINTPOST_FAILURE,
  GETCOMPLAINT_SUCCESS,
  GETCOMPLAINT_FAILURE,
  GETDEPARTMENT_FAILURE,
  GETDEPARTMENT_SUCCESS,
  POSTDEPARTMENT_FAILURE,
  POSTDEPARTMENT_SUCCESS,
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
    case POSTDEPARTMENT_FAILURE:
      return {
        ...state,
      };

    case GETCOMPLAINT_SUCCESS:
      return {
        ...state,
        complaints: action.payload,
      };

    case GETDEPARTMENT_SUCCESS:
    case POSTDEPARTMENT_SUCCESS:
      const newArr = [action.payload] ;
      state.departments.forEach(ele => newArr.push(ele)) ;
      console.log("Reducer Array", newArr);

      return {
        ...state,
        departments: newArr,
        err: null,
      };

    case GETDEPARTMENT_FAILURE:
      return {
        ...state,
        err: action.error,
      };
    default:
      return state;
  }
}
