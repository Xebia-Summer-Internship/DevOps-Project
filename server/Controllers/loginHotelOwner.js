const owner = require("../models/hotelOwner");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");

// Login a registered customer : POST /api/customerLogin :Login required
const hotelOwnerSignIn = async (req, res, next) => {
  // If there are errors return bad request and the errors
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  try {
    let custm = await owner.findOne({ email });
    if (!custm) {
      return res.status(400).json({
        message: "Hotel Owner not found",
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
      email: custm.email,
      phone: custm.phone,
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1h" },
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

const fetchSignedInOwner = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    try {
      const custm = await customer.findById(req.owner.id).select("-password");
      console.log(custm);
      return res.status(200).json({
        message: "Hotel Owner fetched successfully",
        customer: custm,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Error fetching Hotel Owner",
      });
    }
  };
module.exports = { hotelOwnerSignIn, fetchSignedInOwner };