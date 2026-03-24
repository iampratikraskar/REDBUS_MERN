import React, { useEffect } from "react";
import styles from "./BusServiceCard.module.css";
import { Link, useLocation } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import { getBusData2 } from "../../../Redux/busService/action";

const BusServiceCardPage = () => {
  const dispatch = useDispatch();
  const { busList } = useSelector((state) => state.busServiceReducer);

  const { search } = useLocation();
  const query = new URLSearchParams(search);

  const pickUp = query.get("pickUp");
  const drop = query.get("drop");
  const pickUpDate = query.get("pickUpDate");
  const dropDate = query.get("dropDate");
  const totalPassengers = query.get("totalPassengers");

  useEffect(() => {
    dispatch(getBusData2());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      
      {/* 🚌 LEFT SIDE - BUS LIST */}
      <section className={styles.left}>
        <h1 className={styles.title}>
          We have {busList?.length || 0} quotations for you
        </h1>

        <div className={styles.cardGrid}>
          {busList?.map((item) => (
            <div key={item._id} className={styles.card}>
              
              {/* 🖼 Image */}
              <div className={styles.imageBox}>
                <img src={item.img} alt={item.vehicle} />
              </div>

              {/* 📄 Info */}
              <div className={styles.info}>
                <h2 className={styles.vehicle}>{item.vehicle}</h2>

                <div className={styles.price}>
                  <span>Starting Cost</span>
                  <strong>₹{item.total}</strong>
                </div>
              </div>

              {/* 🔘 Action */}
              <div className={styles.footer}>
                <Link
                  to={`/bus-hire-details/${item._id}?pickUp=${pickUp}&drop=${drop}&pickUpDate=${pickUpDate}&dropDate=${dropDate}&totalPassengers=${totalPassengers}`}
                  className={styles.link}
                >
                  <Button variant="contained" color="primary">
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ℹ️ RIGHT SIDE - INFO PANEL */}
      <aside className={styles.right}>
        
        {/* Safety Card */}
        <div className={styles.safetyCard}>
          <div className={styles.safetyHeader}>
            <img
              src="https://s3.rdbuz.com/Images/webplatform/measures/safetyplus.svg"
              alt="Safety"
            />
            <div>
              <h4>Safety +</h4>
              <p>Your safety is our first priority</p>
            </div>
          </div>

          <ul>
            <li>Hand sanitiser in all vehicles</li>
            <li>Masks worn by all staff</li>
            <li>Deep cleaning of vehicles</li>
            <li>No blankets / linen provided</li>
            <li>Regular temperature checks</li>
          </ul>
        </div>

        {/* Guidelines */}
        <div className={styles.guidelines}>
          <h3>Covid 19 travel guidelines</h3>
          <p>Check latest travel guidelines issued by State Governments</p>
        </div>
      </aside>
    </div>
  );
};

export default BusServiceCardPage;