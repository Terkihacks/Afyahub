const db = require('../config/db');

//Create a team activity
exports.createTeamActivity = async(req,res) =>{
    try{
        const{activity_name,description,start_date,end_date} = req.body;
        await db.execute(`
            INSERT INTO teamactivities(activity_name,description,start_date,end_date)
            `,
            [activity_name,description,start_date,end_date]
        )
        res.status(200).json({message: 'Team Activity created successfully'})
    }catch(error){
        console.log(error);
        res.status(500).json({message:'Error creating a team activity'})
    }
}
