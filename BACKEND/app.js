const express = require('express')
const dotenv = require('dotenv')
const app = express()
dotenv.config()

//Start the server
app.listen(process.env.PORT || 5500,() =>{
    console.log(`Server running on port ${process.env.PORT || 5500}`)
})