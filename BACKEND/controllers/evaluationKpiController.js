const cache = require('../middleware/cacheMiddleware');
const {patientSatisfaction,patientOutcome} = require('../utils/employeeKpis');
// const handleControllerError = require('../utils/errorHandler');
/*
KPI to implement(Employees Only)
patient_feedback
patient_outcome
death rates
medication errors
discharge wait times

// Hospital Team
procedures
incidents
readmission rates 
admission rates
patient referrals
patients follow-up rate
patient safety
 */
//Employee  KPI
exports.calculateEmployeeKPIs= async(req,res) =>{
    // Use the utils functions to calculate the KPIs
    const patientSatisfactionKpi = patientSatisfaction();
    const patientOutcomeKpi = patientOutcome();
    //Return the KPIs
    res.status(200).json({
        patientSatisfactionKpi,
        patientOutcomeKpi
    })
    
}


