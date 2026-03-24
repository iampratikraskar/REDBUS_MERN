import React from "react";
import Styles from "./BusHire.module.css";
import { useSelector } from "react-redux";

import TripTypeContainer from "./Trip Type Container/TripTypeContainer";
import BusHireForm from "./Bus hire Form/BusHireForm";
import FAQ from "./FAQ Section/FAQ";
import BusHirePricing from "./Bus Hire Pricing/BusHirePricing";

const BusHire = () => {
  const [active, setActive] = React.useState("Type of trip");

  const currentCustomer = useSelector(
    (state) => state.authReducer.currentCustomer
  );

  const handleClick = () => {
    setActive((prev) =>
      prev === "Type of trip" ? "Bus Hire Form" : "Type of trip"
    );
  };

  return (
    <div className={Styles.container}>

      {/* Banner */}
      <div className={Styles.banner}>
        <img
          src="https://www.redbus.in/bushire/static/webv2/home/group-3%20(4).svg"
          alt="banner"
        />

        <div className={Styles.bannerContent}>
          <h1>Bus Hire</h1>
          <p>Rent vehicles with a driver from the best operators</p>
        </div>
      </div>

      {/* Steps Section */}
      <section className={Styles.section}>
        <h2>Book in 3 easy steps</h2>
        <div className={Styles.steps}>
          {["Choose Journey Type", "Enter Travel Details", "Select Vehicle"].map(
            (step, i) => (
              <div key={i} className={Styles.stepCard}>
                <span>{i + 1}</span>
                <p>{step}</p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Features */}
      <section className={Styles.section}>
        <h2>Why Choose Us</h2>
        <div className={Styles.features}>
          {[
            "Great Price",
            "Safe Vehicles",
            "Live Tracking",
            "Customer Support",
            "Verified Drivers",
          ].map((item, i) => (
            <div key={i} className={Styles.featureCard}>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* Pricing */}
      <BusHirePricing />

      {/* Dynamic Section */}
      <div className={Styles.formSection}>
        {active === "Type of trip" ? (
          <TripTypeContainer handleClick={handleClick} />
        ) : (
          <BusHireForm handleClick={handleClick} />
        )}
      </div>

    </div>
  );
};

export default BusHire;