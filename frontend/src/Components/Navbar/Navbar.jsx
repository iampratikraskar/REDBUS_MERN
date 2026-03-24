import React, { useState } from "react";
import styles from "./Navbar.module.css";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import { RiArrowDropDownLine } from "react-icons/ri";
import { MdAccountCircle } from "react-icons/md";

import { Link, useHistory } from "react-router-dom";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import {
  loginSuccess,
  loginFailure,
  logout,
} from "../../Redux/auth/actions";

import ComingSoonModal from "../../Elements/ComingSoonModal";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);
  const currentCustomer = useSelector(
    (state) => state.authReducer.currentCustomer
  );

  // ---------------- LOGIN FUNCTION ----------------
  const handleDummyLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        email: "test@gmail.com",
        password: "123456",
      });

      // Save in localStorage
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      // Redux update
      dispatch(loginSuccess(res.data.user));

      alert("Login Successful ✅");
    } catch (err) {
      dispatch(loginFailure(err));  // ✅ pass error
      alert("Cannot login. Please try again. ");
    }
  };

  // ---------------- LOGOUT ----------------
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    dispatch(logout());
    history.push("/");
  };

  // ---------------- MENU HANDLERS ----------------
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuOpen2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setIsModalOpen(true);
  };

  const handleMenuClose2 = () => {
    setAnchorEl2(null);
  };

  // ---------------- CHECK LOGIN ----------------
  let user = null;

  try {
    user = JSON.parse(localStorage.getItem("user"));
  } catch (e) {
    user = null;
  }

  return (
    <div className={styles.Navbar}>
      <ComingSoonModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
      />

      {/* LEFT SIDE */}
      <div className={styles.leftSide_header}>
        <img
          src="https://www.redbus.in/i/59538b35953097248522a65b4b79650e.png"
          alt="logo"
          onClick={() => history.push("/")}
        />

        <ul className={styles.Navbar__listOne}>
          <li>
            <Link to="/">BUS TICKETS</Link>
          </li>

          <li>
            <Link to="/bus-hire">BUS HIRE</Link>
          </li>
        </ul>
      </div>

      {/* RIGHT SIDE */}
      <div className={styles.rightSide_header}>
        <ul className={styles.Navbar__listTwo}>
          <li onClick={() => setIsModalOpen(true)}>
            MANAGE BOOKING
          </li>

          {/* DROPDOWN 1 */}
          <li>
            <RiArrowDropDownLine
              className={styles.icons}
              onClick={handleMenuOpen}
            />

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
            >
              <MenuItem onClick={handleMenuClose}>Bus Ticket</MenuItem>
              <MenuItem onClick={handleMenuClose}>Cancel</MenuItem>
              <MenuItem onClick={handleMenuClose}>Reschedule</MenuItem>
              <MenuItem onClick={handleMenuClose}>Show My Ticket</MenuItem>
              <MenuItem onClick={handleMenuClose}>Email / SMS</MenuItem>
            </Menu>
          </li>

          {/* ACCOUNT ICON */}
          <li>
            <MdAccountCircle
              className={styles.icons}
              style={{ fontSize: "30px" }}
            />
          </li>

          {/* DROPDOWN 2 */}
          <li>
            <RiArrowDropDownLine
              className={styles.icons}
              onClick={handleMenuOpen2}
            />

            <Menu
              anchorEl={anchorEl2}
              open={Boolean(anchorEl2)}
              onClose={handleMenuClose2}
            >
              {user ? (
                <>
                  <MenuItem>Welcome, {user.name || "User"}</MenuItem>

                  <MenuItem>
                    <Link
                      to="/my-profile"
                      style={{
                        textDecoration: "none",
                        color: "black",
                        fontWeight: "bold",
                      }}
                    >
                      My Profile
                    </Link>
                  </MenuItem>

                  <MenuItem onClick={handleLogout}>
                    Sign Out
                  </MenuItem>
                </>
              ) : (
                <MenuItem onClick={handleDummyLogin}>
                  Dummy Login
                </MenuItem>
              )}
            </Menu>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;