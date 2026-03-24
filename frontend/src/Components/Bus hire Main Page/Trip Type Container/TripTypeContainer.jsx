import React from "react";
import Styles from "./TripTypeContainer.module.css";
import { useSelector } from "react-redux";
import { FaBus, FaCity, FaPlane } from "react-icons/fa";

const tripTypes = [
  {
    title: "Outstation",
    desc: ["Anywhere outside", "your city"],
    icon: <FaBus />,
    type: "outstation",
    enabled: true,
  },
  {
    title: "Local",
    desc: ["Anywhere within", "your city"],
    icon: <FaCity />,
    type: "local",
    enabled: false,
  },
  {
    title: "Airport",
    desc: ["Pickup & drop to", "Airport"],
    icon: <FaPlane />,
    type: "airport",
    enabled: false,
  },
];

const TripTypeContainer = ({ handleClick }) => {
  const customerName = useSelector(
    (state) => state.authReducer.currentCustomer
  );

  const [selected, setSelected] = React.useState(null);
  const [message, setMessage] = React.useState("");

  const handleSelect = (item) => {
    setSelected(item.type);

    if (!customerName) {
      setMessage("⚠ Please login to continue");
      return;
    }

    if (!item.enabled) {
      setMessage("🚧 This feature is coming soon");
      return;
    }

    setMessage("");
    handleClick();
  };

  return (
    <div className={Styles.tripTypecontainer}>
      <h2 className={Styles.hireVehicleHeading}>Hire a Vehicle</h2>

      <div className={Styles.wrapper}>
        <div className={Styles.subHeading}>
          Choose your journey type
        </div>

        {/* Message */}
        {message && <div className={Styles.message}>{message}</div>}

        {tripTypes.map((item, index) => (
          <div
            key={index}
            className={`${Styles.card} 
              ${selected === item.type ? Styles.active : ""} 
              ${!item.enabled ? Styles.disabled : ""}`}
            onClick={() => handleSelect(item)}
          >
            <div className={Styles.left}>
              <div className={Styles.icon}>{item.icon}</div>

              <div>
                <div className={Styles.title}>{item.title}</div>
                {item.desc.map((line, i) => (
                  <div key={i} className={Styles.subtitle}>
                    {line}
                  </div>
                ))}
              </div>
            </div>

            {!item.enabled && (
              <div className={Styles.badge}>Coming Soon</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TripTypeContainer;