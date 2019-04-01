const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const Customer = require("../models/Customer");

// Load Validators
const createCustomerValidation = require("../validation/createCustomerValidation");

// Get One Customer
exports.GetCustomer = (req, res) => {
  Customer.findById(req.params.id)
    .then(customer => {
      if (customer === null) {
        return res
          .status(404)
          .json({ noCustomerFound: "No customer found with that ID" });
      }
      return res.json(customer);
    })
    .catch(err =>
      res
        .status(404)
        .json({ noCustomerFound: "No customer found with that ID" })
    );
};

// Delete Customer
exports.DeleteCustomer = (req, res) => {
  Customer.findById(req.params.id)
    .then(customer => {
      customer.remove().then(res.json({ success: "Customer is deleted" }));
    })
    .catch(err =>
      res
        .status(404)
        .json({ noCustomerFound: "No customer found with that ID" })
    );
};

// Get All
exports.GetAll = (req, res) => {
  const errors = {};
  Customer.find()
    .then(customers => {
      if (!customers) {
        errors.noCustomers = "No customers found";
      }
      res.json(customers);
    })
    .catch(err => console.log(err));
};

// Create a new Customer
exports.CreateCustomer = (req, res) => {
  const { errors, isValid } = createCustomerValidation(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(404).json(errors);
  }

  Customer.findOne({ email: req.body.email }).then(customer => {
    if (customer) {
      errors.email = "Email already exists";
      return res.status(400).json(errors);
    } else {
      // Create customer object
      const newCustomer = new Customer({
        name: req.body.name,
        address: req.body.address,
        address2: req.body.address2,
        zip: req.body.zip,
        city: req.body.city,
        country: req.body.country,
        email: req.body.email,
        phone: req.body.phone
      });
      newCustomer
        .save()
        .then(customer => res.json(customer))
        .catch(err => console.log(err));
    }
  });
};
