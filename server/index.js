const express = require('express');
const {config} = require('dotenv')
const connectionDB = require('./database/db');

const userRoute = require('./routes/userRoute')
const authRouter = require('./routes/authRoute')

//load env variables 
config();
//database connection 
connectionDB()
//creating the instance of express
const app = express();
const PORT = process.env.PORT || 5151


app.use(express.json());

// app.get('/' , (req , res) =>{
//     res.send('wellcome to my server')
// })

//user router directory
app.use('/api/user' , userRoute);
//auther router directory
app.use('/api/auth' , authRouter)


//middleware functionality
app.use((err , req , res , next) =>{
    const statusCode = err.statusCode || 403;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success:false,
        message,
        statusCode
    }) 
})

app.listen(PORT , () =>{
    console.log(`this server running at this ${PORT} port`)
})