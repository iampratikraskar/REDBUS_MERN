import React, { useEffect } from "react";
import styles from "./BusServiceDetailsPage.module.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import BatteryCharging30Icon from "@material-ui/icons/BatteryCharging30";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { useParams, useLocation, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBusOnIdThunk } from "../../../Redux/busService/action";

const BusServiceDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { currentBus, isLoading } = useSelector(
    (state) => state.busServiceReducer
  );

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

  useEffect(() => {
    dispatch(getBusOnIdThunk(id));
  }, [id, dispatch]);

  if (isLoading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      
      {/* LEFT SECTION */}
      <section className={styles.left}>
        
        <img
          src={currentBus?.img}
          alt={currentBus?.vehicle}
          className={styles.image}
        />

        <h2 className={styles.heading}>Trip Summary</h2>
        <p className={styles.text}>
          The estimated route for this trip is{" "}
          <strong>1101 km</strong>
        </p>

        <h2 className={styles.heading}>Amenities</h2>
        <p className={styles.text}>
          <MusicNoteIcon /> Music System
        </p>
        <p className={styles.text}>
          <BatteryCharging30Icon /> Charging Point
        </p>

        <h2 className={styles.heading}>Important Information</h2>
        <ul className={styles.list}>
          <li>Trip cost is based on minimum 1101 KM</li>
          <li>Extra KM will be charged ₹17/km</li>
          <li>No refund for unused distance</li>
          <li>Interstate taxes included</li>
          <li>Night charges applicable</li>
        </ul>

        <h2 className={styles.heading}>Exclusions</h2>
        <ul className={styles.list}>
          <li>Free cancellation not applicable</li>
          <li>No smoking or alcohol</li>
          <li>A/C may be turned off in hills</li>
        </ul>

        <h2 className={styles.heading}>You will have access to</h2>
        <p className={styles.text}>
          <ThumbUpAltIcon /> Highly rated drivers
        </p>
        <p className={styles.text}>
          <LocationOnIcon /> Route-experienced drivers
        </p>

      </section>

      {/* RIGHT SECTION */}
      <aside className={styles.right}>
        
        <div className={styles.infoBox}>
          <p>
            It's better to choose extra KMs for local travel like sightseeing.
          </p>

          <div className={styles.priceBox}>
            <span>1101 kms</span>
            <span>₹{currentBus?.total}</span>
            <small>Extra km: ₹17/km | Extra hour: ₹170</small>
          </div>

          <Link
            className={styles.bookBtn}
            to={`/payments-hire?pickUp=${pickUp}&drop=${drop}&pickUpDate=${pickUpDate}&dropDate=${dropDate}&totalPassengers=${totalPassengers}&price=${currentBus?.total}&email=${currentCustomer?.email || "test@gmail.com"}`}
          >
            Book Now
          </Link>
        </div>

        {/* Fare Breakdown */}
        <div className={styles.fareBox}>
          <h3>Fare Breakup</h3>

          <div className={styles.row}>
            <span>Base Fare</span>
            <span>₹14517</span>
          </div>

          <div className={styles.row}>
            <span>Driver Allowance</span>
            <span>₹900</span>
          </div>

          <div className={styles.row}>
            <span>GST</span>
            <span>₹935</span>
          </div>

          <div className={styles.totalRow}>
            <span>Total</span>
            <span>₹{currentBus?.total}</span>
          </div>
        </div>

      </aside>
    </div>
  );
};

export default BusServiceDetailsPage;