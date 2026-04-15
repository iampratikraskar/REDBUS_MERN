import React from "react";
import { Switch, Route } from "react-router-dom";

import SelectBus from "../Components/SelectBus/SelectBus";
import Error from "../Components/Error/Error";
import Profile from "../Components/ProfilePage/Profile";
import Payment from "../Components/PaymentPage/Payment";
import BusBookingForm from "../Components/BusBookingForm/BusBookingForm";
import LandingPage from "../Components/LandingPage/LandingPage";
import BusHire from "../Components/Bus hire Main Page/BusHire";
import BusServiceCardPage from "../Components/BusServiceSection/BusServiceCard/BusServiceCardPage";
import BusServiceDetailsPage from "../Components/BusServiceSection/BusServiceDetails/BusServiceDetailsPage";
import BusServicePaymentPage from "../Components/BusServiceSection/BusServicePayment/BusServivePaymentPage";
import LoginPage from "../Components/AuthModel/LoginPage";
import RegisterPage from "../Components/AuthModel/RegisterPage";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path="/select-bus" exact component={SelectBus} />
      <Route path="/my-profile" exact component={Profile} />
      <Route path="/login" exact component={LoginPage} />
      <Route path="/register" exact component={RegisterPage} />
      <Route path="/payment-page" exact component={Payment} />
      <Route path="/booking-form" exact component={BusBookingForm} />
      <Route path="/bus-hire" exact component={BusHire} />
      <Route path="/bus-hire-card" exact component={BusServiceCardPage} />
      <Route path="/bus-hire-details/:id" exact component={BusServiceDetailsPage} />
      <Route path="/payments-hire" exact component={BusServicePaymentPage} />
      <Route path="/login" exact component={LoginPage} />

      <Route component={Error} />
    </Switch>
  );
};

export default Routes;