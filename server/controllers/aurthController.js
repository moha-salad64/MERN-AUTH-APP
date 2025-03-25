const User = require('../model/userModel')
const bcryptjs = require('bcryptjs')

exports.signUpController = async (req , res) =>{
//    console.log(req.body)
    try {

        const {username , email , password} = req.body; //handling the requist from the body
        const hashedPassword = bcryptjs.hashSync(password , 10); // encrypting password or hashing
        const newUser = new User({ // storing data from requist body
        username,
        email,
        password : hashedPassword
    })

        await newUser.save(); //saving data to the database
        res.status(201).json({
            message:"user creation successfully!"
        })
        
    } catch (error) {
        res.status(500).json(error.message);
    }
    
}