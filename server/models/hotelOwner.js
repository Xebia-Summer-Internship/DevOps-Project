const mongoose =require('mongoose')
const Schema =mongoose.Schema

const HotelSchema =new Schema({
    name: {
        type:String,
        required: true,
    },
    Email: {
        type:String,
        required: true,
    },
    phone:{
        type: Number,
        required: true,
    },
    DOB:{
        type: String,
        required: true,
    },
    hotelID:{
        type: String,
        required: true,
    },
    FassaiID: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type:String,
        required: true,
    },

},{timestamps: true})

const hotelOwner=mongoose.model('hotelOwner',username)
module.exports=hotelOwner