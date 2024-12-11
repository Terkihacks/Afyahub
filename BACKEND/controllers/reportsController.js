const db = require('../config/db');

exports.generateReports = async(req,res) => {
try{

}catch(error){
console.log(error)
res.status(500).json({message:'Error creating a report'})
}
}