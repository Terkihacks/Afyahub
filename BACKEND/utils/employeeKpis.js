const db = require('../config/db');  // Import the database connection

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



module.exports = {
    patientSatisfaction,
    patientOutcome
}