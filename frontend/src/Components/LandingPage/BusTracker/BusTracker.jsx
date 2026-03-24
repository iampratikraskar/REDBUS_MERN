import React from "react";
import styles from "./BusTracker.module.css";
import Button from "@material-ui/core/Button";

const data = [
  {
    id: 1,
    type: "Buses",
    number: "10,000+",
    details: "Total buses currently being tracked",
  },
  {
    id: 2,
    type: "Routes",
    number: "60,000+",
    details: "Total routes covered by live tracking",
  },
  {
    id: 3,
    type: "Users",
    number: "40,000+",
    details: "Users using Track My Bus feature",
  },
];

const BusTracker = () => {
  return (
    <div className={styles.wrapper}>
      {/* TOP SECTION */}
      <div className={styles.topSection}>
        <div className={styles.imageBox}>
          <img
            src="https://s3.rdbuz.com/Images/carousel/tmb_img.png"
            alt="tracker"
          />
        </div>

        <div className={styles.textBox}>
          <h2>Track My Bus — Smarter Way to Travel</h2>

          <p>
            Track your bus in real-time and stay updated with accurate location
            details. Keep yourself and your loved ones informed throughout your journey.
          </p>

          <Button className={styles.customBtn}>
            Know More
          </Button>
        </div>
      </div>

      {/* DIVIDER */}
      <div className={styles.divider}></div>

      {/* STATS */}
      <div className={styles.statsGrid}>
        {data.map((item) => (
          <div key={item.id} className={styles.statCard}>
            <p className={styles.type}>{item.type}</p>
            <h1>{item.number}</h1>
            <p className={styles.details}>{item.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusTracker;