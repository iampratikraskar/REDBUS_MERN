import React from "react";
import Styles from "./busHireFooter.module.css";

const BusHireFooter = () => {
  return (
    <footer className={Styles.busHire_Footer}>
      <div className={Styles.container}>
        
        {/* Links Section */}
        <div className={Styles.busHireFooterTextSection}>
          
          <div className={Styles.busHireFooterEachTextSection}>
            <h3>Book</h3>
            <p>Bus Ticket</p>
            <p>Bus Hire</p>
            <p>Tempo Travellers</p>
            <p>Car Rentals</p>
          </div>

          <div className={Styles.busHireFooterEachTextSection}>
            <h3>About</h3>
            <p>About Us</p>
            <p>Contact Us</p>
          </div>

          <div className={Styles.busHireFooterEachTextSection}>
            <h3>Info</h3>
            <p>T & C</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
            <p>FAQ</p>
          </div>

          <div className={Styles.busHireFooterEachTextSection}>
            <h3>Global Sites</h3>
            <p>India</p>
            <p>Singapore</p>
            <p>Malaysia</p>
            <p>Indonesia</p>
            <p>Peru</p>
            <p>Colombia</p>
          </div>

          <div className={Styles.busHireFooterEachTextSection}>
            <h3>Our Partners</h3>
            <p>Goibibo</p>
            <p>MakeMyTrip</p>
          </div>

        </div>

        {/* Bottom Section */}
        <div className={Styles.busHireFooterBottom}>
          
          <div className={Styles.logo}>
            <h2>RedBus</h2>
          </div>

          <div className={Styles.copyRightText}>
            © 2026 RedBus. All rights reserved
          </div>

        </div>
      </div>
    </footer>
  );
};

export default BusHireFooter;