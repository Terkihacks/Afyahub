import axios from 'axios';
//Register a user
export const createEmployee = async() =>{
    const API_URL = 'http://localhost:5000/employee/register'
    const res = await axios.post(API_URL)
    return res.data
}
//Login User
export const loginEmployee =  async() => {
    const API_URL = 'http://localhost:5000/employee/login'
    const res  = await axios.post(API_URL)
    return res.data
}
//Update employee
export const updateEmployee = async() => {
    const API_URL = 'http://localhost:5000/employee/update'
    const res  = await axios.post(API_URL)
    return res.data
}
//Delete employee
export const deleteEmployee = async() => {
    const API_URL = 'http://localhost:5000/employee/update'
    const res  = await axios.post(API_URL)
    return res.data
}