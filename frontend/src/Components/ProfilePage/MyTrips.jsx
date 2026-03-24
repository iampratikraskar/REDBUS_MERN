import React from "react";
import styles from "./MyTrips.module.css";
import SingleTrip from "./SingleTrip";
import axios from "axios";
import { useSelector } from "react-redux";

const MyTrips = () => {
  const [bookings, setBookings] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  const currentCustomer = useSelector(
    (state) => state.authReducer.currentCustomer
  );

  React.useEffect(() => {
    if (currentCustomer?._id) {
      fetchData(currentCustomer._id);
    }
  }, [currentCustomer]);

  const fetchData = async (id) => {
    try {
      setLoading(true);

      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/v1/api/booking/${id}`
      );

      setBookings(res.data);
    } catch (err) {
      console.error("Error fetching bookings:", err);
      setError("Failed to load bookings");
    } finally {
      setLoading(false);
    }
  };

  // 🔥 UI STATES
  if (loading) {
    return <div className={styles.center}>Loading trips...</div>;
  }

  if (error) {
    return <div className={styles.center}>{error}</div>;
  }

  if (!bookings.length) {
    return (
      <div className={styles.empty}>
        <h2>No Trips Found 🚫</h2>
        <p>You haven’t booked any trips yet.</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {bookings
        .slice() // avoid mutation
        .reverse()
        .map((booking) => (
          <SingleTrip
            key={booking._id || booking.id}
            booking={booking}
          />
        ))}
    </div>
  );
};

export default MyTrips;