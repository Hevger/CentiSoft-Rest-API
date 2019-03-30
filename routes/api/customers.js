const express = require("express");
const router = express.Router();
const passport = require("passport");

// Load Controller
const customerController = require("../../controllers/customerController");
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  customerController.CreateCustomer
);

module.exports = router;
