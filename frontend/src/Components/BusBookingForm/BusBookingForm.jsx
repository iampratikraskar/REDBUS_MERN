import React, { useEffect } from "react";
import Styles from "./BusBookingForm.module.css";
import { MdAccountCircle, MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateBookingDetails } from "../../Redux/BookBus/action";

const BusBookingForm = () => {
  const seatsArray = useSelector((state) => state.busDetailsReducer.seats);

  const [passDetails, setPassDetails] = React.useState([]);
  const [passEmail, setPassEmail] = React.useState("");
  const [passPhNo, setPassPhNo] = React.useState("");
  const [passIsBusiness, setPassIsBusiness] = React.useState(false);
  const [passIsCovidDonate, setPassIsCovidDonate] = React.useState(false);
  const [passInsurance, setPassInsurance] = React.useState(false);

  // ✅ Initialize passengers properly
  useEffect(() => {
    if (seatsArray.length > 0) {
      const passengerArray = seatsArray.map(() => ({
        name: "",
        age: "",
        gender: "",
      }));
      setPassDetails(passengerArray);
    }
  }, [seatsArray]);

  let history = useHistory();
  let dispatch = useDispatch();

  const handleProceedToPay = () => {
    dispatch(updateBookingDetails({ key: "passengerDetails", value: passDetails }));
    dispatch(updateBookingDetails({ key: "email", value: passEmail }));
    dispatch(updateBookingDetails({ key: "phoneNumber", value: passPhNo }));
    dispatch(updateBookingDetails({ key: "isBusinessTravel", value: passIsBusiness }));
    dispatch(updateBookingDetails({ key: "isInsurance", value: passInsurance }));
    dispatch(updateBookingDetails({ key: "isCovidDonated", value: passIsCovidDonate }));

    history.push("/payment-page");
  };

  const handlePassChange = (e, index, field) => {
    const newArr = [...passDetails];
    newArr[index][field] = e.target.value;
    setPassDetails(newArr);
  };

  return (
    <div style={{ border: "1px solid black" }}>
      <h4 className={Styles.passenger_mainTitle}>Enter Passenger Details</h4>

      <div
        style={{
          height: "500px",
          overflowY: "scroll",
          boxShadow: "0 0 4px 0 hsla(0, 0%, 64%, 0.5)",
        }}
      >
        {seatsArray.map((seatNo, index) => (
          <div className={Styles.ContentBlock} key={index}>
            <div className={Styles.passangerInfoTitle}>
              <MdAccountCircle style={{ fontSize: "25px", color: "teal" }} />
              <span style={{ marginLeft: "10px" }}>Passenger Information</span>
            </div>

            <div style={{ display: "flex", gap: "10px" }}>
              <span>Passenger {index + 1}</span>
              <span>|</span>
              <span>Seat {seatNo}</span>
            </div>

            <div className={Styles.form_label}>Name</div>
            <input
              className={Styles.form_input}
              placeholder="Name"
              value={passDetails[index]?.name || ""}
              onChange={(e) => handlePassChange(e, index, "name")}
            />

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              {/* Gender */}
              <div>
                <div className={Styles.form_label}>Gender</div>
                <div onChange={(e) => handlePassChange(e, index, "gender")}>
                  <input type="radio" name={`gender${index}`} value="Male" /> Male
                  <input type="radio" name={`gender${index}`} value="Female" /> Female
                </div>
              </div>

              {/* Age */}
              <div>
                <div className={Styles.form_label}>Age</div>
                <input
                  className={Styles.form_input}
                  placeholder="Age"
                  value={passDetails[index]?.age || ""}
                  onChange={(e) => handlePassChange(e, index, "age")}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className={Styles.ContentBlock}>
        <div className={Styles.passangerInfoTitle}>
          <MdEmail style={{ fontSize: "25px", color: "#f1af43" }} />
          <span style={{ marginLeft: "10px" }}>Contact Details</span>
        </div>

        <div className={Styles.form_label}>Email</div>
        <input
          className={Styles.form_input}
          placeholder="Email"
          value={passEmail}
          onChange={(e) => setPassEmail(e.target.value)}
        />

        <div className={Styles.form_label}>Phone</div>
        <input
          className={Styles.form_input}
          placeholder="Phone"
          value={passPhNo}
          onChange={(e) => setPassPhNo(e.target.value)}
        />

        <div>
          <input
            type="checkbox"
            checked={passIsBusiness}
            onChange={(e) => setPassIsBusiness(e.target.checked)}
          />
          Business Travel
        </div>

        <div>
          <FaWhatsapp style={{ color: "green" }} /> WhatsApp Updates
        </div>

        <div>
          <input
            type="checkbox"
            checked={passInsurance}
            onChange={(e) => setPassInsurance(e.target.checked)}
          />
          Add Insurance
        </div>

        <div>
          <input
            type="checkbox"
            checked={passIsCovidDonate}
            onChange={(e) => setPassIsCovidDonate(e.target.checked)}
          />
          COVID Donation
        </div>
      </div>

      {/* Submit */}
      <div className={Styles.ContentBlock}>
        <input
          className={Styles.proceed_to_button}
          type="button"
          value="Proceed to Pay"
          onClick={handleProceedToPay}
        />
      </div>
    </div>
  );
};

export default BusBookingForm;