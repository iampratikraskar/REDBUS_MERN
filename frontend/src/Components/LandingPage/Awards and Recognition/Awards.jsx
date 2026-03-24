import React from "react";
import styles from "./Awards.module.css";

const awardsData = [
  {
    img: "https://s2.rdbuz.com/web/images/home/awards/Business_Standard1.png",
    title: "Most Innovative Company",
  },
  {
    img: "https://s1.rdbuz.com/web/images/home/awards/Brand_Trust_Report.png",
    title: "Most Trusted Brand",
  },
  {
    img: "https://s3.rdbuz.com/web/images/home/awards/Eye_for_Travel1.png",
    title: "Mobile Innovation Award",
  },
];

const Awards = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.borderSeparator}></div>

      <div className={styles.awardsContainer}>
        <h2 className={styles.heading}>Awards & Recognition</h2>

        <div className={styles.awardsGrid}>
          {awardsData.map((award, index) => (
            <div key={index} className={styles.card}>
              <img src={award.img} alt={award.title} />
              <p>{award.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.borderSeparator}></div>
    </div>
  );
};

export default Awards;