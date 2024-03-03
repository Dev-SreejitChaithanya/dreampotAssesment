const express=require('express');
const { signUpController, signInController } = require('../../../controllers/authController');
const router=express.Router();





//signup route 
router.post('/signup',signUpController)

//signin route
router.post('/signin',signInController)

module.exports = router