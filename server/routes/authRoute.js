const express = require('express');
const {signUpController, signinController } = require('../controllers/aurthController');

const router = express.Router();

router.post('/signup' , signUpController);
router.post('/signin' , signinController)

module.exports = router;