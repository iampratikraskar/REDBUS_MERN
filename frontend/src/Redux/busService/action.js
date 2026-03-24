import * as actionTypes from "./actionTypes";
import axios from "axios";

// Request
const getBusMongoRequest = () => {
  return {
    type: actionTypes.GET_BUS_MONGO_REQUEST,
  };
};

// Success
const getBusMongoSuccess = (payload) => {
  return {
    type: actionTypes.GET_BUS_MONGO_SUCCESS,
    payload,
  };
};

// ❗ FIXED Failure
const getBusMongoFailure = () => {
  return {
    type: actionTypes.GET_BUS_MONGO_FAILURE, // ✅ correct type
  };
};

// Get bus by ID
const getBusOnId = (payload) => {
  return {
    type: actionTypes.GET_BUS_MONGO_ID_SUCCESS,
    payload,
  };
};

// ✅ Get all buses
const getBusData2 = () => (dispatch) => {
  dispatch(getBusMongoRequest());

  const BASE_URL = import.meta.env.VITE_BACKEND_URL;

  axios
    .get(`${BASE_URL}/v1/api/busservice/`)
    .then((res) => {
      console.log("✅ response from db", res);
      dispatch(getBusMongoSuccess(res.data.data));
    })
    .catch((err) => {
      console.error("❌ error in bus data", err);
      dispatch(getBusMongoFailure());
    });
};

// ✅ Get bus by ID
const getBusOnIdThunk = (id) => (dispatch) => {
  dispatch(getBusMongoRequest());

  const BASE_URL = import.meta.env.VITE_BACKEND_URL;

  axios
    .get(`${BASE_URL}/v1/api/busservice/${id}`)
    .then((res) => {
      console.log("✅ response for id", res);
      dispatch(getBusOnId(res.data));
    })
    .catch((err) => {
      console.error("❌ error fetching bus by id", err);
      dispatch(getBusMongoFailure());
    });
};

export { getBusData2, getBusOnIdThunk };