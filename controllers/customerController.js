const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const Customer = require("../models/Customer");

// Load Validators
const createCustomerValidation = require("../validation/createCustomerValidation");

// Create a new Customer
exports.CreateCustomer = (req, res) => {
  const { errors, isValid } = createCustomerValidation(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(404).json(errors);
  }
};
