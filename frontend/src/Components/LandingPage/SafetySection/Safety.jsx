import React from "react";
import styles from "./Safety.module.css";

const safetyData = [
  {
    id: 1,
    title: "Sanitized Bus",
    desc: "All Safety+ buses are sanitized and disinfected before and after every trip.",
  },
  {
    id: 2,
    title: "Mandatory Masks",
    desc: "Proper masks are mandatory for all passengers and bus staff.",
  },
  {
    id: 3,
    title: "Thermal Screening",
    desc: "Temperature checks are conducted for passengers and staff before every trip.",
  },
];

const Safety = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        
        {/* LEFT IMAGE */}
        <div className={styles.imageBox}>
          <img
            src="https://s3.rdbuz.com/Images/webplatform/measures/safetyplus.svg"
            alt="Safety+"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className={styles.content}>
          <h2>Introducing Safety+</h2>
          <h3>Travel Safe with redBus</h3>

          <button className={styles.linkBtn}>Know More →</button>

          <p className={styles.info}>
            Look for buses with <span>Safety+</span> tag while booking your journey
          </p>

          {/* FEATURES */}
          <div className={styles.grid}>
            {safetyData.map((item) => (
              <div key={item.id} className={styles.card}>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Safety;