const router = require("express").Router();
const AuthController = require("../controllers/authController");
const HotelAuthController = require("../controllers/hotelAuthController");
const loginCustomerController = require("../controllers/loginCustomerController");
const loginHotelController = require("../controllers/loginHotelController");
const searchHotelsController = require("../controllers/searchHotelsController");
const completeDetailsController = require("../controllers/completeDetailsController");
const hotelDashBoardController  = require("../Controllers/hotelDashBoardController");
const fetchCustomer = require("../middleware/fetchCustomer");
const fetchHotel = require("../middleware/fetchHotel");


router.get("/test", AuthController.testFun);

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

//update or complete details for hotel
router.patch("/completeDetails", completeDetailsController.completeDetails);

//dashboard route
router.post("/searchHotels", searchHotelsController.searchHotels);
router.get("/hotelDashBoard/:id", hotelDashBoardController.hotelDashBoard);

module.exports = router;
