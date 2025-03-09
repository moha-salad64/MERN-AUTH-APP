const express = require('express');
const {config} = require('dotenv')

//load env variables 
config();
//creating the instance of express
const app = express();
const PORT = process.env.PORT || 5151

app.get('/' , (req , res) =>{
    res.send('wellcome to my server')
})

app.listen(PORT , () =>{
    console.log(`this server running at this ${PORT} port`)
})