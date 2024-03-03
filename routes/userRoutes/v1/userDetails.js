const express=require('express')
const router=express.Router();

const verifyToken = require('../../../Middlewares/verifyToken');
const getDetails = require('../../../Controllers/userController');

router.get('/details',verifyToken,getDetails)

module.exports=router;