import axios from "axios";
import {COMPLAINTPOST_SUCCESS,COMPLAINTPOST_FAILURE,GETCOMPLAINT_SUCCESS,GETCOMPLAINT_FAILURE} from './actionTypes';
export const postcomplaint=({ university, college, department, title,complaint })=>{
    return async (dispatch) => {
        const config = {
            headers: {
              "Content-Type": "application/json",
              "x-auth-token":localStorage.token
            },
          };
        const body=JSON.stringify({university, college, department, title,complaint});

        try {
            const res = await axios.post("/api/complaint", body, config);
            dispatch({
                type: COMPLAINTPOST_SUCCESS,
                payload: res.data,
              });
        } catch (error) {
            dispatch({
                type: COMPLAINTPOST_FAILURE,
              });
        }
    }
}

export const getcomplaint=()=>{
  return async (dispatch) => {
      try {
        const config = {
            headers: {
              "Content-Type": "application/json",
              "x-auth-token":localStorage.token
            },
          };
        const res=await axios.get("/api/complaint",config)

        dispatch({
          type:GETCOMPLAINT_SUCCESS,
          payload:res.data
        })

      } catch (err) {
        dispatch({
          type:GETCOMPLAINT_FAILURE
        })
      }
  }
}
