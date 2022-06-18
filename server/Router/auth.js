const express = requires('express')
const router = express.Router()

const AuthController = required('../Controllers/authcontroller')
const HotelAuthController = required('../Controllers/hotelAuthController')
router.post('/customerSignUp' , authcontroller.customerSignUP)
router.post('/hotelOwnerSignUp' , hotelAuthController.hotelOwnerSignUp)

module.exports=router