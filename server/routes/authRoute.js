const express = require('express');
const {signUpController, signinController, signinWithGoogle } = require('../controllers/aurthController');

const router = express.Router();

router.post('/signup' , signUpController);
router.post('/signin' , signinController)
router.post('/google' , signinWithGoogle)

module.exports = router;