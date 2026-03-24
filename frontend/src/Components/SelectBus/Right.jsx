import React, { useEffect, useMemo } from "react";
import styles from "./Right.module.css";
import { BusBox } from "../BusDetails/BusBox/BusBox";
import { SortingBar } from "../BusDetails/SortingBar/SortingBar";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getBusDetails } from "../../Redux/BookBus/action";

const Right = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search);

  const departure = query.get("departure");
  const arrival = query.get("arrival");
  const date = query.get("date");

  const dispatch = useDispatch();

  const {
    isLoading,
    isError,
    isSuccess,
    routeDetails,
    matchedBuses,
    busIdWithSeatsObj,
  } = useSelector((state) => state.busDetailsReducer);

  const filters = useSelector((state) => state.updateFilterDetailsReducer);

  useEffect(() => {
    dispatch(getBusDetails(departure, arrival, date));
  }, [departure, arrival, date, dispatch]);

  // 🔥 Helper Functions
  const getArrivalTime = (departureTime, duration) =>
    (Number(departureTime) + Number(duration)) % 24;

  const calculateRating = (ratingArr = []) => {
    let total = 0;
    let count = 0;

    ratingArr.forEach((val, index) => {
      total += (index + 1) * val;
      count += val;
    });

    return count ? Number((total / count).toFixed(1)) : 0;
  };

  // 🚀 Memoized Filtering + Sorting
  const filteredBuses = useMemo(() => {
    let buses = [...matchedBuses];

    const { busType, departureTime, arrivalTime, liveTracking, reschedulable, sortingProperty } = filters;

    // 🟢 Bus Type Filter
    if (Object.values(busType).some(Boolean)) {
      buses = buses.filter((bus) =>
        (busType.seater && bus.busType === 1) ||
        (busType.sleeper && bus.busType === 2) ||
        (busType.ac && bus.busType === 3) ||
        (busType.nonac && bus.busType === 4)
      );
    }

    // 🟢 Departure Time Filter
    if (Object.values(departureTime).some(Boolean)) {
      buses = buses.filter((bus) => {
        const t = Number(bus.departureTime);
        return (
          (departureTime.before6am && t < 6) ||
          (departureTime["6amto12pm"] && t >= 6 && t < 12) ||
          (departureTime["12pmto6pm"] && t >= 12 && t < 18) ||
          (departureTime.after6pm && t >= 18)
        );
      });
    }

    // 🟢 Arrival Time Filter
    if (Object.values(arrivalTime).some(Boolean)) {
      buses = buses.filter((bus) => {
        const t = getArrivalTime(bus.departureTime, routeDetails?.duration || 0);
        return (
          (arrivalTime.before6am && t < 6) ||
          (arrivalTime["6amto12pm"] && t >= 6 && t < 12) ||
          (arrivalTime["12pmto6pm"] && t >= 12 && t < 18) ||
          (arrivalTime.after6pm && t >= 18)
        );
      });
    }

    // 🟢 Live Tracking
    if (liveTracking) {
      buses = buses.filter((bus) => bus.liveTracking === 1);
    }

    // 🟢 Reschedulable
    if (reschedulable) {
      buses = buses.filter((bus) => bus.reschedulable === 1);
    }

    // 🔵 Sorting
    switch (sortingProperty) {
      case "departure":
        buses.sort((a, b) => a.departureTime - b.departureTime);
        break;

      case "arrivals":
        buses.sort((a, b) => {
          const t1 = getArrivalTime(a.departureTime, routeDetails?.duration || 0);
          const t2 = getArrivalTime(b.departureTime, routeDetails?.duration || 0);
          return t1 - t2;
        });
        break;

      case "ratings":
        buses.sort((a, b) => calculateRating(b.rating) - calculateRating(a.rating));
        break;

      default:
        break;
    }

    return buses;
  }, [matchedBuses, filters, routeDetails]);

  return (
    <div className={styles.Right}>
      <SortingBar />

      {isLoading && <div>Loading...</div>}
      {isError && <div>Something went wrong</div>}

      {isSuccess && filteredBuses.length === 0 && (
        <h1>No Bus Found.</h1>
      )}

      {isSuccess &&
        filteredBuses.map((bus) => (
          <BusBox
            key={bus._id}
            {...bus}
            filledSeats={busIdWithSeatsObj?.[bus._id]}
            routeDetails={routeDetails}
          />
        ))}
    </div>
  );
};

export default Right;