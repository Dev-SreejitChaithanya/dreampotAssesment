
const user=require('../models/userModel');
const generateToken = require('../util/generateToken');

//
const bcrypt=require("bcrypt");


//signin controller
const  signInController =async(req,res,next)=>{
    try {
        const {email,password}=req.body
            if(!(email && password))
            throw ({status:401,"message":"Invalid Credentials"})
        
            const userExists=await user.findOne({email});
            if(!userExists)
            throw ({status:401,"message":"Invalid Credentials"})

            const checkPassword=await bcrypt.compare(password,userExists.password)
            if(!checkPassword)
            throw ({status:401,"message":"Invalid Credentials"})
        
            const token=generateToken(userExists._id);
            res.status(200).json({token})

         
         

    }
    catch (error) {
        next(error)
    }
    
    
};

//signup controller
const signUpController = async (req, res,next) => {
    try {
        const { name, email, password } = req.body;
        if(!name || !email || !password )
            throw ({ status: 400, "message": "All fields are required." })
        const userExists=await user.findOne({email});
        if(userExists)
            throw ({ status: 409, "message": "User Exists already" })
        const hashPwd=await bcrypt.hash(password,10)
        const User= new user({name,email,password:hashPwd})
        await User.save()
        res.status(200).json('User created!') ;;
        

    } catch (error) {     
        next(error)
    }
     
}

module.exports={signInController,signUpController}