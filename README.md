# dreampotAsssesment

# Prerequisites:
    
 > [*Node*](https://nodejs.org/en) ,[*MongoDB communtity Server*](https://www.mongodb.com/try/download/community),[*Mongodb Compass*](https://www.mongodb.com/try/download/compass)

# Steps
1. _clone the repository_
2. _cd dreampotAssesment_
3. **npm install**_-to install all the necessary packages from (package.json) to run the project_
4. **.env**_-create a .env file in root_
5. _make sure your .env is similar to this_
 ```
    PORT=<your_port_number>
    JWT_SECRET= <your_secret>
    MONGODB_URI= <your_mongodbURI>
   ```
6. **npm run dev** _-to run the server in development(i.e by nodemon)_

# API Endpoints
1. **Signup**      - _http://localhost:3000/v1/auth/signup_
2. **Signin**      - _http://localhost:3000/v1/auth/signin_
3. **Userdetails** - _http://localhost:3000/v1/user/details_

> Use any API testing tool like [*Postman*](https://www.postman.com/),[*Swagger*](https://swagger.io/) to test the endpoints

# API Documentation 
[API document](https://documenter.getpostman.com/view/25325004/2sA2xb7bdQ)
