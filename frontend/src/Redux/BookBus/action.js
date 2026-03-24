import axios from "axios";
import {
  GET_BUS_DETAILS_FAIL,
  GET_BUS_DETAILS_REQUEST,
  GET_BUS_DETAILS_SUCCESS,
  UPDATE_BOOKING_DETAILS,
} from "./actionTypes";

// Request
const busDetailsRequest = () => {
  return {
    type: GET_BUS_DETAILS_REQUEST,
  };
};

// Success
const busDetailsSuccess = (payload) => {
  return {
    type: GET_BUS_DETAILS_SUCCESS,
    payload,
  };
};

// Update booking
export const updateBookingDetails = (payload) => {
  return {
    type: UPDATE_BOOKING_DETAILS,
    payload,
  };
};

// Fail
const busDetailsFail = () => {
  return {
    type: GET_BUS_DETAILS_FAIL,
  };
};

// ✅ MAIN FUNCTION (FIXED FOR VITE)
export const getBusDetails = (depart, arrival, date) => (dispatch) => {
  dispatch(busDetailsRequest());

  // ✅ Vite environment variable
  const BASE_URL = import.meta.env.VITE_BACKEND_URL;

  // Optional safety check
  if (!BASE_URL) {
    console.error("❌ VITE_BACKEND_URL is not defined in .env file");
    dispatch(busDetailsFail());
    return;
  }

  axios
    .get(`${BASE_URL}/v1/api/routes/${depart}/${arrival}/${date}`)
    .then((res) => {
      console.log("✅ API Response:", res.data);
      dispatch(busDetailsSuccess(res.data));
    })
    .catch((err) => {
      console.error("❌ API Error:", err);
      dispatch(busDetailsFail());
    });
};