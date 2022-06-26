const hotel = require("../models/hotelOwner");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//  Create a hotel account using: POST "api/hotelSignUp" : Doesn't rqequire authentication
const hotelOwnerSignUp = async (req, res, next) => {
  console.log(req.body);
  const salt = await bcrypt.genSalt(10);
  const secPass = await bcrypt.hash(req.body.password, salt);

  let owner = new hotel({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phoneNumber,
    FassaiID: req.body.fassaiid,
    password: secPass,
    address: req.body.address,
    pincode: req.body.pincode,
  });

  owner
    .save()
    .then((owner) => {
      res.json({
        message: "Owner Added Successfully",
      });
    })
    .catch((error) => {
      console.log(error);
      res.json({
        message: "An error occured!",
      });
    });
};

module.exports = {
  hotelOwnerSignUp,
};
