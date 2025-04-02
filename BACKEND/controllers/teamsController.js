const db = require('../config/db');

exports.createTeam = async(req,res) =>{
    //Create a team
    try{
        const{name,department} = req.body;
        const[rows] = await db.execute('SELECT * FROM teams WHERE = ?',[name])
        if(rows > 0) return res.status(400).json({message:'Team already exists,create a new one'});
        await db.execute('INSERT INTO teams(name,department) VALUES(?,?)'),[name,department]
        res.status(200).json({message: 'Team created successfully'})
    }catch(error){
        console.log(error)
        res.status(500).json({ message: 'Error creating team ', error });
    }
}

//Fetch teams and team members indicating their roles and department
exports.getTeamMembers = async(req,res) =>{
    try{
        const query = `
        SELECT 
            t.team_name,
            t.department,
            e.employee_name,
            e.role
        FROM
            teams t,
        JOIN
            team_members tm ON t.id = tm.team_id
        `
    const [rows] = await db.query(query);
    //Send the result as a JSON response
    res.status(200).json({
        success:"Team members fetched successfully ",
        data:rows,
    })
    }catch(error){
        console.log('Error fetching team Members', error)
        res.status(500).json({
            success: "Error Fetching Team Members",
            message: 'Internal server error',
        });
    }
}
//Get teams

exports.getTeams = async(req,res) =>{
    //Get all teams
    try{
        const [rows] = await db.execute('SELECT * FROM team')
        res.status(200).json({
            success: "Teams fetched successfully",
            data: rows,
        })
    }catch(error){
        console.log('Error fetching teams', error)
        res.status(500).json({message: 'Error fetching teams', error})
    }
}

exports.deleteTeam = async(req,res) =>{
    //Delete a team
    try{
        const {id} = req.id;
        await db.execute('DELETE FROM teams WHERE id = ?',[id])
        res.status(200).json({message: 'Team deleted successfully'})
    }catch(error){
        console.log('Error deleting team', error)
        res.status(500).json({message: 'Error deleting team', error})
    }
}
