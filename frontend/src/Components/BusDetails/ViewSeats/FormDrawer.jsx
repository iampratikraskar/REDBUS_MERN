import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import styles from "./FormDrawer.module.css";
import BusBookingForm from "../../BusBookingForm/BusBookingForm";

export function FormDrawer() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (isOpen) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(isOpen);
  };

  return (
    <>
      {/* BUTTON */}
      <button
        onClick={toggleDrawer(true)}
        className={styles.proceedButton}
      >
        Proceed To Book
      </button>

      {/* DRAWER */}
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
      >
        <div className={styles.drawerContainer}>
          <div className={styles.header}>
            <h2>Passenger Details</h2>
            <span onClick={toggleDrawer(false)}>✕</span>
          </div>

          <div className={styles.formWrapper}>
            <BusBookingForm />
          </div>
        </div>
      </Drawer>
    </>
  );
}