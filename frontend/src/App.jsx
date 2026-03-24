import React, { useEffect } from "react";
import axios from "axios";

import BusHireFooter from "./Components/Bus hire Main Page/Bus Hire Footer Section/BusHireFooter";
import SubFooter from "./Components/Bus hire Main Page/Sub Footer Section/SubFooter";
import Navbar from "./Components/Navbar/Navbar";
import Routes from "./Routes/Routes";

const App = () => {

  // ✅ Backend connection test
  useEffect(() => {
    axios.get("http://localhost:5000/api/test")
      .then(res => {
        console.log("Backend response:", res.data);
      })
      .catch(err => {
        console.error("Backend error:", err);
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