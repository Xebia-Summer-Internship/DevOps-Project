const hotelSchema = require('../models/hotelOwner');
var ObjectId = require('mongodb');
const mongoose = require("mongoose");

const completeDetails = async (req, res) => {

    console.log(req.body);

    //update the fields and make the detailsCompleted var to true and return success = true

    //first checking if recieved id is even vaild ObjectID or not
    if(mongoose.Types.ObjectId.isValid(req.body._id)){
            
        //checking if received ID hotel exists or not
        const hotels = await hotelSchema.findById(req.body._id);
        if(hotels == null){
            return res.json({"success": false,"message": "Hotel not found with the recieved ID"});
        }
        else{
            const updated = await hotelSchema.findByIdAndUpdate(
                { _id: req.body._id }, 
                {"$set" : {
                        "seater_2_price": req.body.seater_2_price,
                        "seater_4_price": req.body.seater_4_price,
                        "seater_6_price": req.body.seater_6_price,
        
                        "total_seater_2": req.body.total_seater_2,
                        "total_seater_4": req.body.total_seater_4,
                        "total_seater_6": req.body.total_seater_6,
        
                        "detailsCompleted": true
                    }
                });
                console.log(updated);
                return res.json({"success": true,"message": "Details Updated"});
        }
    }
    else{
        return res.json({"success": false,"message": "Invalid Hotel ID"});
    }    
};


module.exports = {
  completeDetails,
};
