const express = require('express');
const router = express.Router();
const{
    patientOutcome,
    errorRate,
    procedurePerformed,
    patientFeedbackScore
} = require('../controllers/performanceMetricsController')

router.post('/patient-outcome',patientOutcome)
router.post('/error-rate',errorRate)
router.post('/tasks',procedurePerformed)
router.post('/feedback-score',patientFeedbackScore)
module.exports = router;