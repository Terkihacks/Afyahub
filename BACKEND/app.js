const express = require('express')
const dotenv = require('dotenv')
const app = express()
dotenv.config()
const employeeRoutes = require('./routes/employeeRoutes')

//This middleware is used to parse incoming requests with URL-encoded payloads (e.g., form submissions).
app.use(express.urlencoded({ extended: true }));
//This middleware is used to parse incoming requests with JSON payloads (typically in application/json format).
app.use(express.json());
app.use('/employee',employeeRoutes)

//Start the server
app.listen(process.env.PORT || 5500,() =>{
    console.log(`Server running on port ${process.env.PORT || 5500}`)
})