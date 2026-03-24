import React from "react";
import Styles from "./BusHireForm.module.css";
import { FaRegDotCircle, FaLongArrowAltLeft } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { useHistory } from "react-router-dom";

let initState = {
  pickUp: "",
  drop: "",
  totalPassengers: "",
  email: "",
  pickUpDate: "",
  dropDate: "",
};

const BusHireForm = ({ handleClick }) => {
  const [formValues, setFormValues] = React.useState(initState);
  const history = useHistory();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Basic Validation
    if (
      !formValues.pickUp ||
      !formValues.drop ||
      !formValues.pickUpDate ||
      !formValues.dropDate ||
      !formValues.totalPassengers
    ) {
      alert("Please fill all fields");
      return;
    }

    // Navigate with query params
    history.push(
      `/bus-hire-card?pickUp=${formValues.pickUp}&drop=${formValues.drop}&pickUpDate=${formValues.pickUpDate}&dropDate=${formValues.dropDate}&totalPassengers=${formValues.totalPassengers}`
    );
  };

  return (
    <div className={Styles.BusHireFormcontainer}>
      
      {/* Header */}
      <div className={Styles.outstationHeading}>
        <FaLongArrowAltLeft onClick={handleClick} />
        <div>Outstation</div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit}>

        <div className={Styles.formWrapper}>

          {/* Pickup & Destination */}
          <div className={Styles.pickUpDestnationDiv}>
            <div className={Styles.pickupDestiationHeading}>Pick up</div>

            <div className={Styles.pickUpDestnationEachDiv}>
              <FaRegDotCircle className={Styles.redIcon} />
              <input
                className={Styles.inputBox}
                type="text"
                placeholder="Enter pickup location"
                value={formValues.pickUp}
                name="pickUp"
                onChange={handleChange}
              />
            </div>

            <div className={Styles.destinationDivider}>
              <div className={Styles.dottedDiv}></div>
              <div className={Styles.pickupDestiationHeading}>Destination</div>
            </div>

            <div className={Styles.pickUpDestnationEachDiv}>
              <HiLocationMarker className={Styles.greenIcon} />
              <input
                className={Styles.inputBox}
                type="text"
                placeholder="Enter destination"
                value={formValues.drop}
                name="drop"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Dates */}
          <div className={Styles.pickUpDestnationDiv}>
            <div className={Styles.dateRow}>
              
              <div className={Styles.dateBox}>
                <div className={Styles.fromWhenHeading}>From</div>
                <input
                  className={Styles.inputBox}
                  type="date"
                  value={formValues.pickUpDate}
                  name="pickUpDate"
                  onChange={handleChange}
                />
              </div>

              <div className={Styles.dateBox}>
                <div className={Styles.fromWhenHeading}>To</div>
                <input
                  className={Styles.inputBox}
                  type="date"
                  value={formValues.dropDate}
                  name="dropDate"
                  onChange={handleChange}
                />
              </div>

            </div>
          </div>

          {/* Passengers */}
          <div className={Styles.pickUpDestnationDiv}>
            <div className={Styles.fromWhenHeading}>Passengers</div>
            <input
              className={Styles.inputBox}
              type="number"
              placeholder="Enter number of passengers"
              value={formValues.totalPassengers}
              name="totalPassengers"
              onChange={handleChange}
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className={Styles.proceedDiv}>
            Proceed
          </button>

        </div>
      </form>
    </div>
  );
};

export default BusHireForm;