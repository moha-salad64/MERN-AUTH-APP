const User = require('../model/userModel')

exports.signUpController = async (req , res) =>{
//    console.log(req.body)
    const {username , email , password} = req.body;
    
    const newUser = new User({
        username,
        email,
        password
    })

    await newUser.save();
    res.status(201).json({
        message:"user creation successfully!"
    })
}