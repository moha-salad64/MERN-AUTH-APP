const express = require('express');
const {config} = require('dotenv')
const connectionDB = require('./database/db');

const userRoute = require('./routes/userRoute')

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


app.use('api/' , userRoute)

app.listen(PORT , () =>{
    console.log(`this server running at this ${PORT} port`)
})