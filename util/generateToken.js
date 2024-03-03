//requiring jwt
const jwt=require('jsonwebtoken')

//generate token
const generateToken=(id)=>{
    return jwt.sign({id:id},process.env.JWT_SECRET,{expiresIn:'24h'})
}

module.exports=generateToken