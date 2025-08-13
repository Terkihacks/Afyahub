import axios from 'axios'

//Register Admin
export const createAdmin = async() =>{
    const API_URL = 'http://localhost:5000/admin/register'
    const res = await axios.post(API_URL)
    return res.data
}
//Login Admin
export const loginAdmin = async() =>{
    const API_URL = 'http://localhost:5000/admin/login'

    const res = await axios.post(API_URL)
    return res.data
}
//Update Admin
export const updateAdmin = async() =>{
    const API_URL = 'http://localhost:5000/admin/updateAdmin'
    const res = await axios.post(API_URL)
    return res.data
}                                                                       
//Delete Admin
export const deleteAdmin = async() =>{
    const API_URL = 'http://localhost:5000/employee/register'
    const res = await axios.post(API_URL)
    return res.data
}  