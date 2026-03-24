import React from "react";
import { ViewSeats } from "../ViewSeats/ViewSeats";
import styles from "./BottomTabs.module.css";
import { useDispatch } from "react-redux";
import { updateBookingDetails } from "../../../Redux/BookBus/action";

export const BottomTabs = (props) => {
  const [activeTab, setActiveTab] = React.useState(null);

  const dispatch = useDispatch();

  const tabs = [
    { id: 0, label: "Amenities" },
    { id: 1, label: "Boarding & Dropping Points" },
    { id: 2, label: "Reviews" },
    { id: 3, label: "Booking Policies" },
    { id: 4, label: "VIEW SEATS" },
  ];

  const handleTabClick = (tab) => {
    if (tab.id === 4) {
      dispatch(
        updateBookingDetails({
          key: "operatorName",
          value: props.operatorName,
        })
      );
    }

    setActiveTab((prev) => (prev === tab.id ? null : tab.id));
  };

  return (
    <>
      {/* Tabs */}
      <div className={styles.mainBar}>
        {tabs.map((tab, index) => (
          <React.Fragment key={tab.id}>
            <div
              className={`${styles.tab} ${
                activeTab === tab.id ? styles.active : ""
              }`}
              onClick={() => handleTabClick(tab)}
            >
              {tab.label}
            </div>

            {index !== tabs.length - 1 && <div>|</div>}
          </React.Fragment>
        ))}
      </div>

      {/* Content */}
      <div className={styles.displayArea}>
        {activeTab === 0 && <div>Amenities</div>}
        {activeTab === 1 && <div>Boarding & Dropping Points</div>}
        {activeTab === 2 && <div>Reviews</div>}
        {activeTab === 3 && <div>Booking Policies</div>}
        {activeTab === 4 && <ViewSeats {...props} />}
      </div>
    </>
  );
};