import React from "react";
import styles from "./Header.module.css";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search);

  const departure = query.get("departure") || "City A";
  const arrival = query.get("arrival") || "City B";
  const date = query.get("date") || "Select Date";

  return (
    <div className={styles.header}>
      {/* BREADCRUMB */}
      <div className={styles.breadcrumb}>
        <span>Home</span>
        <span>›</span>
        <span>Bus Tickets</span>
        <span>›</span>
        <span>{departure}</span>
        <span>›</span>
        <span>{departure} → {arrival}</span>
      </div>

      {/* MAIN INFO */}
      <div className={styles.mainInfo}>
        <div>
          <h2>
            {departure} → {arrival}
          </h2>
          <p>{date}</p>
        </div>

        <div className={styles.fare}>
          Starts from <span>₹100</span>
        </div>
      </div>
    </div>
  );
};

export default Header;