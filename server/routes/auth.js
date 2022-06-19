const router = require("express").Router();
// const CustomerAuthController = require("../controllers/customerAuthController");
const AuthController = require("../controllers/authController");
const HotelAuthController = require("../controllers/hotelAuthController");
const loginCustomerController = require("../controllers/loginCustomerController");
const fetchCustomer = require("../middleware/fetchCustomer");
const fetchHotel = require("../middleware/fetchHotel");

// router.get("/", (req, res) => {
//   res.send("route is working fine;");
//   res.end();
// });
router.get("/test", AuthController.testFun);
// router.use("/HotelSignUp", AuthController);

router.post("/customerSignUp", AuthController.customerSignUp);
router.post("/hotelOwnerSignUp", HotelAuthController.hotelOwnerSignUp);
// router.post("/hotelSignIn", HotelAuthController.hotelSignIn);
router.post("/customerSignIn", loginCustomerController.customerSignIn);
router.post(
  "/fetchCustomer",
  fetchCustomer,
  loginCustomerController.fetchSignedInCustomer
);
router.post(
  "/fetchHotel",
  fetchHotel,
  loginHotelController.fetchSignedInHotel
);
module.exports = router;