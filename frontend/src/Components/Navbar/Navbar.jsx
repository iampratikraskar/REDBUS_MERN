import React, { useState } from "react";
import styles from "./Navbar.module.css";
import AuthModal from "../AuthModel/AuthModal";
import ComingSoonModal from "../../Elements/ComingSoonModal";

import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginSuccess, logout } from "../../Redux/auth/actions";

import { MdAccountCircle } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";

const Navbar = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector(
    (state) => state?.authReducer?.currentCustomer
  );

  const handleLogout = () => {
    localStorage.clear();
    dispatch(logout());
    history.push("/");
  };

  return (
    <nav className={styles.navbar}>
      {/* MODALS */}
      {/* <AuthModal
        isOpen={isAuthOpen}
        setIsOpen={setIsAuthOpen}
        onLoginSuccess={(user) => dispatch(loginSuccess(user))}
      /> */}

      <ComingSoonModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
      />

      {/* LEFT */}
      <div className={styles.left}>
        <h2 onClick={() => history.push("/")}>RedBus</h2>

        <div className={styles.links}>
          <Link to="/">Bus Tickets</Link>
          <Link to="/bus-hire">Bus Hire</Link>
        </div>
      </div>

      {/* RIGHT */}
      <div className={styles.right}>
        {/* MANAGE BOOKING */}
        <div
          className={styles.dropdown}
          onMouseEnter={() => setOpenMenu("booking")}
          onMouseLeave={() => setOpenMenu(null)}
        >
          <span>
            Manage Booking <RiArrowDownSLine />
          </span>

          {openMenu === "booking" && (
            <div className={styles.menu}>
              <p onClick={() => setIsModalOpen(true)}>Bus Ticket</p>
              <p onClick={() => setIsModalOpen(true)}>Cancel</p>
              <p onClick={() => setIsModalOpen(true)}>Reschedule</p>
            </div>
          )}
        </div>

        {/* USER */}
        <div
          className={styles.dropdown}
          onMouseEnter={() => setOpenMenu("user")}
          onMouseLeave={() => setOpenMenu(null)}
        >
          <MdAccountCircle size={28} />

          {openMenu === "user" && (
            <div className={styles.menu}>
              {user ? (
                <>
                  <p>👋 {user.name}</p>
                  <p onClick={() => history.push("/my-profile")}>
                    My Profile
                  </p>
                  <p onClick={handleLogout}>Logout</p>
                </>
              ) : (
                <p onClick={() => history.push("/login")}>
                  Login / Register
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;