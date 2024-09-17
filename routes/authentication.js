const router = require("express").Router();
const user = require("../models/user");
const bcrypt = require("bcrypt");
const { body, validationResult } = require("express-validator");

router.post("/logIn", (req, res) => {
  console.log("LogIn...");
});

module.exports = router;
