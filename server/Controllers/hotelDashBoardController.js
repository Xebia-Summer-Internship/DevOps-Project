const hotelSchema = require('../models/hotelOwner');
const mongoose = require("mongoose");

const hotelDashBoard = async (req, res) => {

    console.log(req.body);
    if(mongoose.Types.ObjectId.isValid(req.params.id)){
       
        //checking if received ID hotel exists or not
        const hotels = await hotelSchema.findById(req.params.id);
        if(hotels == null){
            return res.json({"success": false,"message": "Hotel not found with the recieved ID"});
        }
        else {       
                res.json(hotels); 
        }
    }
    else {
        res.json({"success":false, "message":"Entered ID is Invalid"});
    }

    

}

module.exports = {
    hotelDashBoard,
  };