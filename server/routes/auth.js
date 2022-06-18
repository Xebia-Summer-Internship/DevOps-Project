const router = require("express").Router();
const AuthController = require("../controllers/authController");
const HotelAuthController = require("../controllers/hotelAuthController");

// router.get("/", (req, res) => {
//   res.send("route is working fine;");
//   res.end();
// });

// router.use("/HotelSignUp", AuthController);

router.post("/customerSignUp", AuthController.customerSignUp);
router.get("/test", AuthController.testFun);
router.post("/hotelOwnerSignUp", HotelAuthController.hotelOwnerSignUp);

module.exports = router;