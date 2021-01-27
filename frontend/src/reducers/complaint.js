import {COMPLAINTPOST_SUCCESS,COMPLAINTPOST_FAILURE} from '../actions/actionTypes';

const initialState = {
    complaints:[]
  };


export default function(state = initialState, action) {
    switch (action.type) {
      
      case COMPLAINTPOST_SUCCESS:
      case COMPLAINTPOST_FAILURE:
        
        
        return {
          ...state
          
        };
        default:
      return state;
    }
}