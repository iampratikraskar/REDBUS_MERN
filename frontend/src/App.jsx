import React, { useEffect } from "react";
import axios from "axios";

import BusHireFooter from "./Components/Bus hire Main Page/Bus Hire Footer Section/BusHireFooter";
import SubFooter from "./Components/Bus hire Main Page/Sub Footer Section/SubFooter";
import Navbar from "./Components/Navbar/Navbar";
import Routes from "./Routes/Routes";

import { useDispatch } from "react-redux";
import { loginSuccess } from "./Redux/auth/actions";

const App = () => {
  const dispatch = useDispatch();

  // ✅ AUTO LOGIN (SAFE)
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");

      if (storedUser && storedUser !== "undefined") {
        const user = JSON.parse(storedUser);

        if (user && user.email) {
          dispatch(loginSuccess(user));
        }
      }
    } catch (err) {
      console.error("Invalid user in localStorage");
      localStorage.removeItem("user");
    }
  }, [dispatch]);

  // ✅ BACKEND TEST (USE ENV)
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/test`)
      .then((res) => {
        console.log("Backend response:", res.data);
      })
      .catch((err) => {
        console.error("Backend error:", err.message);
      });
  }, []);

  return (
    <div style={{ overflowX: "hidden" }}>
      <Navbar />
      <Routes />
      <SubFooter />
      <BusHireFooter />
    </div>
  );
};

export default App;