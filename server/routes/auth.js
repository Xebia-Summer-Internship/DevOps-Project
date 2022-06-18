const router = require("express").Router();
const AuthController = require("../controllers/authController.js");

// router.get("/", (req, res) => {
//   res.send("route is working fine;");
//   res.end();
// });

router.use("/HotelSignUp", AuthController);

module.exports = router;
