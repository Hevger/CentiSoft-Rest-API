const express = require("express");
const router = express.Router();
const passport = require("passport");

// Load Controller
const developerController = require("../../controllers/developerController");

router.get("/test", (req, res) =>
  res.json({ message: "Testing the developer routes" })
);

router.get("/", developerController.GetAll);

router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  developerController.Current
);

router.delete(
  "/delete",
  passport.authenticate("jwt", { session: false }),
  developerController.DeleteDeveloper
);

router.post("/register", developerController.RegisterDeveloper);
router.post("/login", developerController.Login);

module.exports = router;
