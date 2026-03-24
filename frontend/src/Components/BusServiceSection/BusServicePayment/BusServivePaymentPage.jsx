import React from "react";
import styles from "./BusPayment.module.css";
import { MdAccountCircle, MdDateRange } from "react-icons/md";
import { VscLocation } from "react-icons/vsc";
import { useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";

const Payment = () => {
  const history = useHistory();

  const currentCustomer = useSelector(
    (state) => state.authReducer.currentCustomer
  );

  const { search } = useLocation();
  const query = new URLSearchParams(search);

  const pickUp = query.get("pickUp");
  const drop = query.get("drop");
  const pickUpDate = query.get("pickUpDate");
  const dropDate = query.get("dropDate");
  const totalPassengers = query.get("totalPassengers");
  const price = Number(query.get("price"));
  const email = query.get("email");

  const bookingHireObj = {
    pickUp,
    drop,
    pickUpDate,
    dropDate,
    totalPassengers,
    email,
    fare: price * 500,
  };

  const makePayment = async () => {
    try {
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/v1/api/bookingHire`,
        bookingHireObj
      );
      history.push("/my-profile");
    } catch (err) {
      console.error("Payment Error:", err);
      alert("Payment failed. Try again.");
    }
  };

  return (
    <div className={styles.container}>
      
      {/* LEFT SIDE */}
      <div className={styles.left}>
        
        <input
          className={styles.offerInput}
          placeholder="ENTER OFFER CODE"
        />

        {/* Stripe */}
        <div className={styles.stripeBox}>
          <StripeCheckout
            stripeKey="pk_test_51D9ybx..."
            token={makePayment}
            name="Bus Booking"
          >
            <button className={styles.payBtn}>Pay with Stripe</button>
          </StripeCheckout>
        </div>

        {/* Payment Options */}
        <h3 className={styles.sectionTitle}>Choose Payment Method</h3>

        <div className={styles.paymentOptions}>
          {["Credit Card", "Debit Card", "Wallet", "Net Banking"].map(
            (method, i) => (
              <label key={i} className={styles.option}>
                <input type="radio" name="payment" />
                <span>{method}</span>
              </label>
            )
          )}
        </div>

        {/* UPI */}
        <h4 className={styles.upiTitle}>UPI Payments</h4>
        <div className={styles.paymentOptions}>
          <label className={styles.option}>
            <input type="radio" name="payment" />
            <span>UPI ID / QR Code</span>
          </label>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className={styles.right}>
        
        {/* Trip Info */}
        <div className={styles.card}>
          
          <div className={styles.row}>
            <MdDateRange />
            <div>
              <p>Pick Up Date</p>
              <strong>{pickUpDate}</strong>
            </div>
          </div>

          <div className={styles.row}>
            <MdDateRange />
            <div>
              <p>Return Date</p>
              <strong>{dropDate}</strong>
            </div>
          </div>

          <div className={styles.row}>
            <MdDateRange />
            <div>
              <p>Passengers</p>
              <strong>{totalPassengers}</strong>
            </div>
          </div>

          <div className={styles.row}>
            <VscLocation />
            <div>
              <p>{pickUp} → {drop}</p>
            </div>
          </div>

          <div className={styles.row}>
            <MdAccountCircle />
            <div>
              <p>{currentCustomer?.name || "Guest User"}</p>
            </div>
          </div>
        </div>

        {/* Fare */}
        <div className={styles.card}>
          <h3>Fare Summary</h3>

          <div className={styles.fareRow}>
            <span>Total Payable</span>
            <strong>₹{price * 500}</strong>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Payment;