import React from "react";
import styles from "./SubRoutes.module.css";
import { useDispatch } from "react-redux";
import { updateBookingDetails } from "../../../Redux/BookBus/action";
import { useLocation } from "react-router-dom";

const SubRoutes = ({
  handleBoardAndDrop,
  routeDetails,
  busArrivalTime,
  busDepartureTime,
}) => {
  const [activeTab, setActiveTab] = React.useState("boarding");
  const [boardPoint, setBoardPoint] = React.useState("");
  const [destPoint, setDestPoint] = React.useState("");

  const dispatch = useDispatch();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const date = query.get("date");

  const boardingPoints =
    routeDetails?.departureLocation?.subLocations || [];
  const droppingPoints =
    routeDetails?.arrivalLocation?.subLocations || [];

  const handleSubmit = () => {
    if (!boardPoint || !destPoint) {
      alert("Please select both boarding and dropping points");
      return;
    }

    dispatch(
      updateBookingDetails({
        key: "departureDetails",
        value: {
          city: routeDetails.departureLocation.name,
          location: boardPoint,
          time: Number(busDepartureTime),
          date,
        },
      })
    );

    dispatch(
      updateBookingDetails({
        key: "arrivalDetails",
        value: {
          city: routeDetails.arrivalLocation.name,
          location: destPoint,
          time: busArrivalTime,
          date,
        },
      })
    );

    handleBoardAndDrop();
  };

  const renderPoints = (points, type) => {
    return points.map((item, index) => (
      <label key={index} className={styles.pointCard}>
        <input
          type="radio"
          name={type}
          value={item}
          onChange={(e) =>
            type === "boarding"
              ? setBoardPoint(e.target.value)
              : setDestPoint(e.target.value)
          }
        />

        <div className={styles.pointInfo}>
          <strong>{busDepartureTime}:00</strong>
          <span>{item}</span>
        </div>
      </label>
    ));
  };

  return (
    <div className={styles.container}>
      
      {/* Tabs */}
      <div className={styles.tabs}>
        <div
          className={`${styles.tab} ${
            activeTab === "boarding" ? styles.active : ""
          }`}
          onClick={() => setActiveTab("boarding")}
        >
          Boarding Point
        </div>

        <div
          className={`${styles.tab} ${
            activeTab === "dropping" ? styles.active : ""
          }`}
          onClick={() => setActiveTab("dropping")}
        >
          Dropping Point
        </div>
      </div>

      {/* Points */}
      <div className={styles.pointsContainer}>
        {activeTab === "boarding"
          ? renderPoints(boardingPoints, "boarding")
          : renderPoints(droppingPoints, "dropping")}
      </div>

      {/* Button */}
      <button className={styles.continueButton} onClick={handleSubmit}>
        Continue
      </button>
    </div>
  );
};

export { SubRoutes };