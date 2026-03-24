import React from "react";
import styles from "./BusBox.module.css";
import Tooltip from "@material-ui/core/Tooltip";
import {
  Stars as StarsIcon,
  LocalOffer as LocalOfferIcon,
  People as PeopleIcon,
  Power as PowerIcon,
  MovieFilter as MovieFilterIcon,
  WbIncandescent as WbIncandescentIcon,
  DirectionsBus as DirectionsBusIcon,
  GpsFixed as GpsFixedIcon,
  Restore as RestoreIcon,
} from "@material-ui/icons";

import { BottomTabs } from "../BottomTabs/BottomTabs";
import { useDispatch } from "react-redux";
import { updateBookingDetails } from "../../../Redux/BookBus/action";

const BusBox = ({
  _id,
  rating,
  operatorName,
  busType,
  departureTime,
  liveTracking,
  reschedulable,
  filledSeats,
  routeDetails,
}) => {
  const dispatch = useDispatch();

  // ✅ Send duration once
  React.useEffect(() => {
    dispatch(
      updateBookingDetails({
        key: "duration",
        value: routeDetails?.duration,
      })
    );
  }, [routeDetails?.duration, dispatch]);

  // ✅ Rating calculation (safe)
  let totalReviews = 0;
  let avgRating = 0;

  rating.forEach((count, index) => {
    avgRating += (index + 1) * count;
    totalReviews += count;
  });

  avgRating =
    totalReviews === 0 ? "0.0" : (avgRating / totalReviews).toFixed(1);

  // ✅ Bus config (clean logic)
  const busConfig = {
    1: { price: 50, name: "Seater" },
    2: { price: 100, name: "Sleeper" },
    3: { price: 125, name: "A/C Seater" },
    default: { price: 75, name: "Non A/C" },
  };

  const config = busConfig[busType] || busConfig.default;

  const seatPrice =
    config.price * Math.floor(routeDetails?.duration / 2 || 1);
  const busTypeName = config.name;

  // ✅ Time calculation
  const busDepartureTime = departureTime;
  const busArrivalTime =
    (Number(departureTime) + Number(routeDetails?.duration || 0)) % 24;

  const formatTime = (time) =>
    `${String(time).padStart(2, "0")}:00`;

  // ✅ Seats
  const totalSeats = 40;
  const availableSeats = totalSeats - filledSeats.length;

  // ✅ Amenities
  const amenities = [
    { icon: <PowerIcon />, label: "Charging Point" },
    { icon: <MovieFilterIcon />, label: "Movie" },
    { icon: <WbIncandescentIcon />, label: "Reading Light" },
    { icon: <DirectionsBusIcon />, label: "Track Bus" },
  ];

  return (
    <div className={styles.card}>
      {/* Top Section */}
      <div className={styles.top}>
        {/* Left */}
        <div className={styles.left}>
          <h3>{operatorName}</h3>
          <p className={styles.busType}>{busTypeName}</p>
        </div>

        {/* Time */}
        <div className={styles.time}>
          <div>
            <strong>{formatTime(busDepartureTime)}</strong>
            <p>{routeDetails?.departureLocation?.name}</p>
          </div>

          <div className={styles.duration}>
            {routeDetails?.duration}h
          </div>

          <div>
            <strong>{formatTime(busArrivalTime)}</strong>
            <p>{routeDetails?.arrivalLocation?.name}</p>
          </div>
        </div>

        {/* Rating */}
        <div className={styles.rating}>
          <div>
            <StarsIcon />
            <span>{avgRating}</span>
          </div>
          <div>
            <PeopleIcon />
            <span>{totalReviews}</span>
          </div>
        </div>

        {/* Price */}
        <div className={styles.price}>
          <h2>₹{seatPrice}</h2>
          <div className={styles.offer}>
            <LocalOfferIcon />
            <span>Deal Applied</span>
          </div>
        </div>

        {/* Seats */}
        <div className={styles.seats}>
          <strong>{availableSeats}</strong>
          <span>Seats Available</span>
        </div>
      </div>

      {/* Amenities */}
      <div className={styles.amenities}>
        {amenities.map((item, i) => (
          <Tooltip key={i} title={item.label} arrow>
            <span className={styles.icon}>{item.icon}</span>
          </Tooltip>
        ))}
      </div>

      {/* Extra Features */}
      <div className={styles.features}>
        {liveTracking === 1 && (
          <div>
            <GpsFixedIcon /> Live Tracking
          </div>
        )}
        {reschedulable === 1 && (
          <div>
            <RestoreIcon /> Reschedulable
          </div>
        )}
      </div>

      {/* Tabs */}
      <BottomTabs
        filledSeats={filledSeats}
        seatPrice={seatPrice}
        routeDetails={routeDetails}
        busId={_id}
        busArrivalTime={busArrivalTime}
        busDepartureTime={busDepartureTime}
        operatorName={operatorName}
      />
    </div>
  );
};

export { BusBox };