import React from "react";
import styles from "./Left.module.css";
import { useSelector, useDispatch } from "react-redux";
import { updateFilterDetails } from "../../Redux/FilterAndSort/action";

// Icons
import GpsFixedIcon from "@material-ui/icons/GpsFixed";
import RestoreIcon from "@material-ui/icons/Restore";
import AvTimerIcon from "@material-ui/icons/AvTimer";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import AirlineSeatLegroomExtraIcon from "@material-ui/icons/AirlineSeatLegroomExtra";
import AirlineSeatIndividualSuite from "@material-ui/icons/AirlineSeatIndividualSuite";
import WeekendIcon from "@material-ui/icons/Weekend";
import DirectionsBusIcon from "@material-ui/icons/DirectionsBus";
import WifiIcon from "@material-ui/icons/Wifi";
import LocalDrinkIcon from "@material-ui/icons/LocalDrink";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import SettingsInputHdmiIcon from "@material-ui/icons/SettingsInputHdmi";
import LocalMoviesIcon from "@material-ui/icons/LocalMovies";

const Left = () => {
  const dispatch = useDispatch();

  const filter = useSelector((state) => state.updateFilterDetailsReducer);

  // GENERIC HANDLER
  const handleCheckbox = (category, key) => {
    const updated = {
      ...filter[category],
      [key]: !filter[category][key],
    };

    dispatch(updateFilterDetails({ key: category, value: updated }));
  };

  const handleToggle = (key) => {
    dispatch(updateFilterDetails({ key, value: !filter[key] }));
  };

  return (
    <div className={styles.sidebar}>
      <h3>Filters</h3>

      {/* BASIC */}
      <div className={styles.section}>
        <p className={styles.heading}>Basic</p>

        <div onClick={() => handleToggle("liveTracking")} className={styles.item}>
          <GpsFixedIcon /> Live Tracking
        </div>

        <div onClick={() => handleToggle("reschedulable")} className={styles.item}>
          <RestoreIcon /> Reschedulable
        </div>
      </div>

      {/* DEPARTURE */}
      <div className={styles.section}>
        <p className={styles.heading}>Departure Time</p>

        <label>
          <input type="checkbox" onChange={() => handleCheckbox("departureTime", "before6am")} />
          <AvTimerIcon /> Before 6 AM
        </label>

        <label>
          <input type="checkbox" onChange={() => handleCheckbox("departureTime", "6amto12pm")} />
          <AvTimerIcon /> 6 AM - 12 PM
        </label>

        <label>
          <input type="checkbox" onChange={() => handleCheckbox("departureTime", "12pmto6pm")} />
          <AccessAlarmIcon /> 12 PM - 6 PM
        </label>

        <label>
          <input type="checkbox" onChange={() => handleCheckbox("departureTime", "after6pm")} />
          <AccessAlarmIcon /> After 6 PM
        </label>
      </div>

      {/* BUS TYPES */}
      <div className={styles.section}>
        <p className={styles.heading}>Bus Type</p>

        <label>
          <input type="checkbox" onChange={() => handleCheckbox("busType", "seater")} />
          <AirlineSeatLegroomExtraIcon /> Seater
        </label>

        <label>
          <input type="checkbox" onChange={() => handleCheckbox("busType", "sleeper")} />
          <AirlineSeatIndividualSuite /> Sleeper
        </label>

        <label>
          <input type="checkbox" onChange={() => handleCheckbox("busType", "ac")} />
          <WeekendIcon /> AC
        </label>

        <label>
          <input type="checkbox" onChange={() => handleCheckbox("busType", "nonac")} />
          <DirectionsBusIcon /> Non-AC
        </label>
      </div>

      {/* ARRIVAL */}
      <div className={styles.section}>
        <p className={styles.heading}>Arrival Time</p>

        <label>
          <input type="checkbox" onChange={() => handleCheckbox("arrivalTime", "before6am")} />
          Before 6 AM
        </label>

        <label>
          <input type="checkbox" onChange={() => handleCheckbox("arrivalTime", "6amto12pm")} />
          6 AM - 12 PM
        </label>

        <label>
          <input type="checkbox" onChange={() => handleCheckbox("arrivalTime", "12pmto6pm")} />
          12 PM - 6 PM
        </label>

        <label>
          <input type="checkbox" onChange={() => handleCheckbox("arrivalTime", "after6pm")} />
          After 6 PM
        </label>
      </div>

      {/* AMENITIES */}
      <div className={styles.section}>
        <p className={styles.heading}>Amenities</p>

        <div className={styles.amenity}><WifiIcon /> WiFi</div>
        <div className={styles.amenity}><LocalDrinkIcon /> Water Bottle</div>
        <div className={styles.amenity}><InsertDriveFileIcon /> Blanket</div>
        <div className={styles.amenity}><SettingsInputHdmiIcon /> Charging</div>
        <div className={styles.amenity}><LocalMoviesIcon /> Movie</div>
      </div>
    </div>
  );
};

export default Left;