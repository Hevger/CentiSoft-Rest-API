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

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  customerController.GetAll
);

router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  customerController.GetCustomer
);

router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  customerController.DeleteCustomer
);

module.exports = router;
