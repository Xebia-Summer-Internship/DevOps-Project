const hotel = require("../models/hotelOwner");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const hotelOwnerSignUp = async (req, res, next) => {
  const salt = await bcrypt.genSalt(10);
  const secPass = await bcrypt.hash(req.body.password, salt);

  let owner = new hotel({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    FassaiID: req.body.fssaiId,
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
