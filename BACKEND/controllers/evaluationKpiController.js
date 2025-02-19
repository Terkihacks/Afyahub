const db = require('../config/db');
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
exports.patientFeedback = async(req,res) =>{
try {
    // Request the body
    const {employee_id,patient_fullname,feedback_date,satisfaction_score,comments} = req.body
    await db.execute(
        `
        INSERT INTO patient_feedback (employee_id,patient_fullname,feedback_date,satisfaction_score,comments)
        VALUES(?,?,?,?,?)
        `,
        [employee_id,patient_fullname,feedback_date,satisfaction_score,comments]
    )
    res.status(200).json({message:"Feedback has been Successfully receieved"})
} catch (error) {
    console.log(error);
        console.error('Submission  error:', error.message || error);
        res.status(500).json({ message: 'Error submitting feedback', error });
}
}

exports.patientOutcome = async(req,res) =>{
    try {
        const{patient_fullname,employee_id,treatment_date,pre_treatment_metrics,post_treatment_metrics,outcome_status} = req.body;
        await db.execute(
        `
        INSERT INTO patient_feedback (patient_fullname,employee_id,treatment_date,pre_treatment_metrics,post_treatment_metrics,outcome_status)
        VALUES(?,?,?,?,?)
            `,
            [patient_fullname,employee_id,treatment_date,pre_treatment_metrics,post_treatment_metrics,outcome_status]
        )
    } catch (error) {
        
    }
}

exports.deathRates = async(req,res) =>{
    try {
    
    } catch (error) {
        
    }
}
exports.medicationErrors = async(req,res) =>{
    try {
    
    } catch (error) {
        
    }
    
}
exports.dischargewaitTimes = async(req,res) =>{
        try {
        
        } catch (error) {
            
        }
}

// Hospital Team KPI
exports.procedures = async(req,res) =>{

    try {
    
    } catch (error) {
        
    }
}

exports.incidents = async(req,res) =>{

    try {
    
    } catch (error) {
        
    }
}
exports.readmissionrates = async(req,res) =>{

    try {
    
    } catch (error) {
        
    }
}
exports.patientReferrals = async(req,res) =>{

    try {
    
    } catch (error) {
        
    }
}
exports.patientSafety = async(req,res) =>{

    try {
    
    } catch (error) {
        
    }
}

exports.patientFollowupRate = async(req,res) =>{

    try {
    
    } catch (error) {
        
    }
}



