const router = require("express").Router();
// const CustomerAuthController = require("../controllers/customerAuthController");
const AuthController = require("../controllers/authController");
const HotelAuthController = require("../controllers/hotelAuthController");
const loginCustomerController = require("../controllers/loginCustomerController");
const loginHotelController = require("../controllers/loginHotelController");
const fetchCustomer = require("../middleware/fetchCustomer");
const fetchHotel = require("../middleware/fetchHotel");

// router.get("/", (req, res) => {
//   res.send("route is working fine;");
//   res.end();
// });
router.get("/test", AuthController.testFun);
// router.use("/HotelSignUp", AuthController);

//signup routes
router.post("/customerSignUp", AuthController.customerSignUp);
router.post("/hotelOwnerSignUp", HotelAuthController.hotelOwnerSignUp);

//signin routes
router.post("/customerSignIn", loginCustomerController.customerSignIn);
router.post("/hotelSignIn", loginHotelController.hotelSignIn);
router.post(
  "/fetchCustomer",
  fetchCustomer,
  loginCustomerController.fetchSignedInCustomer
);
router.post("/fetchHotel", fetchHotel, loginHotelController.fetchSignedInOwner);

module.exports = router;
