const db = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

//Register a new Employee
exports.createEmployee = async(req,res) =>{
    try{
        // console.log("Request Body:", req.body);
    const{first_name,last_name,password,email,phone,specialization,department} = req.body;
    const[rows] = await db.execute('SELECT * FROM employee WHERE email = ?',[email]);
    if(rows.length > 0) return res.status(400).json({message:'Email already exists'});
    const hashedPassword = await bcrypt.hash(password, 10);
    await db.execute(
        `
        INSERT INTO employee (first_name,last_name,password,email,phone,specialization,department)
        VALUES(?,?,?,?,?,?,?)
        `,
        [first_name,last_name,hashedPassword,email,phone,specialization,department]
    )
    res.status(200).json({ message: 'Account registered successfully'});
    }catch(error){
        console.log(error);
        console.error('Registration error:', error.message || error);
        res.status(500).json({ message: 'Error registering employees account', error });
    }
}

//Login an Employee
exports.LoginEmployee = async(req,res) =>{
   try{
    console.log('Login attempt:', req.body);
       //check if the email exists
    const {email,password} = req.body;
    const [rows] = await db.execute('SELECT * FROM employee WHERE email = ?',[email]);
    // Check if the employee exists
    if (rows.length === 0) {
      return res.status(400).json({ message: 'Employee not found' });
    }
    const employee = rows[0];
    const isMatch = await bcrypt.compare(password,employee.password)
    //Validate the infor and sign in the employee via generating a token
    if(!isMatch){
        console.log('Invalid credentials');
        return res.status(400).json({message:'Invalid Credentials'});
    } 
    else{
        const token = jwt.sign(
            {
              id:employee.id,
              email:employee.email,
              first_name:employee.first_name,
              last_name:employee.last_name,
              role: employee.role 
            },
            process.env.SECRET_KEY,
            {
              expiresIn:'1h' //Token expires in 1 hr
            }
        )
        res.status(200).json({
             message: 'Login successful',
             token,
             user: {
               id: employee.id,
               email: employee.email,
               first_name: employee.first_name,
               last_name:employee.last_name,
               role: employee.role
             } 

            });
    }
   }catch(error){
    console.log(error);
    res.status(500).json({ message: 'Error logging in Employee', error });
   } 
}

//Read Profile
exports.readEmployee = async(req,res) =>{
  
}


//Delete an Employee
exports.DeleteEmployee = async(req,res) =>{
    try{

    }catch(error){
        
    }
}