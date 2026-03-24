import React from "react";
import Styles from "./Profile.module.css";
import { VscAccount } from "react-icons/vsc";
import { FaWallet } from "react-icons/fa";
import { AiOutlineSetting } from "react-icons/ai";
import { BiPin } from "react-icons/bi";
import MyTrips from "./MyTrips";
import HiredBuses from "./HiredBuses";
import { useSelector } from "react-redux";

const Profile = () => {
  const [selectedItem, setSelectedItem] = React.useState("trips");

  const currentCustomer = useSelector(
    (state) => state.authReducer.currentCustomer
  );

  const menuItems = [
    { key: "trips", label: "My Trips", icon: <BiPin /> },
    { key: "hiredBuses", label: "Hired Bus", icon: <BiPin /> },
    { key: "profile", label: "My Profile", icon: <AiOutlineSetting /> },
    { key: "wallet", label: "Wallet", icon: <FaWallet /> },
  ];

  return (
    <div className={Styles.wrapper}>
      {/* SIDEBAR */}
      <div className={Styles.sidebar}>
        <div className={Styles.userBox}>
          <VscAccount className={Styles.avatar} />
          <div>
            <div className={Styles.name}>
              {currentCustomer?.name || "User"}
            </div>
            <div className={Styles.subText}>Wallet Verified</div>
          </div>
        </div>

        {menuItems.map((item) => (
          <div
            key={item.key}
            className={`${Styles.menuItem} ${
              selectedItem === item.key ? Styles.active : ""
            }`}
            onClick={() => setSelectedItem(item.key)}
          >
            {item.icon}
            <span>{item.label}</span>
          </div>
        ))}
      </div>

      {/* MAIN CONTENT */}
      <div className={Styles.content}>
        {selectedItem === "trips" && <MyTrips />}
        {selectedItem === "hiredBuses" && <HiredBuses />}

        {selectedItem === "wallet" && (
          <div className={Styles.card}>
            <h2>Wallet</h2>
            <p>Feature coming soon 💳</p>
          </div>
        )}

        {selectedItem === "profile" && (
          <div className={Styles.card}>
            <h2>My Profile</h2>

            <div className={Styles.profileGrid}>
              <div>
                <label>Name</label>
                <p>{currentCustomer?.name || "-"}</p>
              </div>

              <div>
                <label>Email</label>
                <p>{currentCustomer?.email || "-"}</p>
              </div>

              <div>
                <label>Gender</label>
                <p>{currentCustomer?.gender || "-"}</p>
              </div>

              <div>
                <label>Phone</label>
                <p>1234567890</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;