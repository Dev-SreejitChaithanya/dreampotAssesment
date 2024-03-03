
const user=require('../models/userModel')

const getDetails=async(req,res,next)=>{
    try {
        const {userId}=req;
        let checkUser=await user.findById(userId);

        //checking if the user still exists in db,possible case include user gets deleted and token exists
        if(!checkUser)
        throw ({status:401,"message":"Unauthorized"})
    
        //removing password fomr the user details
        checkUser.password="*";
        
        res.status(200).json({"userdetails":checkUser});
    } catch (error) {
        next(error)
    }
    

   

}

module.exports=getDetails;