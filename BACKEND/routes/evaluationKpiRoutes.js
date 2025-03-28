const express = require('express');
const router = express.Router();
const employeeMiddleware = require('../middleware/employeeMiddleware');
// Use evaluation controller
const {calculateEmployeeKPIs} = require('../controllers/evaluationKpiController');

router.get('/employeeKPIs',employeeMiddleware,calculateEmployeeKPIs);


module.exports = router;