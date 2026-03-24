import React from "react";
import styles from "./SingleTrip.module.css";
import { BsCircleFill } from "react-icons/bs";

// Clean image array
const images = [
  "https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/WM/2323/1087/GW/DL/6fNUIf.jpeg",
  "https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/WM/9365/1087/GW/DL/hDsqel.jpeg",
  "https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/WM/19449/814/FR/DL/PuizKJ.jpeg",
  "https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/WM/5483/35/FR/DL/AHGCEp.jpeg",
];

const SingleTrip = ({ booking }) => {
  const randomImage =
    images[Math.floor(Math.random() * images.length)];

  return (
    <div className={styles.card}>
      {/* IMAGE */}
      <div className={styles.imageBox}>
        <img src={randomImage} alt="bus" />
      </div>

      {/* CONTENT */}
      <div className={styles.content}>
        {/* BUS DETAILS */}
        <div className={styles.section}>
          <h3>Bus Details</h3>

          <p><BsCircleFill className={styles.dot} /> <b>From:</b> {booking.departureDetails.city}</p>
          <p><BsCircleFill className={styles.dot} /> <b>Time:</b> {booking.departureDetails.time}:00</p>
          <p><BsCircleFill className={styles.dot} /> <b>Date:</b> {booking.departureDetails.date}</p>

          <p><BsCircleFill className={styles.dot} /> <b>To:</b> {booking.arrivalDetails.city}</p>
          <p><BsCircleFill className={styles.dot} /> <b>Time:</b> {booking.arrivalDetails.time}:00</p>
          <p><BsCircleFill className={styles.dot} /> <b>Date:</b> {booking.arrivalDetails.date}</p>

          <p className={styles.price}>₹ {booking.fare}</p>
        </div>

        {/* PASSENGER DETAILS */}
        <div className={styles.section}>
          <h3>Passenger Details</h3>

          <p><BsCircleFill className={styles.dot} /> {booking.email}</p>
          <p><BsCircleFill className={styles.dot} /> {booking.phoneNumber}</p>

          <div className={styles.passengerList}>
            {booking.passengerDetails.map((p, index) => (
              <div key={index} className={styles.passengerCard}>
                <p><b>Name:</b> {p.name}</p>
                <p><b>Gender:</b> {p.gender}</p>
                <p><b>Age:</b> {p.age}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTrip;