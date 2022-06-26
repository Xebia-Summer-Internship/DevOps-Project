const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hotelSchema = new Schema(
  {
    name: {
      type: String,
      
    },
    email: {
      type: String,
     
      
    },
    phone: {
      type: Number,
     
    },
    FassaiID: {
      type: String,
      
      // unique: true,
    },
    password: {
      type: String,
     
    },
    address: {
      type: String,
      
    },
    pincode: {
      type: Number,
      
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("hotel", hotelSchema);
