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

//Read Team Activity
exports.getActivities = async (req, res) => {
    try {
        // SELECT * FROM teamactivities ORDER BY start_date DESC
        const query = `
        SELECT 
                ta.id,
                ta.team_id,
                t.team_name,
                ta.activity_name,
                ta.description,
                DATE_FORMAT(ta.start_date, '%Y-%m-%d') as start_date,
                DATE_FORMAT(ta.end_date, '%Y-%m-%d') as end_date,
                DATE_FORMAT(ta.created_at, '%Y-%m-%d %H:%i') as created_at
            FROM 
                teamactivities ta
            INNER JOIN 
                team t ON ta.team_id = t.id
        
        `;
        const [activities] = await db.query(query);

        if (!activities.length) {
            return res.status(404).json({
                success: false,
                message: 'No team activities found'
            });
        }

        res.status(200).json({
            success: true,
            message: "Activities fetched successfully",
            data: activities
        });
    } catch (error) {
        console.error('Error fetching team activities:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching team activities',
            error: error.message
        });
    }
};


//Update Team Activity
exports.updateActivities = async(req,res)=>{
    const{id,activity_name,description,start_date,end_date} = req.body;
    try{
        //Check availability of the data you want to update
        const[rows] = await db.execute('SELECT * FROM teamactivities WHERE id = ? ',[id])
        if(rows.length === 0) {
            return res.status(404).json({message: 'Activity name not found'})
        }
        //Update the fields
        await db.execute(
            `
            UPDATE teamactivities
            SET 
            activity_name = ?
            description = ?
            start_date = ?
            end_date = ?
            `,
            [id,activity_name,description,start_date,end_date]
        )
    }catch(error){
        console.log(error)
        res.status(500).json({message:'Error Updating Team Acivities'});
    }

}
//Delete Team Activity
exports.deleteTeamActivity =  async(req,res) =>{
    const {id} = req.params;
    try {
        //Check if the team Activity exists
        const [rows] = await db.execute('SELECT * FROM teamactivities WHERE id = ?',[id]);
        if(rows.length > 0) return res.status(400).json({message:'Activity already exists'});
        
        await db.execute(
            'DELETE teamactivities(id)',[id]
        )
        res.status(500).json({message:'Team Activity deleted successfully'})
    } catch (error) {
        console.log(error);
        console.error('Executing deletion error:', error.message || error);
        res.status(500).json({ message: 'Error registering team account', error });
    }
}