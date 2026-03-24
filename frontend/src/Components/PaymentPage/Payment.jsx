import React from "react";
import Styles from "./Payment.module.css";
import { useSelector } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";

const Payment = () => {
  const history = useHistory();

  // 🔥 Destructured state (clean)
  const {
    seats,
    fare,
    departureDetails,
    arrivalDetails,
    operatorName,
    passengerDetails,
    email,
    busId,
    phoneNumber,
    duration,
    isBusinessTravel,
    isInsurance,
    isCovidDonated,
  } = useSelector((state) => state.busDetailsReducer);

  const currentCustomer = useSelector(
    (state) => state.authReducer.currentCustomer
  );

  // 🧾 Create Booking + Payment
  const makePayment = async (token) => {
    const booking = {
      customerId: currentCustomer?._id,
      passengerDetails,
      email,
      phoneNumber,
      fare,
      status: "upcoming",
      busId,
      bookingDate: new Date().toISOString().split("T")[0],
      seats,
      departureDetails,
      arrivalDetails,
      duration,
      isBusinessTravel,
      isInsurance,
      isCovidDonated,
    };

    try {
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/v1/api/booking`,
        booking
      );

      alert("Payment Successful 🎉");
      history.push("/my-profile");
    } catch (err) {
      console.error("Payment Error:", err);
      alert("Payment failed ❌");
    }
  };

  return (
    <div className={Styles.wrapper}>
      {/* LEFT SECTION */}
      <div className={Styles.left}>
        <input
          className={Styles.offerInput}
          placeholder="Enter Offer Code"
        />

        {/* STRIPE PAYMENT */}
        <div className={Styles.stripeBox}>
          <StripeCheckout
            stripeKey="pk_test_51D9ybxG1hGhZmBxslwCy9OlHcJhpAqtbxdWrzyGfzTScoJ0RQEBJax7X2z8sE0MRAjl9KUn0R9Q0mz6x1ORmS2mg00IfXp80ED"
            token={makePayment}
            name="Bus Booking"
            amount={fare * 100}
            currency="INR"
          >
            <button className={Styles.payBtn}>
              Pay ₹{fare}
            </button>
          </StripeCheckout>
        </div>

        {/* OTHER METHODS */}
        <h3 className={Styles.heading}>Other Payment Methods</h3>

        <div className={Styles.methods}>
          <label><input type="radio" /> Credit Card</label>
          <label><input type="radio" /> Debit Card</label>
          <label><input type="radio" /> UPI</label>
          <label><input type="radio" /> Net Banking</label>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className={Styles.right}>
        {/* BOOKING CARD */}
        <div className={Styles.card}>
          <h3>{operatorName}</h3>

          <p><b>Seats:</b> {seats?.join(", ")}</p>

          <p>
            <b>Boarding:</b>{" "}
            {departureDetails?.city} ({departureDetails?.time})
          </p>

          <p>
            <b>Dropping:</b>{" "}
            {arrivalDetails?.city} ({arrivalDetails?.time})
          </p>

          <p><b>Passenger:</b> {currentCustomer?.name}</p>
        </div>

        {/* FARE BOX */}
        <div className={Styles.fareBox}>
          <h3>Total Payable</h3>
          <h2>₹ {fare}</h2>
        </div>
      </div>
    </div>
  );
};

export default Payment;