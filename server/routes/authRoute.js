const express = require('express');
const {signUpController, signinController, signinGoogle } = require('../controllers/aurthController');

const router = express.Router();

router.post('/signup' , signUpController);
router.post('/signin' , signinController)
router.post('/google' , signinGoogle)

module.exports = router;