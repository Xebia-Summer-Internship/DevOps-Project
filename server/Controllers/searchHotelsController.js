const hotelSchema = require('../models/hotelOwner');

const searchHotels = async (req, res) => {

    console.log(req.body);

    const hotels = await hotelSchema.find({"pincode": req.body.pincode});
    console.log(hotels);
    if(hotels == null){
      res.json({message: "Hotels not found"});
    }
    else{
      res.json(hotels)
    }
    // const hotels = await hotelSchema.find();
    // res.json(hotels);
    
};


module.exports = {
  searchHotels,
};