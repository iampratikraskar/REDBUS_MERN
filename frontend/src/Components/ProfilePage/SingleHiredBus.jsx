import React from "react";
import styles from "./SingleHiredBus.module.css";
import { BsCircleFill } from "react-icons/bs";

// ✅ keep images clean
const images = [
  "https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/WM/2323/1087/GW/DL/6fNUIf.jpeg",
  "https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/WM/9365/1087/GW/DL/hDsqel.jpeg",
  "https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/WM/19449/814/FR/DL/PuizKJ.jpeg",
  "https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/WM/5483/35/FR/DL/AHGCEp.jpeg",
];

const SingleHiredBus = ({ booking }) => {
  const randomImage =
    images[Math.floor(Math.random() * images.length)];

  return (
    <div className={styles.card}>
      {/* IMAGE */}
      <div className={styles.imageBox}>
        <img src={randomImage} alt="bus" />
      </div>

      {/* DETAILS */}
      <div className={styles.details}>
        <h3>Hired Bus Details</h3>

        <p>
          <BsCircleFill className={styles.dot} />
          <b>Email:</b> {booking.email}
        </p>

        <p>
          <BsCircleFill className={styles.dot} />
          <b>Pick Up:</b> {booking.pickUp}
        </p>

        <p>
          <BsCircleFill className={styles.dot} />
          <b>Drop:</b> {booking.drop}
        </p>

        <p>
          <BsCircleFill className={styles.dot} />
          <b>Pick Date:</b> {booking.pickUpDate}
        </p>

        <p>
          <BsCircleFill className={styles.dot} />
          <b>Drop Date:</b> {booking.dropDate}
        </p>

        <p>
          <BsCircleFill className={styles.dot} />
          <b>Passengers:</b> {booking.totalPassengers}
        </p>

        <p className={styles.price}>
          ₹ {booking.fare}
        </p>
      </div>
    </div>
  );
};

export default SingleHiredBus;