const cache = require('../middleware/cacheMiddleware');
const {patientSatisfaction,patientOutcome} = require('../utils/employeeKpis');
// const handleControllerError = require('../utils/errorHandler');

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


