const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HotelSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    FassaiID: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
        type:String,
        required: true,
    },
    pincode: {
        type: Number,
        required: true,
    },
},
  { timestamps: true }
);

module.exports = mongoose.model("hotel", HotelSchema);