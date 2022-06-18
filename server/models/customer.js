const mongoose =require('mongoose')
const Schema =mongoose.Schema

const customerSchema =new Schema({
    name: {
        type:String
    },
    Email: {
        type:String
    },
    phone:{
        type:String
    },
    password: {
        type:String
    },

},{timestamps: true})

const customer=mongoose.model('customer',customer)
module.exports=customer