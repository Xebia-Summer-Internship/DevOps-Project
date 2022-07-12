const hotelSchema = require('../models/hotelOwner');

const completeDetails = async (req, res) => {

    console.log(req.body);
    //update the fields and make the detailsCompleted var to true and return success = true
    
    res.json({success: false});
    
};


module.exports = {
  completeDetails,
};
