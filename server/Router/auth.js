const express = requires('express')
const router = express.Router()

const AuthController = required('../Controllers/authcontroller')
router.post('/customerSignUp' , authcontroller.customerSignUP)

module.exports=router