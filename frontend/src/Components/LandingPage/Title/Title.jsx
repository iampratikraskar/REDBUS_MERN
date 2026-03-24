import React from "react";
import styles from "./Title.module.css";
import ApartmentIcon from "@material-ui/icons/Apartment";
import TodayIcon from "@material-ui/icons/Today";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRoutes } from "../../../Redux/routes/action";

const Title = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [departure, setDeparture] = React.useState("");
  const [arrival, setArrival] = React.useState("");
  const [date, setDate] = React.useState("");

  React.useEffect(() => {
    dispatch(getRoutes());
  }, [dispatch]);

  const handleSearch = () => {
    if (!departure || !arrival || !date) {
      alert("Please fill all fields");
      return;
    }

    history.push(
      `/select-bus?departure=${departure}&arrival=${arrival}&date=${date}`
    );
  };

  return (
    <div className={styles.wrapper}>
      {/* BACKGROUND IMAGE */}
      <div className={styles.bg}></div>

      {/* FORM CARD */}
      <div className={styles.formCard}>
        <h2>Book Your Bus Ticket</h2>

        <div className={styles.form}>
          {/* SOURCE */}
          <div className={styles.inputBox}>
            <ApartmentIcon className={styles.icon} />
            <input
              type="text"
              placeholder="From"
              value={departure}
              onChange={(e) => setDeparture(e.target.value)}
            />
          </div>

          {/* DESTINATION */}
          <div className={styles.inputBox}>
            <ApartmentIcon className={styles.icon} />
            <input
              type="text"
              placeholder="To"
              value={arrival}
              onChange={(e) => setArrival(e.target.value)}
            />
          </div>

          {/* DATE */}
          <div className={styles.inputBox}>
            <TodayIcon className={styles.icon} />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          {/* BUTTON */}
          <button onClick={handleSearch}>
            Search Buses
          </button>
        </div>
      </div>
    </div>
  );
};

export default Title;