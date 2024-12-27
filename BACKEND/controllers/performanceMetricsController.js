//import the database
const db = require('../config/db');

//Key employee Perfomance Metrics
// - Patients Outcomes
// - Error rate 
// - Average Patient Recovery Rate
// - Number of Procedures Performed(Tasks)
// - Patient Satisfaction Scores

exports.patientOutcome = async(req,res) =>{
    try {
        const{patientsName,treatmentDate,preTreatment,postTreatment,outcomeStatus} = req.body;
        await db.execute(
            
            `
    INSERT INTO patient_outcome(
    patient_fullname,
    employee_id,
    treatment_date,
    pre_treatment_metrics,
    post_treatment_metrics,
    outcome_status
            ) VALUES(?,?,?,?,?,?)
            `,
            [patientsName,treatmentDate,preTreatment,postTreatment,outcomeStatus]
        )
        res.status(200).json({message:'Patient Outcomes data has been uploaded Succesfully'})
    } catch (error) {
        console.log(error);
        res.status(500).jso({message:'Error uploading patients outcomes'})
    }
}

exports.errorRate = async(req,res) =>{
    try {
        const{incidentDate,errorType,descrption} = req.body
        await db.execute(
            `
            INSERT INTO incidents(
            employee_id,
            incident_date,
            error_type,
            description
            )VALUES(?,?,?,?)
            `,
            [incidentDate,errorType,descrption]
        )
        res.status(200).json({message:'Incident has been reported Successfully'})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Error Reporting Incident'})
    }
}

exports.procedurePerformed = async(req,res) =>{
    try {
        const{patientsName,procedureDate,procedureType} = req.body;
        await db.execute (
            `
            INSERT INTO procedures(
             patient_fullname,
             employee_id,
             procedure_date,
             procedure_type
            )VALUES(?,?,?,?)
            `,[patientsName,procedureDate,procedureType]
        )
        res.status(200).json({message:'Task performed Successfully'})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:'Error uploading Task'})
    }
}

exports.patientFeedbackScore =  async(req,res) =>{
    try {
        const{patientsName,feedbackDate,satisfactionDate,comments} = req.body;
        await db.query(
            `
            INSERT INTO patient_feedback (
            employee_id,
            patient_fullname,
            feedback_date,
            satisfaction_score,
            comments
            )VALUES(?,?,?,?,?) 
            `,
            [patientsName,feedbackDate,satisfactionDate,comments]
        )
        res.status(200).json({message:'Feedbacck Submitted Successfully'})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Error submitting feedback'})
    }
}