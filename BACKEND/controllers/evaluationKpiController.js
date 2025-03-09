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
    try{
        const {employee_id} = req.params;
        const cacheKey = `kpi:${employee_id}`;
        const cachedData = await cache.get(cacheKey);
        if (cachedData) {
            return res.status(200).json({
                ...cachedData,
                fromCache: true
            });
        }
        // Fetch KPIs in Parallel for better performance
        const [feedbackScore,patientOutcome] = await Promise.all([
            patientSatisfaction(employee_id),
            patientOutcome(employee_id)
        ]);
        
        const kpiData = {
            employee_id,
            feedbackScore,
            patientOutcome,
            calculatedAt: new Date().toISOString()
        };

        // Store in cache
        await cache.set(cacheKey, kpiData);
        return res.status(200).json(kpiData);

    }
    catch(error){
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }

}


