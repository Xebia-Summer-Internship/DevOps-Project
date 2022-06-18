const customer = require('../models/customer')
const bcrypt = require('bcrypts')
const jwt =require('jsonwebtoken')

const customerSignUp=(req,res,next)=>{
    bcrypt.hash(req.body.password,10,function(err, hashedPass){
        if(err){
            res.json({
                error:err
            })
        }
    })
    let customer = new customer ({
        name: req.body.name,
        email:req.body.email,
        phone: req.body.phone,
        password: hashedPAss
    })
    customer.save()
    .then(customerr=>{
        res.json({
            message: 'Customer Added Successfully'
        })
    })
    .catch(error =>{
        res.json({
            message: 'An error occured!'
        })
    })
}
module.exports= {
    customerSignUp
}