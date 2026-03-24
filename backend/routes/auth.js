const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "test@gmail.com" && password === "123456") {
    return res.json({
      message: "Login success",
      token: "dummy-token"
    });
  }

  res.status(401).json({ message: "Invalid credentials" });
});

module.exports = router;