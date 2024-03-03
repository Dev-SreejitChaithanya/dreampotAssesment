//requiring jwt
const jwt=require('jsonwebtoken')

function verifyToken(req,res,next){
    try {
        //assuming the authorization header contains the token 
        const token=req.header('Authorization')
        if(!token)
        throw { status: 401, message: "Unauthorized - Missing token" } 
        const verifyToken=jwt.verify(token,process.env.JWT_SECRET) 
        if(!verifyToken)
        throw { status: 401, message: "Unauthorized - Invalid token" }
        req.userId=verifyToken.id;
        next();
    } catch (error) {
     next(error)   
    }
}

module.exports = verifyToken;

