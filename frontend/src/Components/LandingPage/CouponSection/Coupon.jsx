import React from "react";
import styles from "./Coupon.module.css";

const coupons = [
  {
    id: 1,
    text: "Save up to ₹150",
    img: "https://st.redbus.in/Images/INDOFFER/safetyplus/274_147.png",
    code: "FIRST",
  },
  {
    id: 2,
    text: "Save up to ₹150",
    img: "https://s1.rdbuz.com/images/MobileOffers/amazon/offertile..png",
    code: "FIRST",
  },
  {
    id: 3,
    text: "Save up to ₹150",
    img: "https://st.redbus.in/Images/APSRTC/new/APSRTC_1.png",
    code: "FIRST",
  },
];

const Coupon = () => {
  return (
    <div className={styles.wrapper}>
      {/* COUPONS */}
      <div className={styles.grid}>
        {coupons.map((item) => (
          <div key={item.id} className={styles.card}>
            <p className={styles.save}>{item.text}</p>

            <img src={item.img} alt="offer" />

            <p className={styles.code}>
              Use Code: <span>{item.code}</span>
            </p>
          </div>
        ))}
      </div>

      {/* FLOATING BANNER */}
      <div className={styles.banner}>
        <div className={styles.bannerLeft}>
          <img
            src="https://s3.rdbuz.com/Images/webplatform/measures/safetyplus.svg"
            alt="shield"
          />
        </div>

        <div className={styles.bannerText}>
          <h4>Introducing Safety+ Program</h4>
          <p>
            A unique certification program ensuring safety standards across all buses.
          </p>
        </div>

        <button className={styles.bannerBtn}>
          Know More →
        </button>
      </div>
    </div>
  );
};

export default Coupon;