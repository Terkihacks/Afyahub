const express = require('express')
const dotenv = require('dotenv')
const app = express()
const cors = require("cors");
dotenv.config()
const employeeRoutes = require('./routes/employeeRoutes')
const adminRoutes  = require('./routes/adminRoutes')
const teamsRoutes = require('./routes/teamRoutes')
const evaluationKpiRoutes = require('./routes/evaluationKpiRoutes')
const teamActivityRoutes = require('./routes/teamActivityRoutes')
app.use(cors()); 

//This middleware is used to parse incoming requests with URL-encoded payloads (e.g., form submissions).
app.use(express.urlencoded({ extended: true }));
//This middleware is used to parse incoming requests with JSON payloads (typically in application/json format).
app.use(express.json());
app.use('/employee',employeeRoutes)
app.use('/admin',adminRoutes)
app.use('/metrics',evaluationKpiRoutes)
app.use('/teams',teamsRoutes)
app.use('/teamActivities',teamActivityRoutes)

//Start the server
app.listen(process.env.PORT || 5500,() =>{
    console.log(`Server running on port ${process.env.PORT || 5500}`)
})
