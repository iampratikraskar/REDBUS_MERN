import React from "react";
import styles from "./MobileApp.module.css";

const MobileApp = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        
        {/* LEFT CONTENT */}
        <div className={styles.textSection}>
          <h2>Download the App for a Better Experience</h2>

          <ul>
            <li>✔ Book tickets faster</li>
            <li>✔ Live bus tracking</li>
            <li>✔ Exclusive app-only offers</li>
            <li>✔ Easy cancellations & refunds</li>
          </ul>

          {/* STORE BUTTONS */}
          <div className={styles.storeButtons}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
            />
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
            />
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className={styles.imageSection}>
          <img
            src="https://s3.rdbuz.com/Images/webplatform/mobile/mobileNew.png"
            alt="mobile app"
          />
        </div>

      </div>
    </div>
  );
};

export default MobileApp;