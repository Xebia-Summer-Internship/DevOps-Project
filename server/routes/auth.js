const router = require("express").Router();
const AuthController = require("../controllers/authController");

// router.get("/", (req, res) => {
//   res.send("route is working fine;");
//   res.end();
// });

// router.use("/HotelSignUp", AuthController);

router.post("/customerSignUp", AuthController.customerSignUp);
router.get("/test", AuthController.testFun);

module.exports = router;
