import * as actionTypes from "./actionTypes";
import axios from "axios";

// Request
const getRoutesRequest = () => {
  return {
    type: actionTypes.GET_ROUTES_REQUEST,
  };
};

// Success
const getRoutesSuccess = (routes) => {
  return {
    type: actionTypes.GET_ROUTES_SUCCESS,
    payload: routes,
  };
};

// Failure
const getRoutesFailure = () => {
  return {
    type: actionTypes.GET_ROUTES_FAILURE,
  };
};

// ✅ MAIN FUNCTION (FIXED)
const getRoutes = () => {
  return async (dispatch) => {
    dispatch(getRoutesRequest());

    const BASE_URL = import.meta.env.VITE_BACKEND_URL;

    try {
      const res = await axios.get(`${BASE_URL}/v1/api/routes`);
      console.log("✅ routes response:", res.data);

      dispatch(getRoutesSuccess(res.data));
    } catch (err) {
      console.error("❌ routes error:", err);
      dispatch(getRoutesFailure());
    }
  };
};

export { getRoutes };