import React from "react";
import { BusBox } from "../BusBox/BusBox";
import styles from "./MainContainer.module.css";

// ✅ Dummy data (replace with API later)
const busData = [
  {
    _id: "1",
    operatorName: "VRL Travels",
    busType: 1,
    departureTime: 10,
    liveTracking: 1,
    reschedulable: 1,
    filledSeats: [1, 2, 3],
    rating: [2, 4, 10, 20, 30],
    routeDetails: {
      duration: 6,
      departureLocation: { name: "Pune" },
      arrivalLocation: { name: "Mumbai" },
    },
  },
  {
    _id: "2",
    operatorName: "SRS Travels",
    busType: 2,
    departureTime: 14,
    liveTracking: 1,
    reschedulable: 0,
    filledSeats: [1, 2],
    rating: [1, 2, 5, 10, 15],
    routeDetails: {
      duration: 8,
      departureLocation: { name: "Pune" },
      arrivalLocation: { name: "Bangalore" },
    },
  },
];

export const MainContainer = () => {
  return (
    <div className={styles.mainScreen}>
      
      {/* Left Sidebar */}
      <div className={styles.leftSide}>
        <h3>Filters</h3>
        <div className={styles.filter}>
          <label>
            <input type="checkbox" /> AC Buses
          </label>
        </div>
        <div className={styles.filter}>
          <label>
            <input type="checkbox" /> Sleeper
          </label>
        </div>
        <div className={styles.filter}>
          <label>
            <input type="checkbox" /> Live Tracking
          </label>
        </div>
      </div>

      {/* Right Side (Bus List) */}
      <div className={styles.rightSide}>
        {busData.map((bus) => (
          <BusBox key={bus._id} {...bus} />
        ))}
      </div>
    </div>
  );
};