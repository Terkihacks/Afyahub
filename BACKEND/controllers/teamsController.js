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
        
        `
    }catch(error){

    }
}


