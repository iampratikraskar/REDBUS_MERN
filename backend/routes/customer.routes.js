const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customer.controller");

router.post("/v1/api/customers", customerController.addNewCustomer);

module.exports = router;
