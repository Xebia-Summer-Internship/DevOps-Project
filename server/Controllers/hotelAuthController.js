const owner = require('../models/hotelOwner')
const bcrypt = require('bcrypts')
const jwt =require('jsonwebtoken')

const hotelOwnerSignUp=(req,res,next)=>{
    bcrypt.hash(req.body.password,10,function(err, hashedPass){
        if(err){
            res.json({
                error:err
            })
        }
    })
    let owner = new hotel ({
        name: req.body.name,
        email:req.body.email,
        phone: req.body.phone,
        FssaiID: req.body.phone,
        password: hashedPAss,
        address: req.body.phone,
        pincode: req.body.phone,
        
    })
    owner.save()
    .then(owner=>{
        res.json({
            message: 'Owner Added Successfully'
        })
    })
    .catch(error =>{
        res.json({
            message: 'An error occured!'
        })
    })
}
module.exports= {
    hotelOwnerSignUp
}