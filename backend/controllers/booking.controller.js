const Booking = require("../models/booking.model");
exports.addBooking = async (req, res) => {
  try {
    const booking = await Booking.create({
      ...req.body,
      customerId: req.user.id   // 🔥 from token
    });

    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.getBooking = async (req, res) => {
  try {
    const bookings = await Booking.find({
      customerId: req.user.id
    });

    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

