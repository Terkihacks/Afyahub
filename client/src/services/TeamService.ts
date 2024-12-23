import axios from 'axios'

//Create Team
export const createTeam = async() =>{
    try{
        const API_URL = 'http://localhost:5000/team/register'
        const res = await axios.post(API_URL)
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