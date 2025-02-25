const express = require('express');
const router = express.Router();
// const employeeMiddleware = require('../middleware/employeeMiddleware');
const {createEmployee,LoginEmployee} = require('../controllers/employeeController');

// Public routes (no authentication required)
router.post('/register',createEmployee)
router.post('/login',LoginEmployee)

// Protected routes (require authentication)
// Add any protected routes here with the middleware
// router.put('/update', employeeMiddleware, UpdateEmployee);
// router.delete('/delete/:id', employeeMiddleware, DeleteEmployee);
module.exports = router;

