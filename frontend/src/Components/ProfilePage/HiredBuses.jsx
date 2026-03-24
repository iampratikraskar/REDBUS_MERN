import React from "react";
import styles from "./HiredBuses.module.css";
import SingleHiredBus from "./SingleHiredBus";
import axios from "axios";
import { useSelector } from "react-redux";

const HiredBuses = () => {
  const [bookings, setBookings] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  const currentCustomer = useSelector(
    (state) => state.authReducer.currentCustomer
  );

  React.useEffect(() => {
    if (currentCustomer?.email) {
      fetchData(currentCustomer.email);
    }
  }, [currentCustomer]);

  const fetchData = async (email) => {
    try {
      setLoading(true);

      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/v1/api/bookingHire/${email}`
      );

      setBookings(res.data);
    } catch (err) {
      console.error("Error fetching hired bookings:", err);
      setError("Failed to load bookings");
    } finally {
      setLoading(false);
    }
  };

  // 🔥 Render UI states
  if (loading) {
    return <div className={styles.center}>Loading bookings...</div>;
  }

  if (error) {
    return <div className={styles.center}>{error}</div>;
  }

  if (!bookings.length) {
    return (
      <div className={styles.empty}>
        <h2>No Hired Bus Bookings Found 🚫</h2>
        <p>Looks like you haven't booked any hired buses yet.</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {bookings
        .slice() // ✅ avoid mutation
        .reverse()
        .map((booking) => (
          <SingleHiredBus
            key={booking._id || booking.id} // ✅ stable key
            booking={booking}
          />
        ))}
    </div>
  );
};

export default HiredBuses;