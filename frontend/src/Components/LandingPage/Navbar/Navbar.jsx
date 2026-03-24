import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      {/* LEFT SIDE */}
      <div className={styles.leftSection}>
        <img
          src="https://s3.rdbuz.com/web/images/home/rb_logo.svg"
          alt="redBus"
          className={styles.logo}
        />

        {/* NAV LINKS */}
        <div
          className={`${styles.navLinks} ${
            menuOpen ? styles.active : ""
          }`}
        >
          <Link to="/bus-tickets">Bus Tickets</Link>
          <Link to="/rpool">
            rPool <span className={styles.badge}>NEW</span>
          </Link>
          <Link to="/bus-hire">Bus Hire</Link>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className={styles.rightSection}>
        <span>Manage Booking</span>
        <span>Help</span>

        {/* HAMBURGER */}
        <div
          className={styles.menuIcon}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
      </div>
    </nav>
  );
};

export default Navbar;