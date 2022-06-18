const customer = require("../models/customer");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const customerSignUp = async (req, res, next) => {
  const salt = await bcrypt.genSalt(10);
  const secPass = await bcrypt.hash(req.body.password, salt);
  //   bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
  //     if (err) {
  //       res.json({
  //         error: err,
  //       });
  //     }
  //   });

  let user = new customer({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    password: secPass,
  });

  user
    .save()
    .then((customer) => {
      res.json({
        message: "Customer Added Successfully",
      });
    })
    .catch((error) => {
      res.json({
        message: "An error occured!",
      });
    });
};

const testFun = (req, res) => {
  res.send("test");
};

module.exports = {
  customerSignUp,
  testFun,
};
