const customer = require("../models/customer");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//  Create a user account using: POST "api/customerSignUp" : Doesn't rqequire authentication
const customerSignUp = async (req, res, next) => {
  //console.log(req);
  console.log(req.body);
  let success = false;

  let user1 = await customer.findOne({ email: req.body.email });
  if (user1) {
    console.log("user already exists");
    return res
      .status(400)
      .json({ success, err: "Sorry a user with this email already exists" });
  }
  const salt = await bcrypt.genSalt(10);
  const secPass = await bcrypt.hash(req.body.password, salt);

  let user = await customer.create({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    password: secPass,
  });

  // Create JWT Payload
  const payload = {
    id: user.id,
    name: user.name,
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

      resObj = {
        success: true,
        message: "Customer Added Successfully",
        jwtToken: token,
        user: payload,
      };
    }
  );

  try {
    await user
      .save()
      .then((customer) => {
        console.log(customer);
        res.set({
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        });
        console.log(resObj);
        res.json(resObj);
      })
      .catch((error) => {
        //console.log(error);
        res.json({
          message: "An error occured while saving the user!",
        });
      });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Some error occured skipped mongo!");
  }
};

const testFun = (req, res) => {
  res.send("test");
};

module.exports = {
  customerSignUp,
  testFun,
};
