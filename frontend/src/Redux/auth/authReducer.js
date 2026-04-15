import * as actionTypes from "./actionTypes";

const initState = {
  isLoggedIn: false,
  currentCustomer: null,
  error: false,
  isLoading: false,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    // ✅ LOGIN SUCCESS
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        currentCustomer: action.payload, // 🔥 store full user object
        error: false,
      };

    // ❌ LOGIN FAIL
    case actionTypes.LOGIN_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        error: true,
      };

    // 🚪 LOGOUT
    case actionTypes.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        currentCustomer: null,
      };

    // 🔄 ADD CUSTOMER REQUEST
    case actionTypes.ADD_CUSTOMER_MONGO_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: false,
      };

    // ✅ ADD CUSTOMER SUCCESS
    case actionTypes.ADD_CUSTOMER_MONGO_SUCCESS:
      if (Array.isArray(action.payload)) {
        return state;
      }

      return {
        ...state,
        isLoading: false,
        error: false,
        currentCustomer: {
          ...state.currentCustomer,
          _id: action.payload, // 🔥 attach Mongo ID
        },
      };

    // ❌ ADD CUSTOMER FAIL
    case actionTypes.ADD_CUSTOMER_MONGO_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
      };

    default:
      return state;
  }
};

export { authReducer };