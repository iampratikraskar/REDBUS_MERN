import React from "react";
import Styles from "./BusHirePricing.module.css";

const BusHirePricing = () => {
  return (
    <div className={Styles.pricingBushire}>
      
      <h2 className={Styles.pricing_heading}>Pricing</h2>

      <p className={Styles.pricing_paraSection}>
        By booking your vehicle via redBus, you eliminate middlemen charges and
        unnecessary booking costs. Pricing varies by city. Below are the starting
        base prices for different bus types:
      </p>

      <div className={Styles.pricing_tableSection}>
        <table className={Styles.tableSection}>
          <thead>
            <tr>
              <th></th>
              <th>12 Seater AC</th>
              <th>25 Seater AC</th>
              <th>40 Seater AC</th>
              <th>49 Seater AC</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <th>Price / Km</th>
              <td>₹ 16</td>
              <td>₹ 25</td>
              <td>₹ 40</td>
              <td>₹ 45</td>
            </tr>
            <tr>
              <th>Minimum Km</th>
              <td>250 km</td>
              <td>300 km</td>
              <td>300 km</td>
              <td>300 km</td>
            </tr>
            <tr>
              <th>Driver Charges</th>
              <td>₹ 300/day</td>
              <td>₹ 400/day</td>
              <td>₹ 500/day</td>
              <td>₹ 450/day</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default BusHirePricing;