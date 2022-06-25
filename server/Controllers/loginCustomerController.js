const customer = require("../models/customer");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");

// Login a registered customer : POST /api/customerLogin :Login required
const customerSignIn = async (req, res, next) => {
  // If there are errors return bad request and the errors
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  try {
    let custm = await customer.findOne({ email });
    if (!custm) {
      return res.status(400).json({
        message: "Customer not found",
      });
    }

    const isMatch = await bcrypt.compare(password, custm.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Incorrect Password",
      });
    }

    // Create JWT Payload
    const payload = {
      id: custm.id,
      name: custm.name,
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET_KEY,
      { expiresIn: "15m" },
      (err, token) => {
        if (err) {
          return res.status(500).json({
            message: "Error signing token",
          });
        }
        return res.status(200).json({
          message: "Login Successful",
          token: token,
          user: payload,
        });
      }
    );
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Error signing token",
    });
  }
};

const fetchSignedInCustomer = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const custm = await customer.findById(req.customer.id).select("-password");
    console.log(custm);
    return res.status(200).json({
      message: "Customer fetched successfully",
      customer: custm,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Error fetching customer",
    });
  }
};

module.exports = { customerSignIn, fetchSignedInCustomer };
