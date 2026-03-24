import React from "react";
import styles from "./Services.module.css";

const data = [
  {
    id: 1,
    img: "https://s3.rdbuz.com/Images/safety/srp/safety.svg",
    title: "SAFETY+",
    desc:
      "With Safety+ we have brought in measures like sanitized buses and mandatory masks to ensure safe travel.",
  },
  {
    id: 2,
    img: "https://cdn-icons-png.flaticon.com/512/190/190119.png",
    title: "SUPERIOR CUSTOMER SERVICE",
    desc:
      "We are always available to solve your travel issues with strong experience and support.",
  },
  {
    id: 3,
    img: "https://cdn-icons-png.flaticon.com/512/2331/2331966.png",
    title: "LOWEST PRICES",
    desc:
      "We provide the best prices with great offers, making your trips budget-friendly.",
  },
  {
    id: 4,
    img: "https://cdn-icons-png.flaticon.com/512/3176/3176293.png",
    title: "UNMATCHED BENEFITS",
    desc:
      "We enhance your journey with innovative benefits beyond just ticket booking.",
  },
];

const Services = () => {
  return (
    <div className={styles.wrapper}>
      {/* TOP ICON */}
      <div className={styles.imgBox}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
          alt="promise"
        />
      </div>

      <h1 className={styles.heading}>We Promise to Deliver</h1>

      {/* CARDS */}
      <div className={styles.grid}>
        {data.map((item) => (
          <div key={item.id} className={styles.card}>
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;