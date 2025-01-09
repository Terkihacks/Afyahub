import axios from 'axios'
const API_URL_BASE = 'http://localhost:5000/team'
//Create Team
export const createTeam = async() =>{
    try{ 
     const res = await axios.post(`${API_URL_BASE}/register`)
     return res.data
    }catch(error){
        console.log(error)
    }
}
//Update Team
export const updateTeam = async() =>{
    const API_URL = 'http://localhost:5000/team/register'
    const res = await axios.post(API_URL)
    return res.data
}
//Delete Team
export const deleteTeam = async() =>{
    const API_URL = 'http://localhost:5000/team/register'
    const res = await axios.post(API_URL)
    return res.data
}