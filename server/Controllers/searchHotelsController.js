
const searchHotels = async (req, res, next) => {

    console.log(req.body);
    res.json({message: "Hotels"});

};


module.exports = {
  searchHotels,
};
