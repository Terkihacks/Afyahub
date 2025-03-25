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
      `INSERT INTO employee (first_name, last_name, password, email, phone, specialization, department) 
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [first_name, last_name, hashedPassword, email, phone, specialization, department]
  );
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
exports.ReadEmployee = async(req,res) =>{
  try {
    // Get employee ID from the authenticated user's token
    const employeeId = req.user.id;

    // Query to get employee details
    const [rows] = await db.execute(
      `SELECT id, first_name, last_name, email, phone, specialization, 
      department, role, created_at
      FROM employee WHERE id = ?`,
      [employeeId]
    );

    // Check if employee exists
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    // Return employee data (excluding password)
    const employee = rows[0];
    res.status(200).json({
      status: 'success',
      data: {
        id: employee.id,
        first_name: employee.first_name,
        last_name: employee.last_name,
        email: employee.email,
        phone: employee.phone,
        specialization: employee.specialization,
        department: employee.department,
        role: employee.role,
        created_at: employee.created_at
      }
    });

  } catch (error) {
    console.error('Error fetching employee profile:', error);
    res.status(500).json({ 
      status: 'error',
      message: 'Error fetching employee profile',
      error: error.message 
    });
  }
}

// Update Profile


//Delete an Employee
exports.DeleteOwnAccount = async(req,res) =>{
    try {
        // Get employee ID from authenticated user's token
        const employeeId = req.user.id;
        // Require password confirmation for security
        // const { password } = req.body;
        // if (!password) {
        //     return res.status(400).json({
        //         status: 'error',
        //         message: 'Password confirmation is required'
        //     });
        // }

        // Verify employee and password
        // const [employee] = await db.execute(
        //     'SELECT password FROM employee WHERE id = ?',
        //     [employeeId]
        // );

        if (employee.length === 0) {
            return res.status(404).json({
                status: 'error',
                message: 'Employee not found'
            });
        }

        // Verify password
        // const isValidPassword = await bcrypt.compare(password, employee[0].password);
        // if (!isValidPassword) {
        //     return res.status(401).json({
        //         status: 'error',
        //         message: 'Invalid password'
        //     });
        // }

        // Perform the delete operation
        const [result] = await db.execute(
            'DELETE FROM employee WHERE id = ?',
            [employeeId]
        );

        if (result.affectedRows === 0) {
            return res.status(400).json({
                status: 'error',
                message: 'Failed to delete account'
            });
        }

        res.status(200).json({
            status: 'success',
            message: 'Your account has been deleted successfully'
        });

    } catch (error) {
        console.error('Error deleting account:', error);
        res.status(500).json({
            status: 'error',
            message: 'Error deleting account',
            error: error.message
        });
    }
}