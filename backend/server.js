const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

// ✅ Routes (updated names)
const authRoutes = require("./routes/auth.routes");
const bookingRoutes = require("./routes/booking.routes");
const bookingHireRoutes = require("./routes/bookingHire.routes");
const busServiceRoutes = require("./routes/busService.routes");
const customerRoutes = require("./routes/customer.routes");
const routeRoutes = require("./routes/route.routes");
const busRoutes = require("./routes/bus.routes");

const app = express();

// ✅ Connect DB
connectDB();

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Routes
app.use("/api", authRoutes);
app.use("/api", bookingRoutes);
app.use("/api", bookingHireRoutes);
app.use("/api", busServiceRoutes);
app.use("/api", customerRoutes);
app.use("/api", routeRoutes);
app.use("/api", busRoutes);

// ✅ Test route
app.get("/", (req, res) => {
  res.send("RedBus API Running");
});

app.get("/api/test", (req, res) => {
  res.json({ message: "Backend is connected 🚀" });
});


// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});