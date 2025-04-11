const db = require('../config/db');  // Import the database connection
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
// Patient Satisfaction KPI
const patientSatisfaction = async (employee_id) => {
    const [feedback] = await db.execute(
        `
        SELECT 
        AVG(satisfaction_score) as averageRating
        FROM patient_feedback
        WHERE employee_id = ?
        `,
        [employee_id]
    );
    return feedback[0].averageRating || 0;
}

// Patient Outcome Score
const patientOutcome = async (employee_id) => {
    const[outcomes] = await db.execute(
        `
        SELECT
        SUM(CASE WHEN outcome IN ('Improved','Recovered') THEN 1 ELSE 0 END) as positiveOutcomes,
        SUM(CASE WHEN outcome IN ('No Change','Worsened') THEN 1 ELSE 0 END) as negativeOutcomes,
        COUNT(*) as total
        FROM patient_outcome
        WHERE employee_id = ?
        `,
        [employee_id]
    )
    return outcomes[0].total > 0
    ? outcomes[0].positiveOutcomes / outcomes[0].total * 100
    : 0;
}

//Incident Rate
const incidentRate = async (employee_id) => {
    const [incidents] = await db.execute(
        `
        SELECT 
        COUNT(*) as totalIncidents
        FROM incidents
        WHERE employee_id = ?
        `,
        [employee_id]
    )
    return incidents[0].totalIncidents || 0;
}

//medication errors
const medicationErrors = async (employee_id) => {
    const [errors] = await db.execute(
        `
        SELECT 
        COUNT(*) as totalErrors
        FROM medication_errors
        WHERE employee_id = ?
        `,
        [employee_id]
    )
    return errors[0].totalErrors || 0;
}


module.exports = {
    patientSatisfaction,
    patientOutcome,
    incidentRate
}