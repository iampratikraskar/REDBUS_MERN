const express = require("express");
const router = express.Router();
const busController = require("../controllers/bus.controller");

const auth = require("../middleware/auth.middleware");
const role = require("../middleware/role.middleware");

// ✅ Only admin/operator can add bus
router.post("/buses", auth, role("admin", "operator"), busController.addBus);

// ✅ Anyone logged in can see buses
router.get("/buses", auth, busController.getAllBuses);

module.exports = router;