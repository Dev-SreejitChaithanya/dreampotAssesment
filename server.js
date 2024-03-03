const express=require('express');
const app=express();

//requring hemlet to secure nodeapp
const helmet = require("helmet")
app.use(helmet( ))

//configuring dotenv for using variables oin .env file 
const dotenv =require('dotenv');
dotenv.config();

//requirinng error handling middleware
const errorHandler = require('./middlewares/errorHandler');

//importing db connection function 
const connectDb = require('./config/connectDb');


//requiring auth  routes
const v1authRoute=require('./routes/authRoutes/v1/authRoutes');

//requiring  user route
const v1userRoute=require("./routes/userRoutes/v1/userDetails");


//setting port to listent to requests
const port = process.env.PORT || 3001;

//using express.json middleware to capture data in request as json 
app.use(express.json())




//auth route to handle signup and signin
app.use('/v1/auth',v1authRoute)

//use rroute
app.use('/v1/user',v1userRoute)

// Error handling middleware
app.use(errorHandler);

//listen server on a port
app.listen(port,()=>{
    console.log(`server listening on ${port}`);
    connectDb()
})