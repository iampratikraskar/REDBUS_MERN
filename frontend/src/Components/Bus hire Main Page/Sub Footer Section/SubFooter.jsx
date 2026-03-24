import React from "react";
import Styles from "./Subfooter.module.css";

const busHireCities = [
  "Ahmedabad",
  "Mumbai",
  "Bangalore",
  "Chennai",
  "Pune",
  "Hyderabad",
  "Delhi",
];

const tempoCities = [
  "Bangalore",
  "Ahmedabad",
  "Coimbatore",
  "Vadodara",
  "Kolkata",
  "Delhi",
  "Pune",
  "Mumbai",
  "Hyderabad",
  "Chennai",
];

const SubFooter = () => {
  return (
    <div className={Styles.subFootercontainer}>
      
      {/* Bus Hire Section */}
      <div className={Styles.section}>
        <h4>Bus Hire Cities</h4>
        <div className={Styles.list}>
          {busHireCities.map((city, index) => (
            <p key={index}>Bus Hire in {city}</p>
          ))}
        </div>
      </div>

      {/* Tempo Section */}
      <div className={Styles.section}>
        <h4>Tempo Travellers</h4>
        <div className={Styles.list}>
          {tempoCities.map((city, index) => (
            <p key={index}>Tempo Travellers in {city}</p>
          ))}
        </div>
      </div>

    </div>
  );
};

export default SubFooter;