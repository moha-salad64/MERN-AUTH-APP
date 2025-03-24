const express = require('express');
const { test } = require('../controllers/userController');

const router = express.Router();

// router.get('/api/' , (req , res) =>{
//     res.send('welcome to api server')
   
// })

router.get('/' , test)

module.exports = router