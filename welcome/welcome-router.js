const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Welcome, Api Running" });
});

module.exports = router;
