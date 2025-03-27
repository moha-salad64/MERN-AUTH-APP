const User = require('../model/userModel')
const bcryptjs = require('bcryptjs');
const { errorHandle } = require('../utils/error');
const jwt = require('jsonwebtoken')

exports.signUpController = async (req , res , next) =>{
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
        next(error)
        // next(errorHandle(402 , 'something went wrong!'))
    }
    
}

//signin controller
exports.signinController = async(req , res , next) =>{
    
    const {email , password} = req.body; //handle the data from frontend 
    try {
        //validation of the email and password
        const validEmail = await User.findOne({email});
        if(!validEmail) return next(errorHandle(404 , 'User not found!'));
        const validPassword = bcryptjs.compareSync(password , validEmail.password);
        if(!validPassword) return next(errorHandle(401 , 'Invalid password'));
        const token = jwt.sign({id: validEmail._id} , process.env.JWT_SECRET);
        const {password: hashedPassword , ...user} = validEmail._doc;
        const expiryDate = new Date(Date.now() + 3600000);
        res.cookie('access_token' , token, {httpOnly:true, expires: expiryDate}).status(200).json(user);
    } catch (error) {
        next(error)
    }
}