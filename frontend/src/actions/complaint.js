import axios from "axios";
import {
  COMPLAINTPOST_SUCCESS,
  COMPLAINTPOST_FAILURE,
  GETCOMPLAINT_SUCCESS,
  GETCOMPLAINT_FAILURE,
  GETDEPARTMENT_SUCCESS,
  GETDEPARTMENT_FAILURE,
  POSTDEPARTMENT_SUCCESS,
  POSTDEPARTMENT_FAILURE,
} from "./actionTypes";
export const postcomplaint = ({
  priority,
  department,
  title,
  complaint,
  college,
}) => {
  return async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.token,
      },
    };
    const body = JSON.stringify({
      priority,
      college,
      department,
      title,
      complaint,
    });

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
  };
};

export const getcomplaint = () => {
  return async (dispatch) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.token,
        },
      };
      const res = await axios.get("/api/complaint", config);

      dispatch({
        type: GETCOMPLAINT_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: GETCOMPLAINT_FAILURE,
      });
    }
  };
};

export const getdepartment = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("/api/departments");
      console.log("RES", res.data);
      
      dispatch({
        type: GETDEPARTMENT_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      console.log("actionsErr", err);
      dispatch({
        type: GETDEPARTMENT_FAILURE,
        error: err,
      });
    }
  };
};

export const postdepartment = ({ department }) => {
  return async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.token,
      },
    };
    const body = JSON.stringify({ department });

    try {
      console.log("body+department", body, department);
      const res = await axios.post("/api/departments", body, config);
      dispatch({
        type: POSTDEPARTMENT_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: POSTDEPARTMENT_FAILURE,
      });
    }
  };
};
