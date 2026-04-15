const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/booking.controller");

const auth = require("../middleware/auth.middleware");

// ✅ Create booking (logged-in user only)
router.post("/booking", auth, bookingController.addBooking);

// ✅ Get user's bookings
router.get("/booking", auth, bookingController.getBooking);

module.exports = router;