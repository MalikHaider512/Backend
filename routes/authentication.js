const router = require("express").Router();
const user = require("../models/user");
// const bcrypt = require("bcrypt");
const { body, validationResult } = require("express-validator");

router.get("/logIn", (req, res) => {
  res.json({ message: "Backend Login Response" });
});

router.get("/logIn", (req, res) => {
  res.json({ message: "Backend Login Response" });
});

module.exports = router;
