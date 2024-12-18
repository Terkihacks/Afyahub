const db = require('../config/db');
const bcrypt = require('bcryptjs');

//Register a new Employee
exports.createEmployee = async(req,res) =>{
    try{
    const{first_name,last_name,password,email,phone,specialization,department} = req.body;
    const[rows] = await db.execute('SELECT * FROM employees WHERE email = ?',[email]);
    if(rows.length > 0) return res.status(400).json({message:'Email already exists'});
    const hashedPassword = await bcrypt.hash(password, 10);
    await db.execute(
        `
        INSERT INTO employees (first_name,last_name,password,email,phone,specialization,department)
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

//Login an admin
exports.LoginEmployee = async(req,res) =>{
   try{
       //check if the email exists
    const {email,password} = req.body;
    const [rows] = db.execute('SELECT * FROM employees WHERE email = ?',[email]);
    if(rows > 0) return res.status(400).json({message:'Email already exists'});
    //Check if the entered password match
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
              id:user.id,
              email:user.email,
              first_name:user.first_name,
            },
            process.env.SECRET_KEY,
            {
              expiresIn:'1h' //Token expires in 1 hr
            }
        )
        res.status(200).json({ message: 'Login successful', token });
    }
   }catch(error){
    console.log(error);
    res.status(500).json({ message: 'Error logging in Employee', error });
   } 
}

//Delete an Employee
exports.DeleteEmployee = async(req,res) =>{
    try{

    }catch(error){
        
    }
}