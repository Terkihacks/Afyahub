const express = require('express');
const router = express.Router();
const employeeMiddleware = require('../middleware/employeeMiddleware');
const {createEmployee,LoginEmployee,ReadEmployee,DeleteOwnAccount} = require('../controllers/employeeController');

// Public routes (no authentication required)
router.post('/register',createEmployee)
router.post('/login',LoginEmployee)

// Protected routes (require authentication)
router.get('/profile', employeeMiddleware,ReadEmployee);
router.delete('/delete/:id', employeeMiddleware, DeleteOwnAccount);
// router.put('/update', employeeMiddleware, UpdateEmployee);

module.exports = router;

