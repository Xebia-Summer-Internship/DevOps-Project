const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hotelSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
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
      type: String,
      required: true,
    },
    pincode: {
      type: Number,
      required: true,
    },

    seater_2_price:{type: Number, default: 0},
    seater_4_price:{type: Number, default: 0},
    seater_6_price:{type: Number, default: 0},

    total_seater_2: {type: Number, default: 0},
    total_seater_4: {type: Number, default: 0},
    total_seater_6: {type: Number, default: 0},

    booked_seater_2: {type: Number, default: 0},
    booked_seater_4: {type: Number, default: 0},
    booked_seater_6: {type: Number, default: 0},
    
    detailsCompleted: {type: Boolean, default: false}
  },
  { timestamps: true }
);

module.exports = mongoose.model("hotel", hotelSchema);
